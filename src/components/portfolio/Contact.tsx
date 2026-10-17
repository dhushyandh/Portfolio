import { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { RESUME } from './resume-data';
const inquirySchema = z.object({ name: z.string().trim().min(1, 'Please enter your name.').max(100), email: z.email('Please enter a valid email.').max(255), subject: z.string().trim().max(150), message: z.string().trim().min(10, 'Please share at least 10 characters about your project.').max(3000) });
export function Contact() {
 const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
 const [status, setStatus] = useState('');
 function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault(); const parsed = inquirySchema.safeParse(form);
  if (!parsed.success) { setStatus(parsed.error.issues[0]?.message ?? 'Please check your details.'); return; }
  const data = parsed.data;
  const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name}\nReply to: ${data.email}`);
  const subject = encodeURIComponent(data.subject || 'Project inquiry — portfolio');
  window.location.href = `mailto:${RESUME.email}?subject=${subject}&body=${body}`;
  setStatus('Your email draft is ready. Send it from your email app, or contact me directly below.');
 }
 const update = (key: keyof typeof form, value: string) => { setForm(f => ({ ...f, [key]: value })); setStatus(''); };
 return <section id="contact" className="premium-contact"><div className="page-width editorial-section"><p className="section-label"><span>/08</span>Let’s make something great</p><div className="contact-layout"><div data-enter="left"><h2 className="contact-heading">Have an idea?<br />Let’s give it life<span>.</span></h2><p className="contact-copy">A website, an app, or something that hasn’t been built yet. I’d love to hear what you have in mind.</p><div className="contact-direct"><a href={`mailto:${RESUME.email}`}><Mail size={16} className="shrink-0" />{RESUME.email}<ArrowUpRight size={14} className="shrink-0" /></a><a href="https://wa.me/919342763553" target="_blank" rel="noreferrer"><MessageCircle size={16} />Chat on WhatsApp <ArrowUpRight size={14} /></a><a href="https://linkedin.com/in/dhushyandh" target="_blank" rel="noreferrer"><Linkedin size={16} />Connect on LinkedIn <ArrowUpRight size={14} /></a></div></div><form className="inquiry-form" onSubmit={onSubmit} data-enter="right"><div className="grid gap-6 sm:grid-cols-2"><div><label htmlFor="inquiry-name">Your name</label><input className="inquiry-field" id="inquiry-name" placeholder="Enter Your Name" autoComplete="name" required maxLength={100} value={form.name} onChange={e => update('name', e.target.value)} /></div><div><label htmlFor="inquiry-email">Email address</label><input className="inquiry-field" id="inquiry-email" type="email" placeholder="Your@company.com" autoComplete="email" required maxLength={255} value={form.email} onChange={e => update('email', e.target.value)} /></div></div><div><label htmlFor="inquiry-subject">What are you looking to build?</label><input className="inquiry-field" id="inquiry-subject" placeholder="A website, an app, an idea…" maxLength={150} value={form.subject} onChange={e => update('subject', e.target.value)} /></div><div><label htmlFor="inquiry-message">A little about your project</label><textarea className="inquiry-field resize-y" id="inquiry-message" rows={3} placeholder="Tell me what you have in mind." required minLength={10} maxLength={3000} value={form.message} onChange={e => update('message', e.target.value)} /></div><Button type="submit" className="premium-button">Create email inquiry <ArrowUpRight /></Button><p className="inquiry-status" role="status">{status || 'Opens an email draft — nothing is sent until you send it.'}</p></form></div></div></section>;
}
