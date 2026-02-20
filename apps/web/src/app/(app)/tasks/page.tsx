const COLUMNS = [
  {
    key: "todo",
    label: "To do",
    description: "아직 시작하지 않은 작업을 우선순위로 정리합니다.",
  },
  {
    key: "in_progress",
    label: "In progress",
    description: "현재 담당자가 진행 중인 작업을 추적합니다.",
  },
  {
    key: "done",
    label: "Done",
    description: "완료된 결과물을 검토하고 기록을 남깁니다.",
  },
];

const SUMMARY = [
  { label: "Open tasks", value: "-", helper: "Backlog + Ready" },
  { label: "Due this week", value: "-", helper: "Sprint target" },
  { label: "Blocked", value: "-", helper: "Needs review" },
] as const;

const SAMPLE_ITEMS = [
  { title: "Onboarding flow polish", owner: "Designer", lane: "todo" },
  { title: "API docs sync", owner: "Backend", lane: "in_progress" },
  { title: "Goal dashboard copy", owner: "PM", lane: "done" },
] as const;

export default function TasksPage() {
  return (
    <main className="space-y-6">
      <header className="surface-card px-6 py-7 md:px-8">
        <p className="page-kicker">Execution / Sprint Board</p>
        <h1 className="page-title">Kanban Tasks</h1>
        <p className="page-subtitle">
          Jira-style 보드 구조에 문서 컨텍스트를 연결해 실행 상태를 빠르게 추적합니다.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {SUMMARY.map((item) => (
            <article key={item.label} className="rounded-xl border border-[var(--border)] bg-[#fbfcff] p-4">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="stat-value">{item.value}</p>
              <p className="mt-1 text-xs text-slate-500">{item.helper}</p>
            </article>
          ))}
        </div>
      </header>

      <section className="grid gap-4 xl:grid-cols-3">
        {COLUMNS.map((column) => (
          <article key={column.key} className="surface-card p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="section-title">{column.label}</h2>
              <span className="jira-badge">{column.key.replace("_", " ")}</span>
            </div>
            <p className="muted-copy mt-2 text-sm">{column.description}</p>

            <div className="kanban-lane mt-4 space-y-2">
              {SAMPLE_ITEMS.filter((item) => item.lane === column.key).map((item) => (
                <article key={item.title} className="kanban-item">
                  <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.owner}</p>
                </article>
              ))}
              <div className="rounded-md border border-dashed border-[var(--border)] px-3 py-4 text-center text-xs text-slate-500">
                No tasks yet
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
