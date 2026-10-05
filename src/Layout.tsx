import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { EMAIL, INSTAGRAM, PHONE, SERVICES, WA_GENERAL } from './data';

const NAV: [string, string][] = [['Home', '/'], ['Services', '/services'], ['About', '/about'], ['How It Works', '/how-it-works'], ['Our Work', '/our-work'], ['Contact', '/contact']];
const Logo = () => <Link to="/" className="logo" aria-label="Jodav Cleaning Services home"><img src="/logo-360.webp" srcSet="/logo-360.webp 1x, /logo-720.webp 2x" width="360" height="296" alt="Jodav Cleaning Services" /></Link>;

export default function Layout() {
  const [open, setOpen] = useState(false);
  useLocation();
  return (
    <>
      <header className="hdr">
        <div className="wrap hdr-in">
          <Logo />
          <nav className={open ? 'nav open' : 'nav'} aria-label="Main">
            {NAV.map(([l, p]) => <NavLink key={p} to={p} end={p === '/'} onClick={() => setOpen(false)}>{l}</NavLink>)}
          </nav>
          <a className="btn btn-wa hide-sm" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
          <button className="menu" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="ftr">
        <div className="wrap ftr-grid">
          <div><Logo /><p>Professional cleaning services across Lagos.</p>
            <p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a></p></div>
          <div><h3>Pages</h3>{NAV.map(([l, p]) => <Link key={p} to={p}>{l}</Link>)}</div>
          <div><h3>Services</h3>{SERVICES.map(s => <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>)}</div>
          <div><h3>Contact</h3>
            <a href={`tel:${PHONE}`}>{PHONE}</a><a href={WA_GENERAL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <p>Mon to Sat, 8:00 AM to 7:00 PM<br />Sunday by booking only</p></div>
        </div>
        <div className="wrap ftr-base"><span>© {new Date().getFullYear()} Jodav Cleaning Services</span>
          <span><Link to="/privacy-policy">Privacy Policy</Link> <Link to="/terms-and-conditions">Terms &amp; Conditions</Link></span></div>
      </footer>
      <a className="wa-float" href={WA_GENERAL} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
    </>
  );
}
