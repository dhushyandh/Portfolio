import { Suspense, lazy, useState } from "react";
import { Sparkles } from "lucide-react";

const ChatPanel = lazy(() => import("./ChatPanel"));

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        onPointerEnter={() => void import("./ChatPanel")}
        aria-label="Open AI assistant"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0_0_0/70%)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        <Sparkles size={18} />
        <span className="hidden sm:inline">Ask about me</span>
      </button>
    );
  }

  return (
    <Suspense fallback={null}>
      <ChatPanel onClose={() => setOpen(false)} />
    </Suspense>
  );
}
