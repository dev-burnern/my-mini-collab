const STEPS = [
  "Fork template",
  "Vercel Import",
  "Env setup",
  "DB migration",
  "Workspace init",
] as const;

export default function SetupPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">15-Minute Team Setup</h1>
        <p className="mt-2 text-sm text-slate-600">
          Follow this checklist to launch your own no-subscription collaboration
          workspace.
        </p>
      </header>

      <ol className="space-y-3">
        {STEPS.map((step, index) => (
          <li key={step} className="rounded-xl border border-slate-200 p-4">
            <span className="mr-2 text-xs text-slate-500">STEP {index + 1}</span>
            <span className="font-medium">{step}</span>
          </li>
        ))}
      </ol>
    </main>
  );
}
