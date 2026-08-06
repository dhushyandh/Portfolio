import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { CASE_STUDIES } from "@/components/portfolio/case-studies";

export default defineTool({
  name: "get_case_study",
  title: "Get case study",
  description:
    "Get the full case study for one portfolio project: overview, stack, features, challenges and learnings. Use list_projects to find a slug.",
  inputSchema: {
    slug: z.string().describe("Project slug, e.g. \"smartmart\"."),
  },
  outputSchema: { caseStudy: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const study = CASE_STUDIES.find((c) => c.slug === slug);
    if (!study) {
      throw new ToolError(
        `No case study with slug "${slug}". Available: ${CASE_STUDIES.map((c) => c.slug).join(", ")}`,
      );
    }
    return {
      content: [{ type: "text", text: JSON.stringify(study, null, 2) }],
      structuredContent: { caseStudy: study },
    };
  },
});