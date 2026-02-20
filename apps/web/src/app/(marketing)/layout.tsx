import type { ReactNode } from "react";
import Link from "next/link";

type MarketingLayoutProps = {
  children: ReactNode;
};

const QUICK_LINKS = [
  { href: "/tasks", label: "Tasks" },
  { href: "/goals", label: "Goals" },
  { href: "/docs", label: "Docs" },
  { href: "/insights", label: "Insights" },
] as const;

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1160px] px-4 py-6 md:px-7 md:py-7">
      <header className="surface-card flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6">
        <div>
          <p className="page-kicker">oh-my-collab</p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
            Team Launch Console
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Notion-like onboarding, Jira-like execution
          </p>
        </div>

        <nav className="flex flex-wrap gap-2">
          {QUICK_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="btn-secondary">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="mt-6">{children}</div>
    </div>
  );
}
