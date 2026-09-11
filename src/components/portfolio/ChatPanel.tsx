import { useState } from "react";
import {
  Bot,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

type ChatPanelProps = {
  onClose: () => void;
};

const STARTER_QUESTIONS = [
  "Tell me about Dhushyandh",
  "What projects has he built?",
  "What is his tech stack?",
  "How can I contact him?",
];

export default function ChatPanel({ onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! I'm Dhushyandh's portfolio assistant. Ask me about his projects, experience, skills, education, or how to get in touch.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(message?: string) {
    const text = (message ?? input).trim();

    if (!text || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Unable to contact the AI assistant.",
        );
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.message,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      console.error(error);

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "Sorry, I couldn't connect to Gemini right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void sendMessage();
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 flex max-h-[calc(100vh-1.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[420px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-[var(--surface)] px-4 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles size={19} />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-display text-sm font-bold text-foreground">
                Portfolio Assistant
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>

            <p className="text-xs text-muted-foreground">
              Powered by Gemini
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close assistant"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
        {messages.map((message) => {
          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={`flex gap-2.5 ${
                isUser ? "justify-end" : "justify-start"
              }`}
            >
              {!isUser && (
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bot size={15} />
                </div>
              )}

              <div
                className={`max-w-[82%] rounded-2xl px-3.5 py-3 text-sm leading-6 ${
                  isUser
                    ? "rounded-br-md bg-primary text-primary-foreground"
                    : "rounded-bl-md border border-border bg-[var(--surface)] text-foreground"
                }`}
              >
                {message.content}
              </div>

              {isUser && (
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <User size={15} />
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex items-start gap-2.5">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Bot size={15} />
            </div>

            <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-border bg-[var(--surface)] px-4 py-3 text-sm text-muted-foreground">
              <Loader2 size={15} className="animate-spin" />
              Thinking…
            </div>
          </div>
        )}

        {messages.length === 1 && !loading && (
          <div className="pt-1">
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              Try asking
            </p>

            <div className="flex flex-wrap gap-2">
              {STARTER_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void sendMessage(question)}
                  className="rounded-full border border-border bg-background px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-border bg-[var(--surface)] p-3"
      >
        <div className="flex items-end gap-2 rounded-xl border border-border bg-background p-1.5 focus-within:border-primary/40">
          <div className="flex min-w-0 flex-1 items-center">
            <MessageCircle
              size={16}
              className="ml-2 shrink-0 text-muted-foreground"
            />

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Dhushyandh…"
              disabled={loading}
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={!input.trim() || loading}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:opacity-90 disabled:pointer-events-none disabled:opacity-40"
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={16} />
            )}
          </button>
        </div>

        <p className="px-1 pt-2 text-[10px] text-muted-foreground/60">
          AI-generated responses may occasionally be inaccurate.
        </p>
      </form>
    </div>
  );
}