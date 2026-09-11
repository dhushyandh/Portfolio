import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bot,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  Github,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditions,
});

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: FileText,
  },
  {
    id: "website",
    title: "Use of the Website",
    icon: UserCheck,
  },
  {
    id: "projects",
    title: "Projects & Portfolio Content",
    icon: BriefcaseBusiness,
  },
  {
    id: "ai",
    title: "AI Assistant",
    icon: Bot,
  },
  {
    id: "external",
    title: "External Links",
    icon: Github,
  },
  {
    id: "availability",
    title: "Availability & Accuracy",
    icon: ShieldCheck,
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
  },
];

function TermsAndConditions() {
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
              <FileText size={23} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Legal
              </p>

              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Terms & Conditions
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                These terms explain the basic conditions for using
                Dhushyandh's portfolio website and its available features.
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

        {/* Terms */}
        <article className="min-w-0">
          <div className="surface-card rounded-2xl p-6 sm:p-8 lg:p-10">
            {/* Introduction */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                <FileText size={14} />
                Terms
              </div>

              <p className="text-[15px] leading-7 text-muted-foreground">
                Welcome to Dhushyandh's portfolio website. By accessing or
                using this website, you agree to use it responsibly and in
                accordance with these Terms & Conditions.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                If you do not agree with these terms, please discontinue use
                of the website.
              </p>
            </div>

            {/* 01 */}
            <TermsSection
              id="acceptance"
              number="01"
              title="Acceptance of Terms"
            >
              <p>
                By accessing this website, you acknowledge that you have read,
                understood, and agreed to these Terms & Conditions.
              </p>

              <p>
                These terms apply to visitors and users of the portfolio,
                including people viewing projects, using the AI assistant, or
                contacting Dhushyandh through the website.
              </p>
            </TermsSection>

            {/* 02 */}
            <TermsSection
              id="website"
              number="02"
              title="Use of the Website"
            >
              <p>
                This website is provided primarily as a personal professional
                portfolio for presenting Dhushyandh's skills, projects,
                experience, education, and professional information.
              </p>

              <p>
                You agree not to misuse the website, interfere with its
                operation, attempt to gain unauthorised access, or use its
                functionality for unlawful purposes.
              </p>

              <ul>
                <li>
                  Do not attempt to disrupt or damage the website.
                </li>
                <li>
                  Do not attempt to access restricted systems or credentials.
                </li>
                <li>
                  Do not use the website for fraudulent or unlawful activity.
                </li>
                <li>
                  Do not abuse automated or interactive features.
                </li>
              </ul>
            </TermsSection>

            {/* 03 */}
            <TermsSection
              id="projects"
              number="03"
              title="Projects & Portfolio Content"
            >
              <p>
                Project descriptions, images, technologies, designs, and
                other portfolio materials are presented for informational and
                demonstration purposes.
              </p>

              <p>
                Some projects may represent academic work, personal work,
                internship work, freelance work, or client-related work.
              </p>

              <p>
                Portfolio content should not automatically be interpreted as
                an offer, guarantee, specification, or contractual commitment
                unless explicitly agreed in writing.
              </p>

              <p>
                Client-owned or third-party materials remain subject to their
                respective ownership and usage rights.
              </p>
            </TermsSection>

            {/* 04 */}
            <TermsSection
              id="ai"
              number="04"
              title="AI Assistant"
            >
              <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-4">
                <div className="flex gap-3">
                  <Bot
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                    <p>
                      The portfolio includes an AI-powered assistant intended
                      to help visitors learn about Dhushyandh's professional
                      background.
                    </p>

                    <p>
                      AI-generated responses may contain mistakes,
                      omissions, or outdated information. The assistant should
                      therefore be treated as an informational convenience,
                      not as an authoritative source.
                    </p>

                    <p>
                      Do not rely on the assistant for legal, financial,
                      medical, security, employment, or other high-stakes
                      decisions.
                    </p>

                    <p>
                      Do not submit passwords, payment information,
                      confidential documents, or sensitive personal
                      information to the AI assistant.
                    </p>
                  </div>
                </div>
              </div>
            </TermsSection>

            {/* 05 */}
            <TermsSection
              id="external"
              number="05"
              title="External Links"
            >
              <p>
                The portfolio may contain links to external websites and
                services, including GitHub, LinkedIn, email services, hosting
                platforms, and other third-party resources.
              </p>

              <p>
                These external websites are operated independently and are
                subject to their own terms, policies, and practices.
              </p>

              <p>
                Dhushyandh is not responsible for the content, availability,
                security, or privacy practices of external websites.
              </p>
            </TermsSection>

            {/* 06 */}
            <TermsSection
              id="availability"
              number="06"
              title="Availability & Accuracy"
            >
              <p>
                Reasonable effort is made to keep the information on this
                website accurate and up to date. However, portfolio content,
                project availability, links, technologies, and professional
                information may change over time.
              </p>

              <p>
                The website and its features may occasionally be unavailable
                because of maintenance, deployment, hosting issues, network
                problems, or circumstances outside reasonable control.
              </p>

              <p>
                No guarantee is made that the website will always be
                available, error-free, or completely up to date.
              </p>
            </TermsSection>

            {/* 07 */}
            <TermsSection
              id="contact"
              number="07"
              title="Contact"
              last
            >
              <p>
                Questions about these Terms & Conditions, the portfolio, or
                potential professional opportunities can be directed to
                Dhushyandh using the email address below.
              </p>

              <a
                href="mailto:dhushyandhneduncheziyan4896@gmail.com"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Mail size={16} />
                dhushyandhneduncheziyan4896@gmail.com
              </a>
            </TermsSection>

            {/* Agreement note */}
            <div className="mt-10 rounded-xl border border-border bg-background/60 p-4">
              <div className="flex gap-3">
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <p className="text-sm leading-6 text-muted-foreground">
                  These terms may be updated when the website or its features
                  change. The latest version published on this page will apply
                  to future use of the website.
                </p>
              </div>
            </div>
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
              to="/privacy-policy"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              Privacy Policy
              <ChevronRight size={15} />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

function TermsSection({
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