import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, createUIMessageStreamResponse, type UIMessage } from "ai";
import { createAiProvider } from "@/lib/ai-gateway.server";
import { buildSystemPrompt } from "@/lib/portfolio-persona";

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const provider = createAiProvider();
        if (!provider) {
          // Graceful fallback when no API key is provided
          return createUIMessageStreamResponse({
            stream: new ReadableStream({
              start(controller) {
                controller.enqueue({
                  type: "text-delta",
                  delta:
                    "Hello! I am Dhushyandh's portfolio assistant. Currently, no AI API key (such as GEMINI_API_KEY or OPENAI_API_KEY) is configured in the environment. You can explore Dhushyandh's projects in the portfolio or reach out directly at dhushyandh@gmail.com!",
                });
                controller.close();
              },
            }),
          });
        }

        const result = streamText({
          model: provider.model,
          system: buildSystemPrompt(),
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});