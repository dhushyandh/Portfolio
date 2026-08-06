import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  name: "Dhushyandh",
  role: "Full Stack Developer",
  email: "dhushyandh@gmail.com",
  linkedin: "https://linkedin.com/in/dhushyandh",
  github: "https://github.com/dhushyandh",
  portfolio: "https://dhushyandh.dev",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description: "Get Dhushyandh's public contact links: email, LinkedIn, GitHub and portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});