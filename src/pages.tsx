import { FormEvent, ReactNode, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from './Seo';
import { EMAIL, INSTAGRAM, PHONE, SERVICES, STEPS, WA_GENERAL, wa, waService } from './data';

const Ext = ({ href, children, cls = 'btn btn-wa' }: { href: string; children: ReactNode; cls?: string }) =>
  <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
const Crumbs = ({ items }: { items: [string, string?][] }) =>
  <nav className="crumbs" aria-label="Breadcrumb">{items.map(([l, p], i) => p ? <span key={l}><Link to={p}>{l}</Link> / </span> : <span key={i}>{l}</span>)}</nav>;
const Head = ({ title, lead, crumbs }: { title: string; lead?: string; crumbs?: [string, string?][] }) =>
  <section className="page-head"><div className="wrap">{crumbs && <Crumbs items={crumbs} />}<h1>{title}</h1>{lead && <p className="lead">{lead}</p>}</div></section>;
const Hours = () => <p className="hours">Monday to Saturday, 8:00 AM to 7:00 PM. Sunday: special service by booking only.</p>;

function ServiceGrid() {
  return (
    <div className="grid">
      {SERVICES.map(s => (
        <article className="card" key={s.slug}>
          <small>{s.group}</small><h3>{s.name}</h3><p>{s.desc}</p>
          <div className="row"><Link to={`/services/${s.slug}`}>View details</Link><Ext href={waService(s.name)} cls="link-wa">Book service</Ext></div>
        </article>
      ))}
    </div>
  );
}

export function Home() {
  return (
    <>
      <Seo path="/" title="Cleaning Services in Lagos | Jodav Cleaning Services" description="Home, office, shop, deep and post-construction cleaning, fumigation and pest control across Lagos. Book on WhatsApp." />
      <section className="hero"><div className="wrap">
        <h1>Professional Cleaning Services Across Lagos</h1>
        <p className="lead">From homes and offices to shops, post-construction spaces and specialised cleaning, Jodav Cleaning Services helps keep your environment clean, fresh and ready to use.</p>
        <div className="actions"><Ext href={WA_GENERAL}>Book on WhatsApp</Ext><Link className="btn btn-ghost" to="/services">Explore Services</Link></div>
      </div></section>
      <section className="wrap facts" aria-label="Business facts">
        <div><b>100+</b><span>Completed jobs</span></div><div><b>Lagos</b><span>Service coverage</span></div>
        <div><b>Mon to Sat</b><span>8AM to 7PM</span></div><div><b>Sunday</b><span>Booking only</span></div>
      </section>
      <section className="wrap sect"><h2>Our Services</h2><ServiceGrid /></section>
      <section className="wrap sect"><h2>How It Works</h2><Steps /></section>
      <section className="wrap sect"><h2>Why Jodav</h2>
        <ul className="ticks"><li>Easy WhatsApp booking</li><li>Service coverage across Lagos</li><li>Residential and commercial cleaning options</li><li>Flexible scheduling</li><li>Clear communication</li></ul></section>
      <Pricing />
    </>
  );
}

function Steps() {
  return <ol className="steps">{STEPS.map(([t, d], i) => <li key={t}><span>{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>;
}

function Pricing() {
  return (
    <section className="band"><div className="wrap">
      <h2>Need a Price?</h2>
      <p>Every cleaning job is different. Tell us what you need and where you are located, and we will provide pricing information through WhatsApp.</p>
      <div className="actions"><Ext href={WA_GENERAL}>Ask for Pricing on WhatsApp</Ext><Link className="btn btn-ghost-light" to="/contact">Book a Service</Link></div>
    </div></section>
  );
}

export function Services() {
  return (
    <>
      <Seo path="/services" title="Cleaning Services in Lagos | Jodav Cleaning Services" description="Home, office, shop, deep, upholstery, carpet and post-construction cleaning, plus fumigation and pest control in Lagos." />
      <Head title="Our Services" lead="Residential, commercial and specialised cleaning across Lagos." crumbs={[['Home', '/'], ['Services']]} />
      <div className="wrap sect"><ServiceGrid /></div><Pricing />
    </>
  );
}

export function ServiceDetail() {
  const s = SERVICES.find(x => x.slug === useParams().slug);
  if (!s) return <NotFound />;
  return (
    <>
      <Seo path={`/services/${s.slug}`} title={`${s.name} in Lagos | Jodav Cleaning Services`} description={s.seo + ' Book on WhatsApp.'} />
      <Head title={`${s.name} in Lagos`} lead={s.desc} crumbs={[['Home', '/'], ['Services', '/services'], [s.name]]} />
      <div className="wrap sect narrow">
        <p>Tell us your location in Lagos, the type of property and what you need. We will reply on WhatsApp with pricing information and available dates.</p>
        <div className="actions"><Ext href={waService(s.name)}>Book on WhatsApp</Ext><Link className="btn btn-ghost" to="/contact">Use the booking form</Link></div>
        <h2>Other services</h2>
        <ul className="ticks">{SERVICES.filter(x => x.slug !== s.slug).map(x => <li key={x.slug}><Link to={`/services/${x.slug}`}>{x.name}</Link></li>)}</ul>
      </div>
    </>
  );
}

export function About() {
  return (
    <>
      <Seo path="/about" title="About Jodav Cleaning Services | Lagos" description="Jodav Cleaning Services provides cleaning for homes, offices, shops and other spaces across Lagos." />
      <Head title="About Jodav" crumbs={[['Home', '/'], ['About']]} />
      <div className="wrap sect narrow">
        <p>Jodav Cleaning Services provides cleaning solutions for homes, offices, shops and other spaces across Lagos. We make it easier for customers to arrange the cleaning they need, with convenient WhatsApp booking and flexible service options.</p>
        <Link className="btn btn-ghost" to="/services">View our services</Link>
      </div>
    </>
  );
}

export function HowItWorks() {
  return (
    <>
      <Seo path="/how-it-works" title="How Booking Works | Jodav Cleaning Services" description="Choose a service, tell us what you need, get pricing on WhatsApp and schedule your cleaning in Lagos." />
      <Head title="How It Works" crumbs={[['Home', '/'], ['How It Works']]} />
      <div className="wrap sect"><Steps /><div className="actions"><Link className="btn btn-wa" to="/contact">Start your request</Link></div></div>
    </>
  );
}

export function Work() {
  return (
    <>
      <Seo path="/our-work" title="Our Work | Jodav Cleaning Services" description="Photos of completed Jodav cleaning jobs in Lagos." />
      <Head title="Our Work" lead="Photos of real Jodav jobs will be added here." crumbs={[['Home', '/'], ['Our Work']]} />
      <div className="wrap sect"><p>Want to see what we can do for your space? Browse our services or message us on WhatsApp.</p>
        <div className="actions"><Link className="btn btn-ghost" to="/services">View Services</Link><Ext href={WA_GENERAL}>Chat on WhatsApp</Ext></div></div>
    </>
  );
}

const clean = (v: string, n: number) => v.replace(/[\u0000-\u001f<>]/g, ' ').trim().slice(0, n);

export function Contact() {
  const [err, setErr] = useState('');
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const g = (k: string, n = 100) => clean(String(d.get(k) ?? ''), n);
    const phone = g('phone', 20);
    if (!g('name') || !/^[0-9+\s-]{7,20}$/.test(phone) || !g('service') || !g('location')) { setErr('Please fill in your name, a valid phone number, the service and your location.'); return; }
    setErr('');
    const lines = [`Hello Jodav Cleaning Services, I would like to request ${g('service')}.`, `Name: ${g('name')}`, `Phone: ${phone}`, `Location: ${g('location')}`,
      g('property') && `Property type: ${g('property')}`, g('date') && `Preferred date: ${g('date')}`, g('time') && `Preferred time: ${g('time')}`, g('details', 500) && `Details: ${g('details', 500)}`].filter(Boolean).join('\n');
    window.open(wa(lines), '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <Seo path="/contact" title="Contact and Book | Jodav Cleaning Services" description="Contact Jodav Cleaning Services in Lagos. Book on WhatsApp, call 08072234895 or send a request." />
      <Head title="Contact and Booking" lead="Serving Customers Across Lagos" crumbs={[['Home', '/'], ['Contact']]} />
      <div className="wrap sect two">
        <form onSubmit={submit} noValidate>
          <label>Name<input name="name" maxLength={100} autoComplete="name" required /></label>
          <label>Phone number<input name="phone" type="tel" maxLength={20} autoComplete="tel" required /></label>
          <label>Service required<select name="service" required defaultValue=""><option value="" disabled>Choose a service</option>{SERVICES.map(s => <option key={s.slug}>{s.name}</option>)}</select></label>
          <label>Location in Lagos<input name="location" maxLength={100} required /></label>
          <label>Property type<input name="property" maxLength={100} placeholder="Apartment, office, shop" /></label>
          <label>Preferred date<input name="date" type="date" /></label>
          <label>Preferred time<input name="time" type="time" /></label>
          <label>Additional details<textarea name="details" rows={4} maxLength={500} /></label>
          {err && <p className="err" role="alert">{err}</p>}
          <button className="btn btn-wa" type="submit">Send request on WhatsApp</button>
        </form>
        <aside>
          <h2>Jodav Cleaning Services</h2><p>Lagos, Nigeria</p>
          <p>Phone: <a href={`tel:${PHONE}`}>{PHONE}</a><br />WhatsApp: <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer">{PHONE}</a><br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />Instagram: <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@jodav_cleaningservices</a></p>
          <Hours />
          <div className="actions"><Ext href={WA_GENERAL}>Chat on WhatsApp</Ext><a className="btn btn-ghost" href={`tel:${PHONE}`}>Call {PHONE}</a></div>
        </aside>
      </div>
    </>
  );
}

export function Privacy() {
  return (
    <>
      <Seo path="/privacy-policy" title="Privacy Policy | Jodav Cleaning Services" description="How Jodav Cleaning Services handles the information you send us." />
      <Head title="Privacy Policy" crumbs={[['Home', '/'], ['Privacy Policy']]} />
      <div className="wrap sect narrow">
        <p>This website does not store your details. When you use the booking form, your message is prepared and opened in WhatsApp, and you choose whether to send it.</p>
        <p>Information you send us by WhatsApp, phone or email is used only to reply to your request and arrange your service.</p>
        <p>We do not sell your information. This website does not use advertising trackers.</p>
        <p>For questions about your information, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or on <a href={`tel:${PHONE}`}>{PHONE}</a>.</p>
      </div>
    </>
  );
}

export function Terms() {
  return (
    <>
      <Seo path="/terms-and-conditions" title="Terms and Conditions | Jodav Cleaning Services" description="Terms for using the Jodav Cleaning Services website and requesting services." />
      <Head title="Terms and Conditions" crumbs={[['Home', '/'], ['Terms and Conditions']]} />
      <div className="wrap sect narrow">
        <p>The information on this website is general. Pricing, availability and scope of work are confirmed with you directly before a job starts.</p>
        <p>Submitting a request does not confirm a booking. A booking is confirmed once Jodav Cleaning Services agrees the details with you.</p>
        <p>Sunday services are available by booking only.</p>
        <p>For service-specific information, please contact us on <a href={`tel:${PHONE}`}>{PHONE}</a> or <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </div>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <Seo path="/404" title="Page Not Found | Jodav Cleaning Services" description="This page could not be found." />
      <Head title="This page couldn't be found." lead="The page may have moved, but you can still find the cleaning service you're looking for." />
      <div className="wrap sect"><div className="actions"><Link className="btn btn-wa" to="/">Back Home</Link><Link className="btn btn-ghost" to="/services">View Services</Link></div></div>
    </>
  );
}
