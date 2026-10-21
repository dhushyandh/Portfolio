import { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { RESUME } from './resume-data';

const inquirySchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid email.').max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, 'Please share at least 10 characters about your project.').max(3000),
});

type FormStatus = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      setStatus({
        type: 'error',
        message: parsed.error.issues[0]?.message ?? 'Please check your details.',
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending....' });

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('access_key', '385195b5-efaa-4e75-9797-ec04ec4b17b7');
      if (!formData.get('subject') && form.subject) {
        formData.append('subject', form.subject);
      }
      formData.append('from_name', 'Dhushyandh Portfolio Inquiry');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Form Submitted Successfully! Thank you, I will get back to you shortly.',
        });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Error submitting the form. Please try again or reach out directly.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Please try again or email directly to ' + RESUME.email,
      });
    }
  }

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  return (
    <section id="contact" className="premium-contact">
      <div className="page-width editorial-section">
        <p className="section-label">
          <span>/09</span>Let’s make something great
        </p>

        <div className="contact-layout">
          <div data-enter="left">
            <h2 className="contact-heading">
              Have an idea?
              <br />
              Let’s give it life<span>.</span>
            </h2>

            <p className="contact-copy">
              A website, an app, or something that hasn’t been built yet. I’d love to hear what you have in mind.
            </p>

            <div className="contact-direct">
              <a href={`mailto:${RESUME.email}`}>
                <Mail size={16} className="shrink-0" />
                {RESUME.email}
                <ArrowUpRight size={14} className="shrink-0" />
              </a>
              <a href="https://wa.me/919342763553" target="_blank" rel="noreferrer">
                <MessageCircle size={16} />
                Chat on WhatsApp <ArrowUpRight size={14} />
              </a>
              <a href="https://linkedin.com/in/dhushyandh" target="_blank" rel="noreferrer">
                <Linkedin size={16} />
                Connect on LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <form className="inquiry-form" onSubmit={onSubmit} data-enter="right">
            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="inquiry-name">Your name</label>
                <input
                  className="inquiry-field"
                  id="inquiry-name"
                  name="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  disabled={status.type === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="inquiry-email">Email address</label>
                <input
                  className="inquiry-field"
                  id="inquiry-email"
                  name="email"
                  type="email"
                  placeholder="Your@company.com"
                  autoComplete="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  disabled={status.type === 'loading'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-subject">What are you looking to build?</label>
              <input
                className="inquiry-field"
                id="inquiry-subject"
                name="subject"
                placeholder="A website, an app, an idea…"
                maxLength={150}
                value={form.subject}
                onChange={(e) => update('subject', e.target.value)}
                disabled={status.type === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="inquiry-message">A little about your project</label>
              <textarea
                className="inquiry-field resize-y"
                id="inquiry-message"
                name="message"
                rows={4}
                placeholder="Tell me what you have in mind."
                required
                minLength={10}
                maxLength={3000}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                disabled={status.type === 'loading'}
              />
            </div>

            <Button
              type="submit"
              className="premium-button"
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending....
                </>
              ) : (
                <>
                  Submit Form <ArrowUpRight size={16} />
                </>
              )}
            </Button>

            <div className="inquiry-status-container" role="status" aria-live="polite">
              {status.type === 'loading' && (
                <p className="inquiry-status flex items-center gap-2 text-[#71717a]">
                  <Loader2 size={14} className="animate-spin text-primary" />
                  {status.message}
                </p>
              )}

              {status.type === 'success' && (
                <p className="inquiry-status flex items-center gap-2 font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                  {status.message}
                </p>
              )}

              {status.type === 'error' && (
                <p className="inquiry-status flex items-center gap-2 font-medium text-red-600 dark:text-red-400">
                  <AlertCircle size={16} className="shrink-0 text-red-500" />
                  {status.message}
                </p>
              )}

              {status.type === 'idle' && (
                <p className="inquiry-status text-muted-foreground">
                  Direct submission via secure API — messages arrive directly in my inbox.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
