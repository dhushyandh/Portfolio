import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bot,
  ChevronRight,
  Cookie,
  Database,
  ExternalLink,
  FileText,
  Lock,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dhushyandh | MERN Stack Developer" },
      {
        name: "description",
        content:
          "Privacy Policy for Dhushyandh's portfolio website. Explains information handling, contact submissions, and AI assistant privacy practices.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:title", content: "Privacy Policy — Dhushyandh" },
      {
        property: "og:description",
        content:
          "Privacy Policy for Dhushyandh's portfolio website. Explains information handling, contact submissions, and AI assistant privacy practices.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dhushyandh.in/privacy-policy" },
      { property: "og:image", content: "https://dhushyandh.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy — Dhushyandh" },
      {
        name: "twitter:description",
        content:
          "Privacy Policy for Dhushyandh's portfolio website. Explains information handling, contact submissions, and AI assistant privacy practices.",
      },
      { name: "twitter:image", content: "https://dhushyandh.in/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://dhushyandh.in/privacy-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://dhushyandh.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy Policy",
              item: "https://dhushyandh.in/privacy-policy",
            },
          ],
        }),
      },
    ],
  }),
  component: PrivacyPolicy,
});

const SECTIONS = [
  {
    id: "information",
    title: "Information We Collect",
    icon: Database,
  },
  {
    id: "usage",
    title: "How Information Is Used",
    icon: UserCheck,
  },
  {
    id: "ai",
    title: "AI Assistant",
    icon: Bot,
  },
  {
    id: "cookies",
    title: "Cookies & Analytics",
    icon: Cookie,
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: ExternalLink,
  },
  {
    id: "security",
    title: "Security",
    icon: Lock,
  },
  {
    id: "rights",
    title: "Your Rights",
    icon: ShieldCheck,
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
  },
];

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: `
              radial-gradient(
                circle at 78% 15%,
                color-mix(in oklab, var(--color-primary) 18%, transparent),
                transparent 38%
              ),
              linear-gradient(
                180deg,
                color-mix(in oklab, var(--color-primary) 3%, transparent),
                transparent 70%
              )
            `,
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:48px_48px]"
        />

        <div className="relative mx-auto max-w-5xl px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={15} />
            Back to portfolio
          </Link>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <ShieldCheck size={23} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Legal
              </p>

              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                This Privacy Policy explains how information is handled when
                you visit and interact with Dhushyandh's portfolio website.
              </p>

              <p className="mt-4 text-xs text-muted-foreground">
                Last updated: September 11, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[220px_1fr]">
        {/* Contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Contents
            </p>

            <nav className="mt-4 space-y-1">
              {SECTIONS.map(({ id, title }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  <span>{title}</span>
                  <ChevronRight
                    size={14}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Policy */}
        <article className="min-w-0">
          <div className="surface-card rounded-2xl p-6 sm:p-8 lg:p-10">
            {/* Introduction */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                <FileText size={14} />
                Privacy
              </div>

              <p className="text-[15px] leading-7 text-muted-foreground">
                Your privacy matters. This website is a personal developer
                portfolio created by Dhushyandh Neduncheziyan. This policy
                describes the types of information that may be provided
                through the website and how that information is handled.
              </p>
            </div>

            {/* 01 */}
            <PolicySection
              id="information"
              number="01"
              title="Information We Collect"
            >
              <p>
                You can browse most of this portfolio without providing
                personal information.
              </p>

              <p>
                If you choose to contact Dhushyandh through the contact form,
                email links, or other communication channels, you may provide
                information such as your name, email address, and the contents
                of your message.
              </p>

              <p>
                Basic technical information may also be processed by hosting,
                security, or infrastructure providers when you access a
                website. The exact information collected depends on the
                services used to operate the website.
              </p>
            </PolicySection>

            {/* 02 */}
            <PolicySection
              id="usage"
              number="02"
              title="How Information Is Used"
            >
              <p>
                Information provided through this website may be used to:
              </p>

              <ul>
                <li>Respond to enquiries and messages.</li>
                <li>
                  Discuss freelance work, employment, internships, or
                  collaborations.
                </li>
                <li>Provide information requested through the website.</li>
                <li>
                  Maintain, secure, and improve the website and its
                  functionality.
                </li>
              </ul>

              <p>
                Information will not be used for unrelated purposes without an
                appropriate reason or permission where required.
              </p>
            </PolicySection>

            {/* 03 */}
            <PolicySection
              id="ai"
              number="03"
              title="AI Assistant"
            >
              <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-4">
                <div className="flex gap-3">
                  <Bot
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                    <p>
                      This portfolio includes an AI-powered assistant that can
                      answer questions about Dhushyandh's projects, skills,
                      experience, education, and professional background.
                    </p>

                    <p>
                      Messages entered into the AI assistant may be sent to
                      the configured AI service provider, such as Google's
                      Gemini API, in order to generate a response.
                    </p>

                    <p>
                      Please avoid entering passwords, payment information,
                      confidential business information, or other sensitive
                      personal information into the AI assistant.
                    </p>
                  </div>
                </div>
              </div>
            </PolicySection>

            {/* 04 */}
            <PolicySection
              id="cookies"
              number="04"
              title="Cookies & Analytics"
            >
              <p>
                This website may use cookies, local storage, analytics, or
                similar technologies if they are enabled as part of the
                website's functionality or third-party services.
              </p>

              <p>
                Where analytics or similar services are used, they may process
                information about how visitors interact with the website,
                such as pages viewed, device information, or general usage
                information.
              </p>

              <p>
                The specific technologies used may change as the website is
                updated.
              </p>
            </PolicySection>

            {/* 05 */}
            <PolicySection
              id="third-party"
              number="05"
              title="Third-Party Services"
            >
              <p>
                This website may use third-party services to provide hosting,
                authentication, AI functionality, analytics, deployment, or
                other technical capabilities.
              </p>

              <p>
                Those services may process information according to their own
                privacy policies and terms. Examples may include hosting
                providers, AI service providers, and external platforms linked
                from this portfolio.
              </p>

              <p>
                External websites such as GitHub and LinkedIn are governed by
                their respective privacy policies when you visit or interact
                with them.
              </p>
            </PolicySection>

            {/* 06 */}
            <PolicySection
              id="security"
              number="06"
              title="Security"
            >
              <p>
                Reasonable technical and organisational measures are used to
                protect information handled through this website.
              </p>

              <p>
                However, no website, internet transmission, or electronic
                storage system can be guaranteed to be completely secure.
              </p>
            </PolicySection>

            {/* 07 */}
            <PolicySection
              id="rights"
              number="07"
              title="Your Rights"
            >
              <p>
                Depending on your location and applicable law, you may have
                rights relating to your personal information, including rights
                to request access, correction, deletion, or information about
                how your data is handled.
              </p>

              <p>
                To make a privacy-related request, contact Dhushyandh using
                the email address provided below.
              </p>
            </PolicySection>

            {/* 08 */}
            <PolicySection
              id="contact"
              number="08"
              title="Contact"
              last
            >
              <p>
                If you have questions about this Privacy Policy or how
                information is handled on this website, you can contact:
              </p>

              <a
                href="mailto:dhushyandhneduncheziyan4896@gmail.com"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Mail size={16} />
                dhushyandhneduncheziyan4896@gmail.com
              </a>
            </PolicySection>
          </div>

          {/* Bottom navigation */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={15} />
              Back to portfolio
            </Link>

            <Link
              to="/terms-and-conditions"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              Terms & Conditions
              <ChevronRight size={15} />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

function PolicySection({
  id,
  number,
  title,
  children,
  last = false,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      id={id}
      className={!last ? "border-b border-border pb-9 pt-9" : "pt-9"}
    >
      <div className="flex items-start gap-4">
        <span className="shrink-0 pt-1 font-mono text-xs text-primary/70">
          {number}
        </span>

        <div className="min-w-0">
          <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {title}
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted-foreground [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}