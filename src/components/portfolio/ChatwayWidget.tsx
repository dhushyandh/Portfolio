import { useEffect } from "react";

export function ChatwayWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("chatway") || document.getElementById("chatway-widget-script")) return;

    const script = document.createElement("script");
    script.id = "chatway-widget-script";
    script.async = true;
    script.src = "https://cdn.chatway.app/widget.js?id=NzpsUe0eDhtD";
    document.body.appendChild(script);
  }, []);

  return null;
}
