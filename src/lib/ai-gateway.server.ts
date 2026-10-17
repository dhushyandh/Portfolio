import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export function createAiProvider() {
  const geminiKey = process.env["GEMINI_API_KEY"];
  if (geminiKey) {
    return {
      model: createOpenAICompatible({
        name: "gemini",
        baseURL: process.env["AI_BASE_URL"] || "https://generativelanguage.googleapis.com/v1beta/openai/",
        headers: { Authorization: `Bearer ${geminiKey}` },
      })("gemini-1.5-flash"),
    };
  }

  const openaiKey = process.env["OPENAI_API_KEY"];
  if (openaiKey) {
    return {
      model: createOpenAICompatible({
        name: "openai",
        baseURL: process.env["AI_BASE_URL"] || "https://api.openai.com/v1",
        headers: { Authorization: `Bearer ${openaiKey}` },
      })("gpt-4o-mini"),
    };
  }

  return null;
}