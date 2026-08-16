import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import ReactMarkdown from "react-markdown";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

const SUGGESTIONS = [
  "What is Dhushyandh good at?",
  "Tell me about his best project",
  "What's his experience?",
  "How can I hire him?",
];

function messageText(message: UIMessage) {
  return message.parts.map((part) => (part.type === "text" ? part.text : "")).join("");
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (error) => {
      const message = error.message.includes("429")
        ? "Too many messages right now — please try again in a moment."
        : error.message.includes("402")
          ? "The assistant is out of credits at the moment."
          : "The assistant couldn't respond. Please try again.";
      toast.error(message);
    },
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || isLoading) return;
    setInput("");
    void sendMessage({ text: value });
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open AI assistant"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0_0_0/70%)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
        >
          <Sparkles size={18} />
          <span className="hidden sm:inline">Ask about me</span>
        </button>
      )}

      {open && (
        <div className="fixed inset-x-3 bottom-3 z-50 flex h-[min(560px,80vh)] flex-col overflow-hidden surface-card sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[400px]">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Bot size={17} />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-foreground">Ask Dhushyandh</p>
                <p className="text-[11px] text-muted-foreground">AI assistant · powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close AI assistant"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Hi! Ask me anything about Dhushyandh — his skills, projects or experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => send(s)} className="chip chip-hover text-left">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground"
                      : "max-w-[90%] rounded-2xl rounded-bl-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground"
                  }
                >
                  {message.role === "user" ? (
                    messageText(message)
                  ) : (
                    <div className="space-y-2 [&_a]:text-primary [&_a]:underline [&_li]:ml-4 [&_li]:list-disc [&_strong]:text-foreground">
                      <ReactMarkdown>{messageText(message)}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {status === "submitted" && (
              <div className="flex gap-1 px-1">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my work…"
              className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}