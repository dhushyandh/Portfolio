import { useState } from "react";
import { Github, Globe, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "dhushyandh@gmail.com",
    href: "mailto:dhushyandh@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dhushyandh",
    href: "https://linkedin.com/in/dhushyandh",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dhushyandh",
    href: "https://github.com/dhushyandh",
  },
  { icon: Globe, label: "Portfolio", value: "dhushyandh.dev", href: "https://dhushyandh.dev" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || "Portfolio enquiry");
    window.location.href = `mailto:dhushyandh@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  }

  const field =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-colors outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get In Touch"
      intro="I'm open to full-time roles, internships, freelance projects, and interesting collaborations. Let's build something great together."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="surface-card card-hover flex items-center gap-4 p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="mt-1 truncate font-mono text-[14px] text-foreground sm:text-[15px]">
                    {link.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <form onSubmit={onSubmit} className="surface-card space-y-4 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={`mt-2 ${field}`}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={`mt-2 ${field}`}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-sm text-muted-foreground">
              Subject
            </label>
            <input
              id="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="What's this about?"
              className={`mt-2 ${field}`}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or opportunity…"
              className={`mt-2 resize-y ${field}`}
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-[15px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
          >
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
