import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/dhushyandh-mark.png.asset.json';
const ITEMS = [{ id: 'about', label: 'About' }, { id: 'projects', label: 'Work' }, { id: 'services', label: 'Services' }, { id: 'process', label: 'Process' }];
export function Nav() {
 const [open, setOpen] = useState(false);
 const home = useRouterState({ select: s => s.location.pathname === '/' });
 const href = (id: string) => home ? `#${id}` : `/#${id}`;
 return <header className="premium-nav"><nav className="page-width nav-inner" aria-label="Main navigation"><Link to="/" className="nav-brand"><img src={logo.url} alt="" width="28" height="28" /><span className="truncate">Dhushyandh<span className="text-primary">.</span></span></Link><div className="nav-links">{ITEMS.map(i => <a key={i.id} href={href(i.id)} className="nav-link">{i.label}</a>)}<a href={href('contact')} className="nav-contact text-sm">Let’s talk <ArrowUpRight size={16} /></a></div><Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</Button></nav>{open && <div id="mobile-navigation" className="page-width mobile-nav">{[...ITEMS, { id: 'contact', label: 'Contact' }].map(i => <a key={i.id} href={href(i.id)} onClick={() => setOpen(false)}>{i.label}</a>)}<Link to="/resume" onClick={() => setOpen(false)}>Resume</Link></div>}</header>;
}
