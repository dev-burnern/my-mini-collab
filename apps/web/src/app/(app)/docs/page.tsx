import { DOC_TEMPLATES } from "@/lib/docs/templates";

const REVIEW_QUEUE = [
  { title: "Sprint planning note", status: "In Review", owner: "PM" },
  { title: "API contract update", status: "To Do", owner: "Backend" },
  { title: "Release checklist", status: "Ready", owner: "QA" },
] as const;

export default function DocsPage() {
  return (
    <main className="space-y-6">
      <header className="surface-card px-6 py-7 md:px-8">
        <p className="page-kicker">Documentation / Knowledge Base</p>
        <h1 className="page-title">Team Docs</h1>
        <p className="page-subtitle">
          Notion-style 문서 구조에 Jira-style 리뷰 큐를 결합해 흐름을 한 화면에서
          관리합니다.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <article className="surface-card p-6">
          <div className="table-head flex flex-wrap items-center justify-between gap-3">
            <h2 className="section-title">Document Space</h2>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn-secondary">
                Import
              </button>
              <button type="button" className="btn-primary">
                New Document
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {Object.entries(DOC_TEMPLATES).map(([key, template]) => (
              <li key={key} className="notion-row">
                <div className="min-w-0">
                  <p className="section-title text-[0.98rem]">{template.title}</p>
                  <p className="muted-copy mt-1 text-xs">template: {key}</p>
                </div>
                <span className="jira-badge">Spec</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="surface-card p-6">
          <div className="table-head flex items-center justify-between gap-3">
            <h2 className="section-title">Review Queue</h2>
            <span className="jira-badge">Jira-style</span>
          </div>
          <ul className="space-y-2">
            {REVIEW_QUEUE.map((item) => (
              <li key={item.title} className="kanban-item">
                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">Owner: {item.owner}</p>
                <span className="jira-badge mt-2">{item.status}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
