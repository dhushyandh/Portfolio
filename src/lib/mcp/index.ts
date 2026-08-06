import { defineMcp } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getCaseStudyTool from "./tools/get-case-study";
import getResumeTool from "./tools/get-resume";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "ai-story-weaver",
  title: "AI Story Weaver",
  version: "0.1.0",
  instructions:
    "Tools for Dhushyandh's developer portfolio. Use `list_projects` to browse projects, `get_case_study` for a project's full write-up, `get_resume` for skills, experience and achievements, and `get_contact` for public contact links.",
  tools: [listProjectsTool, getCaseStudyTool, getResumeTool, getContactTool],
});