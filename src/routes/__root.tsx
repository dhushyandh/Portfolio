import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import refCss from "@/components/portfolio/ReferencePortfolio.css?url";
import { RefreshCw } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { ChatwayWidget } from "@/components/portfolio/ChatwayWidget";
import { FloatingContactButtons } from "@/components/portfolio/FloatingContactButtons";
import { NotFoundView } from "@/components/portfolio/NotFoundView";

function NotFoundComponent() {
  return <NotFoundView />;
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <NotFoundView
      code="500"
      badge="Runtime Notice · Recovery Available"
      title={
        <>
          Something <em>didn't load</em> as expected
        </>
      }
      message="An unexpected runtime issue occurred while loading this view. You can reload the application state or return to the main portfolio."
      customAction={
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="ref-btn-primary"
        >
          <RefreshCw size={14} /> Try Reloading
        </button>
      }
    />
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhushyandh — Full-Stack Web Developer & Freelancer | Vellore, India" },
      {
        name: "description",
        content:
          "Official portfolio of N. Dhushyandh, full-stack web and mobile application developer based in Vellore, Tamil Nadu, India. Specializing in React, Next.js, TypeScript, React Native, Node.js, and modern cloud architectures.",
      },
      { name: "author", content: "Dhushyandh" },
      { name: "creator", content: "Dhushyandh" },
      { name: "publisher", content: "Dhushyandh" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "Dhushyandh" },
      { property: "og:title", content: "Dhushyandh — Full-Stack Web Developer & Freelancer" },
      {
        property: "og:description",
        content:
          "Official portfolio of N. Dhushyandh, full-stack web and mobile developer based in Vellore, India. Explore client projects, React/Node apps, and freelance engineering services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dhushyandh.in/" },
      { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Dhushyandh — Full-Stack Web Developer & Freelancer" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dhushyandh — Full-Stack Web Developer & Freelancer" },
      {
        name: "twitter:description",
        content:
          "Official portfolio of N. Dhushyandh, full-stack web and mobile developer based in Vellore, India. Explore client projects, React/Node apps, and freelance engineering services.",
      },
      { name: "twitter:image", content: "https://dhushyandh.in/og-image.png" },
      { name: "twitter:image:alt", content: "Dhushyandh — Full-Stack Web Developer & Freelancer" },
      { name: "theme-color", content: "#0a0b0e" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Dhushyandh" },
      { name: "application-name", content: "Dhushyandh" },
      { name: "msapplication-TileColor", content: "#0a0b0e" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: refCss,
      },
      { rel: "icon", href: "/icons/dhushyandh-photo-favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/icons/dhushyandh-photo-favicon-48.png", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/icons/dhushyandh-photo-favicon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/icons/dhushyandh-photo-favicon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "icon", href: "/icons/dhushyandh-photo-favicon.ico", sizes: "any" },
      { rel: "shortcut icon", href: "/icons/dhushyandh-photo-favicon-32.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/icons/dhushyandh-photo-favicon-180.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        id: "chatway",
        async: true,
        src: "https://cdn.chatway.app/widget.js?id=NzpsUe0eDhtD",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("[PWA] Service Worker registered with scope:", registration.scope);
          })
          .catch((error) => {
            console.warn("[PWA] Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster />
      <ChatwayWidget />
      <FloatingContactButtons />
    </QueryClientProvider>
  );
}
