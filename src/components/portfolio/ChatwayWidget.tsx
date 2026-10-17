import { useEffect } from "react";

export function ChatwayWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Ensure script is loaded if not already injected by root layout
    if (!document.getElementById("chatway") && !document.getElementById("chatway-widget-script")) {
      const script = document.createElement("script");
      script.id = "chatway-widget-script";
      script.async = true;
      script.src = "https://cdn.chatway.app/widget.js?id=NzpsUe0eDhtD";
      document.body.appendChild(script);
    }

    // Attach blinking effect and pulsing radar ripples to the Chatway launcher icon
    const attachEffects = () => {
      const trigger =
        document.getElementById("chatway_widget_trigger") ||
        (document.querySelector(".chatway-launcher") as HTMLElement | null) ||
        (document.querySelector(".chatway--trigger-icon-container") as HTMLElement | null);

      if (!trigger) return false;

      // Prevent duplicate ripples
      if (trigger.querySelector(".floating-ripple-chatway")) return true;

      trigger.classList.add("floating-btn-blink-chatway");

      const ripple1 = document.createElement("span");
      ripple1.className = "floating-ripple floating-ripple-chatway";
      ripple1.setAttribute("aria-hidden", "true");

      const ripple2 = document.createElement("span");
      ripple2.className = "floating-ripple floating-ripple-chatway floating-ripple-delayed";
      ripple2.setAttribute("aria-hidden", "true");

      trigger.insertBefore(ripple2, trigger.firstChild);
      trigger.insertBefore(ripple1, trigger.firstChild);

      return true;
    };

    if (attachEffects()) return;

    const observer = new MutationObserver(() => {
      attachEffects();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const interval = setInterval(() => {
      if (attachEffects()) {
        clearInterval(interval);
      }
    }, 400);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}

