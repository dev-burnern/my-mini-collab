import { DOC_TEMPLATES } from "@/lib/docs/templates";

export default function DocsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Team Docs</h1>
        <p className="mt-2 text-sm text-slate-600">
          Meeting notes, weekly reports, and retrospectives in one place.
        </p>
      </header>

      <section>
        <h2 className="mb-3 text-lg font-medium">Templates</h2>
        <ul className="space-y-3">
          {Object.entries(DOC_TEMPLATES).map(([key, template]) => (
            <li key={key} className="rounded-lg border border-slate-200 p-4">
              <p className="font-medium">{template.title}</p>
              <p className="mt-1 text-xs text-slate-500">template: {key}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
