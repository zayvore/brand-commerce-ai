import Link from "next/link";
import { workspaceLabels, workspaceTypes } from "@/lib/workspaces";

const descriptions: Record<string, string> = {
  brand_owner: "Build a private-label brand from product idea to launch.",
  dropshipper: "Find products, connect suppliers and automate fulfillment.",
  manufacturer: "Receive RFQs, samples and manage production workflows.",
  supplier: "List products, manage stock and fulfill buyer orders.",
  sourcing_agent: "Source products and factories for global buyers.",
  designer: "Work on branding, packaging and product design projects.",
  quality_inspector: "Manage product and factory inspection assignments.",
  logistics_partner: "Quote, ship and track domestic and global freight.",
  warehouse_partner: "Manage inbound, storage, pick-pack and outbound.",
  marketing_partner: "Help brands launch and scale campaigns.",
  super_admin: "Operate and govern the platform.",
};

export default function OnboardingPage() {
  return (
    <main className="min-h-screen px-6 py-14 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Workspace setup</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">What do you want to build?</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Choose one or more business modes. You will be able to switch workspaces later.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workspaceTypes.filter((type) => type !== "super_admin").map((type) => (
            <label key={type} className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300">
              <input type="checkbox" name="workspace" value={type} className="mb-5 h-4 w-4" />
              <div className="text-lg font-semibold text-slate-950">{workspaceLabels[type]}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{descriptions[type]}</p>
            </label>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <Link href="/dashboard" className="rounded-xl bg-slate-950 px-6 py-3 font-medium text-white">Continue</Link>
        </div>
      </div>
    </main>
  );
}
