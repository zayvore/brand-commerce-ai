# Brand Commerce AI — Codex Instructions

## Goal
Build a production-ready multi-tenant SaaS platform for AI-assisted brand building, dropshipping, manufacturing, sourcing, supplier commerce and fulfillment.

## Phase 1 scope
Implement only the foundation first:

1. Next.js App Router + TypeScript + Tailwind
2. Supabase Auth and PostgreSQL integration
3. Signup, login, email verification, forgot/reset password and protected routes
4. Multi-tenant workspace architecture
5. Multi-role onboarding
6. Workspace switcher
7. Role-specific dashboard navigation and overview screens
8. Database migrations with RLS
9. Seed/demo data
10. Responsive premium SaaS UI

Do not implement the full marketplace or real marketplace-channel integrations in Phase 1.

## Workspace types
- brand_owner
- dropshipper
- manufacturer
- supplier
- sourcing_agent
- designer
- quality_inspector
- logistics_partner
- warehouse_partner
- marketing_partner
- super_admin

Users may belong to multiple workspaces and may have multiple roles.

Workspace membership permission levels:
- owner
- admin
- manager
- staff
- viewer

## Core database entities
profiles, workspaces, workspace_members, workspace_roles, brands, stores, products, product_variants, manufacturers, manufacturer_products, suppliers, supplier_products, rfqs, rfq_quotes, sample_orders, orders, order_items, inventory, production_orders, production_updates, shipments, warehouses, warehouse_inventory, sales_channels, channel_products, conversations, messages, files, notifications, subscriptions, payments, payouts, activity_logs.

Use UUID primary keys. Business-owned records should carry workspace_id where appropriate. Add created_at, updated_at and created_by where applicable. Add indexes for common workspace, status, owner and date queries.

## Security
Enable Supabase RLS. Never authorize a request only because the client supplied a workspace_id. Verify authenticated membership and permission server-side. Service-role credentials must never be exposed to the browser.

## Dashboards
### Brand Owner
Overview, My Brands, Products, Product Research, Manufacturers, Suppliers, RFQs, Samples, Product Development, AI Brand Studio, Packaging Studio, Website Builder, Sales Channels, Orders, Inventory, Fulfillment, Marketing, Analytics, Finance, Messages, Files, Settings.

### Dropshipper
Overview, Winning Products, Product Research, Supplier Marketplace, Imported Products, My Stores, Website Builder, Sales Channels, Orders, Auto Fulfillment, Inventory Sync, Shipping, Returns, Marketing, Profit Analytics, Messages, Settings.

### Manufacturer
Overview, Factory Profile, Product Catalog, OEM/ODM, RFQs, Sample Requests, Custom Manufacturing, Tech Packs, Production, Quality Control, Bulk Orders, Buyers, Shipping, Payments, Analytics, Messages, Files, Settings.

### Supplier
Overview, Products, Inventory, Price Tiers, Dropshipping Products, Sample Orders, Buyer Orders, Fulfillment, Returns, Customers, Payments, Analytics, Messages, Settings.

### Logistics
Overview, Shipment Requests, Shipments, Pickup Requests, Freight Quotes, Tracking, Routes, Warehouses, Invoices, Payments, Analytics, Messages, Settings.

### Warehouse
Overview, Inbound, Inventory, Storage, Pick & Pack, Outbound, Returns, Clients, Billing, Analytics, Settings.

### Super Admin
Overview, Users, Workspaces, Brands, Manufacturers, Suppliers, Products, RFQs, Samples, Orders, Production, Shipments, Warehouses, Sales Channels, Payments, Payouts, Subscriptions, Commissions, Disputes, KYC Verification, AI Usage, Reports, Notifications, Platform Settings.

## AI architecture
Create a provider-agnostic AI service layer and typed interfaces for:
- Product Research
- Brand Builder
- Supplier Matching
- Website Builder
- Listing Generator
- Pricing Assistant
- Marketing Assistant
- Launch Agent

Phase 1 should use safe placeholder/mock implementations and UI entry points such as an Ask AI button. Do not hardcode provider logic into React components.

## UI
Premium enterprise SaaS appearance: clean light surfaces, dark typography, restrained neutral palette, subtle shadows, rounded cards, generous spacing, responsive sidebar/drawer, accessible focus states. Avoid excessive gradients, oversized icons and template-like clutter.

## Quality gates
Before considering Phase 1 complete:
- npm build passes
- TypeScript passes
- lint passes
- auth redirects are correct
- onboarding works
- workspace switching works
- RLS policies are reviewed
- dashboard navigation changes by workspace type
- mobile/tablet layouts are usable
- secrets are documented only in .env.example

Keep commits focused and document architectural decisions in the README when they materially affect future phases.
