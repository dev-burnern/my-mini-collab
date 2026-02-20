import type { ReactNode } from "react";
import Link from "next/link";

import { AppNavigation } from "@/components/navigation/app-navigation";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1240px] px-4 py-5 md:px-7 md:py-7">
      <div className="mb-4 surface-card p-3 lg:hidden">
        <AppNavigation orientation="horizontal" />
      </div>

      <div className="flex gap-6">
        <aside className="surface-card hidden w-72 shrink-0 flex-col gap-5 p-5 lg:flex">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="page-kicker">oh-my-collab</p>
              <span className="chip">v1</span>
            </div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              Notion x Jira Workspace
            </p>
            <p className="muted-copy mt-2 text-sm">
              문서 맥락과 실행 보드를 같은 워크플로에서 운영합니다.
            </p>
          </div>

          <div className="surface-card-muted p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                Sprint Health
              </p>
              <span className="jira-badge">Live</span>
            </div>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p className="flex items-center justify-between">
                <span>Open Tasks</span>
                <span className="font-semibold">-</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Goals On Track</span>
                <span className="font-semibold">-</span>
              </p>
            </div>
          </div>

          <AppNavigation />

          <p className="mt-auto text-xs text-slate-500">
            Inspired by oh-my-claude
          </p>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <header className="surface-card flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6">
            <div>
              <p className="page-kicker">Workspace / Core</p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                oh-my-collab
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Docs-first planning, board-first execution.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link className="btn-secondary" href="/setup">
                Setup
              </Link>
              <button type="button" className="btn-primary">
                Create Item
              </button>
            </div>
          </header>

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
