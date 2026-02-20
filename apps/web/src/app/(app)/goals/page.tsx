const METRICS = [
  { label: "Active goals", value: "-" },
  { label: "Average progress", value: "-" },
  { label: "At-risk goals", value: "-" },
] as const;

const ROADMAP = [
  { goal: "사용자 온보딩 완성", owner: "PM", progress: 62 },
  { goal: "작업 보드 API 안정화", owner: "Backend", progress: 44 },
  { goal: "문서 템플릿 운영", owner: "Ops", progress: 71 },
] as const;

export default function GoalsPage() {
  return (
    <main className="space-y-6">
      <header className="surface-card px-6 py-7 md:px-8">
        <p className="page-kicker">Planning / Roadmap</p>
        <h1 className="page-title">Goals & Key Results</h1>
        <p className="page-subtitle">
          노션식 목표 문서와 지라식 실행 상태를 연결해 KR 진행률을 추적합니다.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <article key={metric.label} className="rounded-xl border border-[var(--border)] bg-[#fbfcff] p-4">
              <p className="text-sm text-slate-500">{metric.label}</p>
              <p className="stat-value">{metric.value}</p>
            </article>
          ))}
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
        <article className="surface-card p-6">
          <div className="table-head flex items-center justify-between gap-3">
            <h2 className="section-title">Roadmap Table</h2>
            <span className="jira-badge">Quarterly</span>
          </div>

          <div className="table-head table-row text-xs font-semibold uppercase tracking-[0.07em] text-slate-500">
            <span>Goal</span>
            <span>Owner</span>
            <span>Progress</span>
          </div>

          <div>
            {ROADMAP.map((item) => (
              <div key={item.goal} className="table-row text-sm">
                <span className="font-medium text-slate-800">{item.goal}</span>
                <span className="text-slate-600">{item.owner}</span>
                <span className="text-slate-700">{item.progress}%</span>
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card p-6">
          <div className="table-head flex items-center justify-between gap-3">
            <h2 className="section-title">KR Progress</h2>
            <span className="chip">Live</span>
          </div>
          <ul className="space-y-3">
            {ROADMAP.map((item) => (
              <li key={item.goal} className="space-y-2 rounded-lg border border-[var(--border)] p-3">
                <p className="text-sm font-semibold text-slate-800">{item.goal}</p>
                <div className="progress-track">
                  <span
                    className="progress-fill"
                    style={{ width: `${item.progress}%` }}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-xs text-slate-500">{item.progress}% complete</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
