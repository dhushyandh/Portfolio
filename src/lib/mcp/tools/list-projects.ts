import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PROJECTS } from "@/components/portfolio/data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Dhushyandh's portfolio projects with their slug, title, short description and tech tags.",
  inputSchema: {},
  outputSchema: { projects: z.array(z.unknown()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const projects = PROJECTS.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      tags: p.tags,
      github: p.github,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects },
    };
  },
});