import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Bookmark,
  Building2,
  CalendarRange,
  ChartColumnIncreasing,
  ClipboardCheck,
  Factory,
  Heart,
  Mail,
  Package,
  Phone,
  Wallet,
  Workflow,
} from "lucide-react";

const footerLinkGroups = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Customer Stories", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Approvals", href: "#features" },
      { label: "Analytics", href: "#features" },
    ],
  },
];

const utilityButtons = [
  { label: "Save", icon: Heart },
  { label: "Docs", icon: Bookmark },
];

const featureTiles: {
  label: string;
  icon: LucideIcon;
  className: string;
  accentClass: string;
}[] = [
  {
    label: "Budgets",
    icon: Wallet,
    className: "left-[6%] top-[18%] rotate-[-8deg]",
    accentClass: "bg-sky-100 text-sky-600",
  },
  {
    label: "Approvals",
    icon: BadgeCheck,
    className: "left-[22%] top-[56%] rotate-[10deg]",
    accentClass: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "Vendors",
    icon: Building2,
    className: "left-[30%] top-[10%] rotate-[-12deg]",
    accentClass: "bg-violet-100 text-violet-600",
  },
  {
    label: "Workflows",
    icon: Workflow,
    className: "left-[43%] top-[48%] rotate-[7deg]",
    accentClass: "bg-amber-100 text-amber-600",
  },
  {
    label: "Inventory",
    icon: Package,
    className: "left-[59%] top-[14%] rotate-[3deg]",
    accentClass: "bg-cyan-100 text-cyan-700",
  },
  {
    label: "Expenses",
    icon: ClipboardCheck,
    className: "left-[63%] top-[56%] rotate-[-10deg]",
    accentClass: "bg-rose-100 text-rose-600",
  },
  {
    label: "Reports",
    icon: ChartColumnIncreasing,
    className: "left-[77%] top-[18%] rotate-[8deg]",
    accentClass: "bg-indigo-100 text-indigo-600",
  },
  {
    label: "Analytics",
    icon: CalendarRange,
    className: "left-[83%] top-[54%] rotate-[-6deg]",
    accentClass: "bg-orange-100 text-orange-600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-xl font-bold text-black">Ordentra</h1>

          {/* Nav Links */}
          <nav className="hidden gap-8 font-medium text-gray-600 md:flex">
            <a href="#features" className="transition hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-blue-600">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="rounded-full bg-blue-600 px-5 py-2 text-white shadow-md transition hover:bg-blue-700">
            Login
          </button>
        </div>
      </header>

      <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-28 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-5xl font-bold text-black">Ordentra ERP</h1>

          <p className="mt-4 text-lg text-gray-600">
            Manage operations, expenses and approvals in one powerful ERP
            platform.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-white transition ease-in-out hover:bg-violet-600"
          >
            Request a demo
          </a>
        </div>
      </section>

      {/* feature section below */}
      <section id="features" className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold text-black">Powerful ERP Features</h2>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 text-left shadow-md transition hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">
              Budget Planning &amp; Control
            </h3>

            <p className="mt-2 text-gray-600">
              Create budgets by department, site and cost center with
              configurable limits and overspend alerts.
            </p>
          </div>

          <div className="rounded-lg border p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">
              Budget Lifecycle Management
            </h3>
            <p className="mt-2 text-gray-600">
              Full approval workflow from draft to active budgets with revision
              and rejection cycles.
            </p>
          </div>
          <div className="rounded-lg border p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">
              Item Classification Engine
            </h3>
            <p className="mt-2 text-gray-600">
              Categorize operational items like consumables, MRO, raw materials
              and services.
            </p>
          </div>
          <div className="rounded-lg border p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">Cost Allocation</h3>
            <p className="mt-2 text-gray-600">
              Allocate operational costs across departments, projects and cost
              centers.
            </p>
          </div>

          <div className="rounded-lg border p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">
              OpEx Reports &amp; Analytics
            </h3>
            <p className="mt-2 text-gray-600">
              Monitor consumption, stock valuation, material movement and
              reorder alerts.
            </p>
          </div>

          <div className="rounded-lg border p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">
              Vendor Performance Tracking
            </h3>
            <p className="mt-2 text-gray-600">
              Evaluate vendor performance trends and procurement efficiency over
              time.
            </p>
          </div>
        </div>
      </section>

      {/* how it works section */}
      <section id="how-it-works" className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold text-black">How Ordentra Works</h2>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">Connect</h3>
            <p className="pt-2 text-gray-600">
              Integrate your departments, sites and cost centers into one
              centralized ERP platform.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">Track</h3>
            <p className="mt-2 text-gray-600">
              Monitor budgets, expenses, materials and vendor activity in real
              time.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-black">Optimize</h3>
            <p className="mt-2 text-gray-600">
              Use analytics and reporting tools to improve operational
              efficiency and cost control.
            </p>
          </div>
        </div>
      </section>

      {/* pricing section  */}
      <section id="pricing" className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold text-black">Simple Pricing Plan</h2>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {/* pricing cont 1 */}
          <div className="rounded-xl border p-8 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">Starter</h3>
            <p className="mt-2 text-gray-500">Ideal for small teams</p>
            <p className="mt-6 text-4xl font-bold text-black">
              $5 <span className="text-lg text-gray-500">/mo</span>
            </p>
            <button className="mt-6 w-full cursor-pointer rounded-lg bg-blue-600 py-2 text-white transition ease-in-out hover:bg-blue-700">
              Get Started
            </button>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>&#10003; Budget management</li>
              <li>&#10003; Expense tracking</li>
              <li>&#10003; Basic reports</li>
              <li>&#10003; Vendor tracking</li>
            </ul>
          </div>

          {/* pricing cont 2 */}
          <div className="scale-105 rounded-xl border bg-blue-600 p-8 text-left text-white shadow-2xl transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-2 text-blue-100">Ideal for growing teams</p>
            <p className="mt-6 text-4xl font-bold">
              $9 <span className="text-lg text-blue-200">/mo</span>
            </p>
            <button className="mt-6 w-full cursor-pointer rounded-lg bg-white py-2 font-medium text-blue-600 transition ease-in-out hover:bg-gray-100">
              Get Started
            </button>

            <ul className="mt-6 space-y-2 text-blue-100">
              <li>&#10003; All starter features</li>
              <li>&#10003; Advanced analytics</li>
              <li>&#10003; Priority support</li>
              <li>&#10003; Unlimited projects</li>
            </ul>
          </div>

          {/* piricing cont 3 */}
          <div className="rounded-xl border p-8 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-black">Enterprise</h3>
            <p className="mt-2 text-gray-500">Best for large organizations</p>
            <p className="mt-6 text-4xl font-bold text-black">
              $12 <span className="text-lg text-gray-500">/mo</span>
            </p>
            <button className="mt-6 w-full cursor-pointer rounded-lg bg-blue-600 py-2 text-white transition ease-in-out hover:bg-blue-700">
              Get Started
            </button>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>&#10003; All Pro features</li>
              <li>&#10003; Dedicated support</li>
              <li>&#10003; Advanced reporting</li>
              <li>&#10003; Unlimited users</li>
            </ul>
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <section id="testimonials" className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold text-black">
          What Our Customers Say
        </h2>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {/* testimonial 1 */}
          <div className="rounded-lg border bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-gray-600">
              &quot;Ordentra helped us streamline our operational budgets and
              track expenses across departments efficiently.&quot;
            </p>
            <p className="mt-4 font-semibold text-black">Rahul Sharma</p>
            <p className="text-sm text-gray-500">Operations Manager</p>
            <p className="text-sm text-gray-500">~Tata Steel</p>
          </div>

          {/* testimonial 2 */}
          <div className="rounded-lg border bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-gray-600">
              &quot;With Ordentra, our procurement approvals and inventory
              visibility improved dramatically.&quot;
            </p>

            <p className="mt-4 font-semibold text-black">Sneha Iyer</p>

            <p className="text-sm text-gray-500">Supply Chain Lead</p>

            <p className="text-sm text-gray-500">~Mahindra Logistics</p>
          </div>

          {/* testimonial 3 */}
          <div className="rounded-lg border bg-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-gray-600">
              &quot;Vendor tracking and budget approvals are now faster and more
              transparent with Ordentra.&quot;
            </p>

            <p className="mt-4 font-semibold text-black">Arjun Patel</p>

            <p className="text-sm text-gray-500">Procurement Head</p>

            <p className="text-sm text-gray-500">~Larsen &amp; Toubro</p>
          </div>
        </div>
        <p className="m-10 text-gray-500">
          Trusted by 100+ teams managing operations with Ordentra
        </p>
      </section>

      {/* footer section  */}
      <footer
        id="contact"
        className="footer-shell px-2 pb-4 pt-12 sm:px-3 lg:px-4"
      >
        <div className="mx-auto w-full max-w-[88rem] overflow-hidden rounded-[2rem] border border-black/5 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6 border-b border-black/6 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-lg font-semibold tracking-tight text-slate-950">
                    Ordentra
                  </p>
                </div>
              </div>
              <span className="hidden text-slate-300 sm:inline">|</span>
              <span className="font-medium text-emerald-600">
                Operational control for growing teams
              </span>
              <a href="#testimonials" className="transition hover:text-slate-950">
                Customer stories
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {utilityButtons.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
              <a
                href="mailto:contact@ordentra.com"
                className="inline-flex items-center justify-center rounded-full bg-[#151830] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f1226]"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="footer-panel px-4 py-8 sm:px-6 sm:py-10 lg:px-7">
            <div className="flex flex-col gap-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.9fr)] lg:items-start">
                <div className="max-w-xl">
                  <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    <Factory className="h-3.5 w-3.5" />
                    Built for modern operations
                  </p>
                  <h2 className="max-w-lg text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl sm:leading-[1.02]">
                    Stay in control of operations, approvals, and spend.
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {footerLinkGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {group.title}
                      </h3>
                      <ul className="space-y-3">
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              className="inline-flex items-center gap-2 text-[15px] text-slate-700 transition hover:text-slate-950"
                            >
                              <ArrowRight className="h-4 w-4 text-slate-300" />
                              <span>{link.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="footer-stage relative overflow-hidden rounded-[1.9rem] border border-[#f0ebe3] px-3 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] sm:px-5 sm:py-6">
                <div className="pointer-events-none absolute inset-0 opacity-90">
                  <div className="absolute left-[10%] top-[18%] h-52 w-52 rounded-full bg-sky-100/45 blur-3xl" />
                  <div className="absolute right-[14%] top-[28%] h-56 w-56 rounded-full bg-violet-100/35 blur-3xl" />
                  <div className="absolute bottom-[6%] left-[42%] h-60 w-60 rounded-full bg-emerald-100/35 blur-3xl" />
                </div>

                <div className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[700px]">
                  {featureTiles.map(({ label, icon: Icon, className, accentClass }) => (
                    <div
                      key={label}
                      className={`footer-tile absolute flex h-28 w-28 flex-col items-center justify-center gap-3 rounded-[1.8rem] border border-white/90 bg-white text-center transition duration-300 hover:-translate-y-1 sm:h-32 sm:w-32 ${className}`}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] ${accentClass} sm:h-16 sm:w-16`}
                      >
                        <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                      </div>
                      <span className="text-xs font-semibold tracking-[0.08em] text-slate-500 sm:text-[13px]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-black/6 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>&copy; 2026 Ordentra Technologies Pvt. Ltd. All rights reserved.</p>
                <div className="flex flex-wrap items-center gap-5">
                  <a href="#contact" className="transition hover:text-slate-900">
                    Privacy Policy
                  </a>
                  <a href="#contact" className="transition hover:text-slate-900">
                    Terms of Service
                  </a>
                  <a
                    href="tel:+919821252521"
                    className="inline-flex items-center gap-2 transition hover:text-slate-900"
                  >
                    <Phone className="h-4 w-4" />
                    +91 98 21 25 25 21
                  </a>
                  <a
                    href="mailto:contact@ordentra.com"
                    className="inline-flex items-center gap-2 transition hover:text-slate-900"
                  >
                    <Mail className="h-4 w-4" />
                    contact@ordentra.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
