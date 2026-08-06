import { defineTool } from "@lovable.dev/mcp-js";
import { ACHIEVEMENTS, SKILL_GROUPS, STATS, TIMELINE } from "@/components/portfolio/data";

export default defineTool({
  name: "get_resume",
  title: "Get resume",
  description:
    "Get Dhushyandh's skills by category, experience/education timeline, achievements and headline stats.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const resume = {
      stats: STATS,
      skills: SKILL_GROUPS.map((g) => ({ category: g.label, items: g.items })),
      timeline: TIMELINE.map(({ title, org, period, description }) => ({
        title,
        org,
        period,
        description,
      })),
      achievements: ACHIEVEMENTS.map(({ title, description }) => ({ title, description })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(resume, null, 2) }],
      structuredContent: resume,
    };
  },
});