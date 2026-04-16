"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Bookmark,
  Building2,
  CalendarRange,
  ChartColumnIncreasing,
  CheckCheck,
  ClipboardCheck,
  Clock3,
  FileText,
  Heart,
  LayoutTemplate,
  Mail,
  Menu,
  MessageSquare,
  Package,
  Phone,
  Wallet,
  Workflow,
  X,
} from "lucide-react";

type LinkItem = {
  label: string;
  href: string;
};

type IconLinkButton = {
  label: string;
  icon: LucideIcon;
};

type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  eyebrow: string;
};

type FloatingTile = {
  label: string;
  icon: LucideIcon;
  className: string;
  accentClass: string;
};

type PricingPlan = {
  name: string;
  subtitle: string;
  price: string;
  accent: "light" | "primary";
  features: string[];
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const navLinks: LinkItem[] = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#how-it-works" },
  { label: "Resources", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

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

const utilityButtons: IconLinkButton[] = [
  { label: "Save", icon: Heart },
  { label: "Docs", icon: Bookmark },
];

const featureCards: FeatureCard[] = [
  {
    title: "Budget Planning & Control",
    description:
      "Create budgets by department, site, and cost center with configurable limits and overspend alerts.",
    icon: Wallet,
    accentClass: "bg-sky-100 text-sky-700",
    eyebrow: "Financial clarity",
  },
  {
    title: "Budget Lifecycle Management",
    description:
      "Move budgets from draft to approval to activation with revisions, rejections, and complete accountability.",
    icon: BadgeCheck,
    accentClass: "bg-emerald-100 text-emerald-700",
    eyebrow: "Approval ready",
  },
  {
    title: "Item Classification Engine",
    description:
      "Categorize consumables, MRO, raw materials, and services so every purchase follows a clean structure.",
    icon: Building2,
    accentClass: "bg-violet-100 text-violet-700",
    eyebrow: "Structured operations",
  },
  {
    title: "Cost Allocation",
    description:
      "Allocate operational costs across departments, projects, and cost centers without manual spreadsheet cleanup.",
    icon: Workflow,
    accentClass: "bg-amber-100 text-amber-700",
    eyebrow: "Cross-team visibility",
  },
  {
    title: "OpEx Reports & Analytics",
    description:
      "Monitor consumption, stock valuation, material movement, and reorder alerts from one reporting layer.",
    icon: ChartColumnIncreasing,
    accentClass: "bg-indigo-100 text-indigo-700",
    eyebrow: "Live reporting",
  },
  {
    title: "Vendor Performance Tracking",
    description:
      "Evaluate vendor performance trends, procurement efficiency, and reliability over time in one place.",
    icon: ClipboardCheck,
    accentClass: "bg-rose-100 text-rose-700",
    eyebrow: "Supplier intelligence",
  },
];

const floatingTiles: FloatingTile[] = [
  {
    label: "Budgets",
    icon: Wallet,
    className: "left-[5%] top-[20%] rotate-[-8deg]",
    accentClass: "bg-sky-100 text-sky-600",
  },
  {
    label: "Approvals",
    icon: BadgeCheck,
    className: "left-[17%] top-[52%] rotate-[10deg]",
    accentClass: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "Vendors",
    icon: Building2,
    className: "left-[29%] top-[18%] rotate-[-12deg]",
    accentClass: "bg-violet-100 text-violet-600",
  },
  {
    label: "Workflows",
    icon: Workflow,
    className: "left-[41%] top-[50%] rotate-[8deg]",
    accentClass: "bg-amber-100 text-amber-600",
  },
  {
    label: "Inventory",
    icon: Package,
    className: "left-[53%] top-[18%] rotate-[6deg]",
    accentClass: "bg-cyan-100 text-cyan-700",
  },
  {
    label: "Expenses",
    icon: ClipboardCheck,
    className: "left-[65%] top-[52%] rotate-[-10deg]",
    accentClass: "bg-rose-100 text-rose-600",
  },
  {
    label: "Reports",
    icon: ChartColumnIncreasing,
    className: "left-[77%] top-[20%] rotate-[10deg]",
    accentClass: "bg-indigo-100 text-indigo-600",
  },
  {
    label: "Analytics",
    icon: CalendarRange,
    className: "left-[89%] top-[52%] rotate-[-6deg]",
    accentClass: "bg-orange-100 text-orange-600",
  },
];

const workflowSteps = [
  {
    title: "Connect",
    description:
      "Integrate your departments, sites and cost centers into one centralized ERP platform.",
  },
  {
    title: "Track",
    description:
      "Monitor budgets, expenses, materials and vendor activity in real time.",
  },
  {
    title: "Optimize",
    description:
      "Use analytics and reporting tools to improve operational efficiency and cost control.",
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    subtitle: "Ideal for small teams",
    price: "$5",
    accent: "light",
    features: [
      "Budget management",
      "Expense tracking",
      "Basic reports",
      "Vendor tracking",
    ],
  },
  {
    name: "Pro",
    subtitle: "Ideal for growing teams",
    price: "$9",
    accent: "primary",
    features: [
      "All starter features",
      "Advanced analytics",
      "Priority support",
      "Unlimited projects",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Best for large organizations",
    price: "$12",
    accent: "light",
    features: [
      "All Pro features",
      "Dedicated support",
      "Advanced reporting",
      "Unlimited users",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      '"Ordentra helped us streamline our operational budgets and track expenses across departments efficiently."',
    name: "Rahul Sharma",
    role: "Operations Manager",
    company: "Tata Steel",
  },
  {
    quote:
      '"With Ordentra, our procurement approvals and inventory visibility improved dramatically."',
    name: "Sneha Iyer",
    role: "Supply Chain Lead",
    company: "Mahindra Logistics",
  },
  {
    quote:
      '"Vendor tracking and budget approvals are now faster and more transparent with Ordentra."',
    name: "Arjun Patel",
    role: "Procurement Head",
    company: "Larsen & Toubro",
  },
];

function BrandMark() {
  return (
    <span className="grid h-5 w-5 grid-cols-2 gap-0.5 rounded-full bg-white p-0.5 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
      <span className="rounded-full bg-[#1da1f2]" />
      <span className="rounded-full bg-[#111111]" />
      <span className="rounded-full bg-[#111111]" />
      <span className="rounded-full bg-[#1da1f2]" />
    </span>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function TaskProgressCard({
  icon: Icon,
  iconClass,
  label,
  progress,
  widthClass,
}: {
  icon: LucideIcon;
  iconClass: string;
  label: string;
  progress: string;
  widthClass: string;
}) {
  return (
    <div className="rounded-[1rem] bg-white px-3 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-md ${iconClass}`}
          >
            <Icon className="h-3.5 w-3.5" />
          </span>
          <span className="text-[10px] text-slate-700">{label}</span>
        </div>
        <span className="text-[10px] text-slate-400">{progress}</span>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-slate-100">
        <div className={`h-full rounded-full bg-[#2ec5ff] ${widthClass}`} />
      </div>
    </div>
  );
}

function IntegrationCard() {
  return (
    <div className="rounded-[1.35rem] border border-black/5 bg-[#f6f6f6] p-4 text-left shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
      <p className="text-[12px] font-medium text-slate-700">100+ integrations</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <Mail className="h-7 w-7 text-[#ea4335]" />
        </div>
        <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <MessageSquare className="h-7 w-7 text-[#4a154b]" />
        </div>
        <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <CalendarRange className="h-7 w-7 text-[#2563eb]" />
        </div>
      </div>
    </div>
  );
}

function MobileHeroCards() {
  return (
    <div className="mt-10 grid w-full max-w-[320px] gap-4 sm:hidden">
      <div className="rounded-[1.35rem] border border-black/5 bg-[#f6f6f6] p-4 text-left shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
        <p className="text-[12px] font-medium text-slate-700">Today&apos;s tasks</p>
        <div className="mt-4 space-y-3">
          <TaskProgressCard
            icon={FileText}
            iconClass="bg-[#ff6b4a]/12 text-[#ff6b4a]"
            label="New RFQ for campaign"
            progress="60%"
            widthClass="w-[60%]"
          />
          <TaskProgressCard
            icon={LayoutTemplate}
            iconClass="bg-[#2bc36b]/12 text-[#2bc36b]"
            label="Design PPT review"
            progress="72%"
            widthClass="w-[72%]"
          />
        </div>
      </div>

      <IntegrationCard />
    </div>
  );
}

function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 rounded-[1.35rem] border border-black/6 bg-white px-3 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:px-5 lg:px-6">
        <a
          href="#"
          className="flex items-center gap-3 text-[15px] font-semibold tracking-[-0.03em] text-[#161616]"
        >
          <BrandMark />
          Ordentra
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-[11px] font-medium text-slate-500 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#contact"
              className="text-[11px] font-medium text-slate-600 transition hover:text-slate-950"
            >
              Sign in
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-[11px] font-medium text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.06)] transition hover:border-slate-300 hover:text-slate-950"
            >
              Get demo
            </a>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.06)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-slate-300 hover:text-slate-950 lg:hidden"
          >
            <Menu
              className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isMobileMenuOpen
                  ? "scale-75 rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isMobileMenuOpen
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-75 -rotate-90 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close navigation overlay"
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-white/20 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      <div
        className={`absolute inset-x-3 top-full z-50 mt-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden sm:inset-x-5 ${
          isMobileMenuOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1400px] rounded-[1.35rem] border border-black/6 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-slate-50 hover:text-slate-950 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 35}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mt-2 inline-flex items-center justify-center rounded-xl bg-[#2f80ff] px-4 py-3 text-sm font-medium text-white shadow-[0_20px_35px_rgba(47,128,255,0.24)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#1f72f0] ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${navLinks.length * 35}ms` : "0ms" }}
            >
              Get demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pb-8 pt-3 sm:pb-12">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden px-3 py-8 sm:px-5 sm:py-10 lg:min-h-[760px] lg:px-6 lg:py-12">

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center pt-4 text-center sm:pt-24 lg:pt-34">
            <div className="hero-app-badge mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-[1.45rem] border border-black/6 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-[15px] w-[15px] rounded-full bg-[#28c3ff]" />
                <span className="h-[15px] w-[15px] rounded-full bg-[#d8d8d8]" />
                <span className="h-[15px] w-[15px] rounded-full bg-[#3a3a3a]" />
                <span className="h-[15px] w-[15px] rounded-full bg-[#3a3a3a]" />
              </div>
            </div>

            <h1 className="max-w-5xl text-[3rem] font-medium tracking-[-0.08em] text-[#121212] sm:text-[4.5rem] lg:text-[5.25rem] lg:leading-[0.93]">
              Think, plan, and track
              <span className="mt-0 block text-[#adadad]">all in one place</span>
            </h1>

            <p className="mt-7 max-w-[38rem] text-base leading-8 text-slate-500 sm:text-[1.15rem]">
              Efficiently manage your tasks and boost productivity.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[0.95rem] bg-[#2f80ff] px-8 py-3.5 text-[15px] font-medium text-white shadow-[0_20px_35px_rgba(47,128,255,0.28)] transition hover:bg-[#1f72f0]"
              >
                Get free demo
              </a>
            </div>

            <MobileHeroCards />
          </div>

          <div className="hero-float-left absolute left-5 top-10 z-10 hidden sm:block sm:left-8 lg:left-10 lg:top-11">
            <div className="relative rotate-[-7deg] rounded-[1.35rem] border border-[#f0e0a8] bg-[#ffe97a] px-4 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.08)] sm:px-5 sm:py-5">
              <p className="max-w-[12rem] text-[13px] leading-7 text-[#3f3420]">
                Take notes to keep track of vendor details, team approvals, and
                budget follow-ups.
              </p>
            </div>
            <div className="absolute -bottom-9 left-8 rotate-[8deg] rounded-[1.2rem] border border-black/5 bg-white p-4 shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-[#377dff] text-white">
                <CheckCheck className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="hero-float-right absolute right-1 top-5 z-10 hidden sm:right-6 sm:block lg:right-8 lg:top-8">
            <div className="relative rotate-[10deg] rounded-[1.5rem] border border-black/5 bg-[#f6f6f6] p-4 shadow-[0_18px_35px_rgba(0,0,0,0.08)] sm:w-[210px]">
              <p className="text-[12px] font-medium text-[#202020]">Reminders</p>
              <div className="mt-4 rounded-[1rem] bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-medium text-slate-800">
                      Today&apos;s Meeting
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">11:30 AM</p>
                  </div>
                </div>
                <div className="mt-3 rounded-full bg-[#eef5ff] px-3 py-1 text-center text-[10px] font-semibold text-[#4091ff]">
                  13:00 - 13:25
                </div>
              </div>
              <a
                href="#contact"
                className="mt-3 inline-flex rounded-full bg-[#111111] px-3 py-1.5 text-[10px] font-medium text-white transition hover:bg-black"
              >
                Schedule now
              </a>
            </div>
          </div>

          <div className="hero-float-bottom-left absolute bottom-0 left-4 z-10 hidden w-[260px] translate-y-12 sm:left-7 sm:block sm:w-[285px] lg:left-9">
            <div className="rounded-[1.5rem] border border-black/5 bg-[#f6f6f6] p-4 shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
              <p className="text-[12px] font-medium text-slate-700">Today&apos;s tasks</p>
              <div className="mt-4 space-y-3">
                <TaskProgressCard
                  icon={FileText}
                  iconClass="bg-[#ff6b4a]/12 text-[#ff6b4a]"
                  label="New RFQ for campaign"
                  progress="60%"
                  widthClass="w-[60%]"
                />
                <TaskProgressCard
                  icon={LayoutTemplate}
                  iconClass="bg-[#2bc36b]/12 text-[#2bc36b]"
                  label="Design PPT review"
                  progress="72%"
                  widthClass="w-[72%]"
                />
              </div>
              <a
                href="#features"
                className="mt-4 inline-flex text-[11px] font-medium text-[#2f80ff] transition hover:text-[#1f72f0]"
              >
                View all tasks
              </a>
            </div>
          </div>

          <div className="hero-float-bottom-right absolute bottom-0 right-4 z-10 hidden w-[260px] translate-y-12 sm:right-8 sm:block sm:w-[310px] lg:right-10">
            <div className="rounded-[1.5rem] border border-black/5 bg-[#f6f6f6] p-4 shadow-[0_18px_35px_rgba(0,0,0,0.08)]">
              <p className="text-[12px] font-medium text-slate-700">100+ integrations</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                  <Mail className="h-7 w-7 text-[#ea4335]" />
                </div>
                <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                  <MessageSquare className="h-7 w-7 text-[#4a154b]" />
                </div>
                <div className="rounded-[1rem] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
                  <CalendarRange className="h-7 w-7 text-[#2563eb]" />
                </div>
              </div>
              <a
                href="#pricing"
                className="mt-4 inline-flex text-[11px] font-medium text-slate-700 transition hover:text-slate-950"
              >
                Explore plans
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute left-[14%] top-[31%] hidden h-16 w-16 rotate-[-12deg] rounded-[1.3rem] border border-white/90 bg-white/75 shadow-[0_18px_35px_rgba(0,0,0,0.06)] lg:block" />
          <div className="pointer-events-none absolute right-[16%] top-[42%] hidden h-14 w-14 rotate-[11deg] rounded-[1.25rem] border border-white/90 bg-white/70 shadow-[0_18px_35px_rgba(0,0,0,0.06)] lg:block" />
        </div>
      </Reveal>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="pb-20 pt-8 sm:pt-10">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden px-3 py-8 sm:px-5 sm:py-10 lg:px-6 lg:py-12">
          <div className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
                Built For Modern Operations
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
                Powerful ERP features with the same calm flow as your hero.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                From planning and approvals to vendors and analytics, Ordentra
                keeps every operational workflow inside one polished, readable
                workspace.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featureCards.map(
                ({ title, description, icon: Icon, accentClass, eyebrow }, index) => (
                  <Reveal
                    key={title}
                    delay={index * 70}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
                  >
                    <div className="relative z-10">
                      <div className="flex flex-col items-center gap-4">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] ${accentClass}`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {eyebrow}
                        </span>
                      </div>

                      <h3 className="mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-slate-950">
                        {title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-slate-600">
                        {description}
                      </p>

                      <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-[#2f80ff]">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <Reveal className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Workflow in motion
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            How Ordentra works from request to reporting.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A clear operational flow for teams that need alignment, approvals,
            and visibility without the mess of disconnected tools.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 90}
              className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />

              <div className="relative z-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-slate-100 text-slate-900">
                    <span className="text-lg font-semibold tracking-[-0.04em]">
                      0{index + 1}
                    </span>
                  </div>
                  <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f80ff]">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 h-1.5 rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full bg-[#2f80ff] ${
                      index === 0 ? "w-[38%]" : index === 1 ? "w-[68%]" : "w-full"
                    }`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <Reveal className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Plans that scale
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            Simple pricing for teams growing into better operations.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Start lean, expand with confidence, and keep every workflow inside
            one consistent operational system.
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const isPrimary = plan.accent === "primary";

            return (
              <Reveal
                key={plan.name}
                delay={index * 90}
                className={
                  isPrimary
                    ? "relative scale-105 overflow-hidden rounded-[1.9rem] border border-blue-500/30 bg-[#2f80ff] p-8 text-center text-white shadow-[0_28px_65px_rgba(47,128,255,0.26)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_75px_rgba(47,128,255,0.3)]"
                    : "relative overflow-hidden rounded-[1.9rem] border border-black/6 bg-white/82 p-8 text-center shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]"
                }
              >
                {!isPrimary ? (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />
                ) : (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
                )}

                <div className="relative z-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-center">
                      <h3 className={`text-2xl font-semibold ${isPrimary ? "" : "text-black"}`}>
                        {plan.name}
                      </h3>
                      <p
                        className={`mt-2 text-sm ${
                          isPrimary ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {plan.subtitle}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        isPrimary
                          ? "bg-white/14 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isPrimary ? "Most popular" : "Flexible"}
                    </span>
                  </div>

                  <p className={`mt-8 text-5xl font-bold ${isPrimary ? "" : "text-black"}`}>
                    {plan.price}{" "}
                    <span
                      className={`text-lg font-medium ${
                        isPrimary ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      /mo
                    </span>
                  </p>

                  <button
                    className={
                      isPrimary
                        ? "mt-8 w-full cursor-pointer rounded-xl bg-white py-3 font-medium text-blue-600 transition ease-in-out hover:bg-blue-50"
                        : "mt-8 w-full cursor-pointer rounded-xl bg-blue-600 py-3 text-white transition ease-in-out hover:bg-blue-700"
                    }
                  >
                    Get Started
                  </button>

                  <ul
                    className={`mt-8 space-y-3 ${
                      isPrimary ? "text-blue-50" : "text-gray-600"
                    }`}
                  >
                    {plan.features.map((item) => (
                      <li key={item} className="flex items-center justify-center gap-3">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full ${
                            isPrimary
                              ? "bg-white/14 text-white"
                              : "bg-slate-100 text-blue-600"
                          }`}
                        >
                          <BadgeCheck className="h-4 w-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <Reveal className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
            Customer stories
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[0.96]">
            What our customers say after bringing operations into one place.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Teams use Ordentra to cut friction from approvals, budgeting, and
            procurement while keeping every stakeholder aligned.
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 90}
              className="group relative overflow-hidden rounded-[1.75rem] border border-black/6 bg-white/82 p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),transparent)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1 text-[#2f80ff]">
                  <span className="text-lg leading-none">&quot;</span>
                  <span className="text-lg leading-none">&quot;</span>
                  <span className="text-lg leading-none">&quot;</span>
                </div>

                <p className="mt-5 text-[15px] leading-8 text-slate-600">
                  {testimonial.quote}
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-slate-950">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-500">
          Trusted by 100+ teams managing operations with Ordentra
        </p>
      </Reveal>
    </section>
  );
}

function FooterFeatureGrid() {
  return (
    <div className="footer-stage relative px-3 py-4 sm:px-5 sm:py-6">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute left-[10%] top-[18%] h-52 w-52 rounded-full bg-sky-100/45 blur-3xl" />
        <div className="absolute right-[14%] top-[28%] h-56 w-56 rounded-full bg-violet-100/35 blur-3xl" />
        <div className="absolute bottom-[6%] left-[42%] h-60 w-60 rounded-full bg-emerald-100/35 blur-3xl" />
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:hidden">
        {floatingTiles.map(({ label, icon: Icon, accentClass }) => (
          <div key={label} className="flex flex-col items-center justify-center gap-3 text-center">
            <div
              className={`flex h-24 w-24 items-center justify-center rounded-[1.6rem] ${accentClass}`}
            >
              <Icon className="h-12 w-12" />
            </div>
            <span className="text-sm font-semibold tracking-[0.08em] text-black">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="relative hidden min-h-[52vh] rounded-[2rem] sm:block sm:min-h-[58vh] lg:min-h-[64vh]">
        {floatingTiles.map(({ label, icon: Icon, className, accentClass }) => (
          <div
            key={label}
            className={`footer-tile absolute flex h-28 w-28 items-center justify-center rounded-[2rem] text-center shadow-[0_18px_35px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 sm:h-[8rem] sm:w-[8rem] ${accentClass} ${className}`}
          >
            <Icon className="h-12 w-12 sm:h-14 sm:w-14" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <footer id="contact" className="px-3 pb-4 pt-12 sm:px-5 lg:px-6">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center gap-6 border-b border-black/6 px-3 py-5 text-center text-black sm:px-5 lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-black/70">
            <div className="flex items-center gap-3">
              <p className="text-lg font-semibold tracking-tight text-black">Ordentra</p>
            </div>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <span className="font-medium text-emerald-600">
              Operational control for growing teams
            </span>
            <a href="#testimonials" className="transition hover:text-black">
              Customer stories
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
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

        <div className="px-3 pb-3 pt-8 text-black sm:px-5 sm:pb-4 sm:pt-10 lg:px-6">
          <div className="footer-copy flex w-full flex-col gap-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
              <div className="footer-copy text-center">
                <p className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
                  Built for modern operations
                </p>
                <h2 className="footer-headline mx-auto max-w-[32rem] text-4xl font-semibold tracking-[-0.04em] sm:max-w-[36rem] sm:text-5xl sm:leading-[1.02]">
                  Stay in control of operations, approvals, and spend.
                </h2>
              </div>

              <div className="footer-copy grid grid-cols-1 gap-8 text-center sm:grid-cols-2">
                {footerLinkGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em]">
                      {group.title}
                    </h3>
                    <ul className="space-y-3">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="inline-flex items-center justify-center gap-2 text-[15px] transition hover:text-black"
                          >
                            <ArrowRight className="h-4 w-4" />
                            <span>{link.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <FooterFeatureGrid />

            <div className="footer-copy pt-2 text-center">
              <div className="overflow-hidden">
                <p className="footer-wordmark w-full whitespace-nowrap text-[4.8rem] font-semibold leading-none text-black sm:text-[7rem] md:text-[9rem] lg:text-[12rem]">
                  Ordentra
                </p>
              </div>
            </div>

            <div className="footer-copy flex flex-col items-center gap-4 border-t border-black/6 pt-5 text-center text-sm">
              <p>&copy; 2026 Ordentra Technologies Pvt. Ltd. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-5">
                <a href="#contact" className="transition hover:text-black">
                  Privacy Policy
                </a>
                <a href="#contact" className="transition hover:text-black">
                  Terms of Service
                </a>
                <a
                  href="tel:+919821252521"
                  className="inline-flex items-center gap-2 transition hover:text-black"
                >
                  <Phone className="h-4 w-4" />
                  +91 98 21 25 25 21
                </a>
                <a
                  href="mailto:contact@ordentra.com"
                  className="inline-flex items-center gap-2 transition hover:text-black"
                >
                  <Mail className="h-4 w-4" />
                  contact@ordentra.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default function Home() {
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = cursorGlowRef.current;

    if (!glow) {
      return;
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    let frameId = 0;

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const animateGlow = () => {
      current.x += (target.x - current.x) * 0.22;
      current.y += (target.y - current.y) * 0.22;
      glow.style.transform = `translate3d(${current.x - 256}px, ${current.y - 256}px, 0)`;
      frameId = window.requestAnimationFrame(animateGlow);
    };

    window.addEventListener("pointermove", handlePointerMove);
    frameId = window.requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <main className="relative isolate min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div ref={cursorGlowRef} className="cursor-glow" />
      </div>

      <div className="relative z-10">
        <SiteHeader />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </main>
  );
}
