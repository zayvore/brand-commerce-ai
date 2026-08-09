import { dashboardNavigation } from "@/lib/workspaces";

const metrics = [
  ["Revenue", "₹4,82,640", "+18.4%"],
  ["Orders", "1,284", "+12.1%"],
  ["Gross profit", "₹1,46,920", "+21.8%"],
  ["Active products", "48", "+6"],
  ["Samples", "12", "4 pending"],
  ["RFQs", "19", "7 new"],
];

export default function DashboardPage() {
  const navigation = dashboardNavigation.brand_owner ?? [];
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="hidden border-r border-slate-200 bg-white p-5 lg:block">
        <div className="mb-8 text-xl font-bold tracking-tight">Brand Commerce AI</div>
        <div className="mb-6 rounded-xl border border-slate-200 p-3">
          <div className="text-xs uppercase tracking-wide text-slate-500">Workspace</div>
          <div className="mt-1 font-semibold">Demo Brand</div>
          <div className="text-sm text-slate-500">Brand Owner</div>
        </div>
        <nav className="space-y-1">
          {navigation.map((item, index) => (
            <div key={item} className={`rounded-lg px-3 py-2 text-sm ${index === 0 ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{item}</div>
          ))}
        </nav>
      </aside>
      <section className="p-5 sm:p-8 lg:p-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Sunday, 9 August</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">Good afternoon</h1>
          </div>
          <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white">Ask AI</button>
        </header>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map(([label, value, change]) => (
            <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="text-sm text-slate-500">{label}</div>
              <div className="mt-3 text-2xl font-semibold">{value}</div>
              <div className="mt-2 text-sm text-slate-500">{change}</div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between"><h2 className="font-semibold">Launch progress</h2><span className="text-sm text-slate-500">68%</span></div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-2/3 rounded-full bg-slate-950" /></div>
            <div className="mt-6 grid gap-3 text-sm text-slate-600"><div>✓ Brand identity approved</div><div>✓ Supplier shortlisted</div><div>• Sample approval pending</div><div>• Store launch pending</div></div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="font-semibold">AI recommendations</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600"><p>Compare two new manufacturer quotes before confirming your sample.</p><p>Three products have enough margin for marketplace expansion.</p><p>Connect a sales channel after your inventory policy is configured.</p></div>
          </article>
        </div>
      </section>
    </main>
  );
}
