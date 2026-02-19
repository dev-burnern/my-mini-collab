type SeedSummary = {
  workspace: string;
  docs: number;
  tasks: number;
  goals: number;
  keyResults: number;
};

function createSeedSummary(): SeedSummary {
  return {
    workspace: "Capstone Demo Workspace",
    docs: 3,
    tasks: 6,
    goals: 2,
    keyResults: 4,
  };
}

function main() {
  const summary = createSeedSummary();
  // Placeholder script. Replace with Supabase insert logic when DB project is linked.
  console.log("[seed] demo data plan");
  console.log(JSON.stringify(summary, null, 2));
}

main();
