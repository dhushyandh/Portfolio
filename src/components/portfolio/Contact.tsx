import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Globe,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "dhushyandhneduncheziyan4896@gmail.com",
    href: "mailto:dhushyandhneduncheziyan4896@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dhushyandh",
    href: "https://linkedin.com/in/dhushyandh",
    description: "Let's connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dhushyandh",
    href: "https://github.com/dhushyandh",
    description: "Explore my code",
  },
  {
    icon: Globe,
    label: "Call me or Text On WhatsApp",
    value: "tel:+91 9342763553",
    href: "tel:+91 9342763553",
    description: "Call or text me directly",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );

    const subject = encodeURIComponent(
      form.subject || "Portfolio enquiry",
    );

    window.location.href =
      `mailto:dhushyandhneduncheziyan4896@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Opening your email client…");
  }

  const updateField = (
    field: keyof typeof form,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background/70 px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-primary/60 focus:bg-background focus:ring-4 focus:ring-primary/10";

  return (
    <Section
      id="contact"
      eyebrow="07 / Contact"
      title="Let's Build Something"
      intro="I'm open to full-time opportunities, internships, freelance projects, and interesting collaborations. If you have an idea or opportunity, I'd love to hear from you."
    >
      <div className="grid min-w-0 gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        {/* Contact links */}
        <div className="min-w-0">
          <div className="mb-4">
            <p className="font-display text-lg font-semibold text-foreground">
              Connect with me
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Choose whichever channel works best for you.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {LINKS.map((link) => {
              const Icon = link.icon;
              const external = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group surface-card flex min-w-0 items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/[0.03] sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-foreground">
                        {link.label}
                      </p>

                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </div>

                    <p className="mt-1 truncate font-mono text-[12px] text-muted-foreground sm:text-[13px]">
                      {link.value}
                    </p>

                    <p className="mt-1.5 text-xs text-muted-foreground/70">
                      {link.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={onSubmit}
          className="surface-card relative min-w-0 overflow-hidden rounded-2xl p-6 sm:p-8"
        >
          {/* Atmospheric accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative">
            <div className="mb-6">
              <p className="font-display text-lg font-semibold text-foreground">
                Send a message
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Tell me a little about what you’re working on.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                    placeholder="Your name"
                    className={`mt-2 ${inputClass}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    placeholder="you@example.com"
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) =>
                    updateField("subject", e.target.value)
                  }
                  placeholder="What's this about?"
                  className={`mt-2 ${inputClass}`}
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>

                  <span className="text-xs text-muted-foreground">
                    Required
                  </span>
                </div>

                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    updateField("message", e.target.value)
                  }
                  placeholder="Tell me about your project, opportunity, or idea…"
                  className={`mt-2 resize-y ${inputClass}`}
                />
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-muted-foreground">
                  Your message will open in your default email client.
                </p>

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display text-[14px] font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/15 active:translate-y-0"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Closing statement */}
      <div className="mt-10 border-t border-border pt-8 text-center">
        <p className="font-display text-base font-medium text-foreground">
          Have an opportunity in mind?
        </p>

        <a
          href="mailto:dhushyandhneduncheziyan4896@gmail.com"
          className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
        >
          Start a conversation
          <ArrowUpRight size={15} />
        </a>
      </div>
    </Section>
  );
}