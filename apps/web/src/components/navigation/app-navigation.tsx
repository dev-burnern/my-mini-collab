"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/setup", label: "Setup", short: "S" },
  { href: "/tasks", label: "Tasks", short: "T" },
  { href: "/goals", label: "Goals", short: "G" },
  { href: "/docs", label: "Docs", short: "D" },
  { href: "/insights", label: "Insights", short: "I" },
] as const;

type AppNavigationProps = {
  orientation?: "vertical" | "horizontal";
};

export function AppNavigation({ orientation = "vertical" }: AppNavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className={
        orientation === "vertical" ? "flex flex-col gap-1.5" : "flex flex-wrap gap-2"
      }
    >
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === "/setup"
            ? pathname === "/setup"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link"
            data-active={isActive ? "true" : "false"}
          >
            <span className="jira-badge">{item.short}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
