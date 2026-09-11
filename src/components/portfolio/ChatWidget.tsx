import { Component, Suspense, lazy, useState, type ReactNode } from "react";
import { Sparkles } from "lucide-react";

let chatPanelPromise: ReturnType<typeof importChatPanel> | undefined;

function importChatPanel() {
  return import("./ChatPanel").catch((error: unknown) => {
    chatPanelPromise = undefined;
    throw error;
  });
}

const ChatPanel = lazy(() => {
  chatPanelPromise ??= importChatPanel();
  return chatPanelPromise;
});

class ChatPanelErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  override state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-x-3 bottom-3 z-50 surface-card p-5 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-100">
          <p className="font-display text-sm font-bold text-foreground">Assistant unavailable</p>
          <p className="mt-1 text-sm text-muted-foreground">
            The assistant could not load right now. Refresh the page to try again.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Refresh page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        onPointerEnter={() => {
          chatPanelPromise ??= importChatPanel();
          void chatPanelPromise.catch(() => undefined);
        }}
        aria-label="Open AI assistant"
        className="fixed bottom-24 right-4 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0_0_0/70%)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        <Sparkles size={18} />
        <span className="hidden sm:inline">Ask about me</span>
      </button>
    );
  }

  return (
    <ChatPanelErrorBoundary>
      <Suspense fallback={null}>
        <ChatPanel onClose={() => setOpen(false)} />
      </Suspense>
    </ChatPanelErrorBoundary>
  );
}
