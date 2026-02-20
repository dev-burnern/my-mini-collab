const METRICS = [
  { label: "Weekly Done Tasks", value: "-" },
  { label: "Goal Achievement Rate", value: "-" },
  { label: "Upcoming Due", value: "-" },
] as const;

const ACTIVITY = [
  { name: "Backend", docs: 4, done: 7, health: "On Track" },
  { name: "Frontend", docs: 6, done: 5, health: "At Risk" },
  { name: "Ops", docs: 2, done: 3, health: "On Track" },
] as const;

export default function InsightsPage() {
  return (
    <main className="space-y-6">
      <header className="surface-card px-6 py-7 md:px-8">
        <p className="page-kicker">Insights / Analytics</p>
        <h1 className="page-title">Insights</h1>
        <p className="page-subtitle">
          문서 활동량과 실행 결과를 같은 시계열 관점에서 보여주는 대시보드입니다.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {METRICS.map((metric) => (
          <article key={metric.label} className="surface-card p-5">
            <h2 className="text-sm text-slate-500">{metric.label}</h2>
            <p className="stat-value">{metric.value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
        <article className="surface-card p-6">
          <div className="table-head flex items-center justify-between gap-3">
            <h2 className="section-title">Contribution Snapshot</h2>
            <span className="jira-badge">Weekly</span>
          </div>
          <div className="table-head table-row text-xs font-semibold uppercase tracking-[0.07em] text-slate-500">
            <span>Team</span>
            <span>Docs</span>
            <span>Done</span>
          </div>
          <div>
            {ACTIVITY.map((item) => (
              <div key={item.name} className="table-row text-sm">
                <span className="font-medium text-slate-800">{item.name}</span>
                <span className="text-slate-700">{item.docs}</span>
                <span className="text-slate-700">{item.done}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card p-6">
          <div className="table-head flex items-center justify-between gap-3">
            <h2 className="section-title">Health</h2>
            <span className="chip">Status</span>
          </div>
          <ul className="space-y-2">
            {ACTIVITY.map((item) => (
              <li key={item.name} className="notion-row">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.health}</p>
                </div>
                <span className="jira-badge">{item.health}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
