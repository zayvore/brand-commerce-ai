create extension if not exists pgcrypto;

create type public.workspace_type as enum ('brand_owner','dropshipper','manufacturer','supplier','sourcing_agent','designer','quality_inspector','logistics_partner','warehouse_partner','marketing_partner','super_admin');
create type public.member_permission as enum ('owner','admin','manager','staff','viewer');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  country text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  type public.workspace_type not null,
  owner_id uuid not null references public.profiles(id),
  currency text not null default 'INR',
  locale text not null default 'en-IN',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  permission public.member_permission not null default 'viewer',
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create index workspace_members_user_idx on public.workspace_members(user_id);
create index workspaces_owner_idx on public.workspaces(owner_id);

alter table public.profiles enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;

create policy "users read own profile" on public.profiles for select using (id = auth.uid());
create policy "users update own profile" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());

create policy "members read workspaces" on public.workspaces for select using (
  owner_id = auth.uid() or exists (
    select 1 from public.workspace_members wm where wm.workspace_id = id and wm.user_id = auth.uid()
  )
);

create policy "members read memberships" on public.workspace_members for select using (
  user_id = auth.uid() or exists (
    select 1 from public.workspace_members self where self.workspace_id = workspace_id and self.user_id = auth.uid()
  )
);

-- Subsequent migrations should add business tables and reusable authorization helpers.
-- Writes should be performed through server-side actions/functions that validate membership and permission.
