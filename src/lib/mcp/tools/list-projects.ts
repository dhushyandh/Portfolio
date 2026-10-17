import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PORTFOLIO_PROJECTS } from "@/components/portfolio/premium-data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Dhushyandh's portfolio projects with their slug, title, short description and tech tags.",
  inputSchema: {},
  outputSchema: { projects: z.array(z.unknown()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const projects = PORTFOLIO_PROJECTS.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      tags: p.stack,
      github: p.github,
      live: p.live,
      status: p.status,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects },
    };
  },
});