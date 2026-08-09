import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-10">
        <div className="mb-6 inline-flex w-fit rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">
          AI operating system for modern commerce
        </div>
        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Source products. Build your brand. Sell everywhere.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          One workspace for dropshipping, private label manufacturing, suppliers, samples, websites, sales channels, fulfillment and AI-powered launches.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/onboarding" className="rounded-xl bg-white px-6 py-3 font-medium text-slate-950">Start building</Link>
          <Link href="/dashboard" className="rounded-xl border border-white/20 px-6 py-3 font-medium">View dashboard</Link>
        </div>
      </section>
    </main>
  );
}
