export const DOC_TEMPLATES = {
  "meeting-note": {
    title: "Meeting Note",
    defaultContent:
      "## Agenda\n- \n\n## Decisions\n- \n\n## Action Items\n- [ ] ",
  },
  "weekly-report": {
    title: "Weekly Report",
    defaultContent:
      "## What we did\n- \n\n## What blocked us\n- \n\n## Next week\n- ",
  },
  retrospective: {
    title: "Retrospective",
    defaultContent:
      "## Keep\n- \n\n## Problem\n- \n\n## Try\n- ",
  },
} as const;

export type DocTemplateId = keyof typeof DOC_TEMPLATES;
