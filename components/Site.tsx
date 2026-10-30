'use client';

import { FormEvent, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Scale, ShieldCheck, Landmark, FileCheck2, Handshake, Building2, Menu, X, Phone, MessageCircle, ChevronDown, Gavel, ClipboardCheck, BadgeCheck, MapPin, Mail, Send, CheckCircle2 } from 'lucide-react';

const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '';
const whatsapp = process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || '';
const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || '';
const address = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Company address to be confirmed';
const nav = [['About','about'],['Services','services'],['How it works','process'],['FAQs','faqs'],['Contact','contact']];
const arbitration = ['Land and boundary disputes','Property ownership disputes','Real estate transactions and disputes','Construction-related disputes','Commercial disputes','Contractual disputes'];
const freeHelp = ['Land-related initial queries','Property documentation guidance','Land registration guidance','Ownership-related questions','Real estate legal concerns','Property purchase and sale queries'];
const faqs = [
  ['What is arbitration?', 'Arbitration is a dispute-resolution process in which parties refer a dispute to an independent arbitrator for a decision, subject to the applicable agreement and law.'],
  ['What matters can I enquire about?', 'You can contact us about land, property, real estate, construction, commercial and contractual matters. The team can review the basic details and advise on possible next steps.'],
  ['Is the initial legal guidance free?', 'The initial guidance described on this page is free. Any further work, representation, drafting or other separately chargeable service must be discussed and agreed in advance.'],
  ['Does free guidance include court representation?', 'No. Free initial guidance does not automatically include court representation, document preparation, filing, or other separately chargeable legal services.'],
  ['How do I submit an enquiry?', 'Use the enquiry form on this page or contact the company through the phone or WhatsApp options once the official contact details have been configured.'],
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .55, delay }}>{children}</motion.div>;
}

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [service, setService] = useState('Arbitration Services');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError('');
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    // Phase 1 is frontend-only. No data is transmitted or stored.
    setSubmitted(true); form.reset();
  }

  return <main>
    <header className="header">
      <a className="brand" href="#home" aria-label="SVU Developers home"><span className="brand-mark"><Scale size={23}/></span><span><strong>SVU DEVELOPERS</strong><small>PRIVATE LIMITED</small></span></a>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">{nav.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Talk to us <ArrowRight size={15}/></a></nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="home">
      <div className="hero-grid"/><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      <div className="container hero-inner">
        <motion.div className="hero-copy" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="eyebrow light"><span/> CLARITY. RESOLUTION. CONFIDENCE.</div>
          <h1>Resolve property<br/><em>matters with</em><br/>greater confidence.</h1>
          <p>Practical support for land, property and real estate concerns — through arbitration services and free initial legal guidance.</p>
          <div className="hero-actions"><a className="btn btn-gold" href="#services">Explore our services <ArrowRight size={17}/></a><a className="text-link light-link" href="#about">Discover SVU <span>↗</span></a></div>
          <div className="hero-note"><ShieldCheck size={17}/> Clear next steps. Professional guidance. Human approach.</div>
        </motion.div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
          <div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-card"><div className="art-top"><span>SVU</span><span className="art-line"/></div><Scale size={100} strokeWidth={1.05}/><div className="art-bottom"><span>LEGAL GUIDANCE</span><span>EST. WITH PURPOSE</span></div></div>
          <div className="floating-tag tag-top"><span className="tag-icon"><Gavel size={17}/></span><span><b>Arbitration</b><small>Dispute resolution</small></span></div>
          <div className="floating-tag tag-bottom"><span className="tag-icon"><FileCheck2 size={17}/></span><span><b>Free initial guidance</b><small>Understand your options</small></span></div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span/></a>
    </section>

    <section className="trust-strip"><div className="container trust-inner"><span>FOCUSED ON PROPERTY & REAL ESTATE MATTERS</span><i/><span>PEOPLE-FIRST APPROACH</span><i/><span>CLARITY AT EVERY STEP</span></div></section>

    <section className="section about-section" id="about"><div className="container about-grid"><Reveal><div className="eyebrow"><span/> ABOUT SVU DEVELOPERS</div><h2>Making complex matters<br/>feel <em>more manageable.</em></h2></Reveal><Reveal delay={.12}><div className="about-text"><p className="lead">SVU Developers Pvt Ltd aims to make it easier for people to take the next step when facing land, property and real estate concerns.</p><p>Our Phase 1 service offering is centred on two clear pathways: paid arbitration services for suitable disputes, and free initial legal guidance to help people understand their concerns and possible next steps.</p><a className="text-link" href="#services">Explore the two services <span>↗</span></a></div></Reveal></div></section>

    <section className="section services-section" id="services"><div className="container"><Reveal><div className="section-heading centered"><div className="eyebrow"><span/> HOW WE CAN HELP</div><h2>Two services. One clear <em>starting point.</em></h2><p>Choose the support that best matches your current situation.</p></div></Reveal>
      <div className="service-grid"><Reveal><article className="service-card arbitration-card"><div className="service-card-top"><span className="service-icon"><Scale size={27}/></span><span className="service-label">PAID SERVICE</span></div><h3>Arbitration<br/><em>Services</em></h3><p>Structured dispute-resolution support for eligible land, property, construction and commercial matters.</p><ul>{arbitration.map(x=><li key={x}><span className="check">✓</span>{x}</li>)}</ul><a className="btn btn-gold" href="#contact" onClick={()=>setService('Arbitration Services')}>Request Arbitration <ArrowRight size={16}/></a><div className="card-watermark"><Gavel/></div></article></Reveal>
      <Reveal delay={.12}><article className="service-card free-card"><div className="service-card-top"><span className="service-icon"><Handshake size={27}/></span><span className="service-label">FREE INITIAL GUIDANCE</span></div><h3>Free Legal<br/><em>Services</em></h3><p>Start with a conversation about your concern and get initial guidance on possible next steps.</p><ul>{freeHelp.map(x=><li key={x}><span className="check">✓</span>{x}</li>)}</ul><a className="btn btn-outline" href="#contact" onClick={()=>setService('Free Legal Assistance')}>Get Free Legal Assistance <ArrowRight size={16}/></a><div className="free-disclaimer">Initial guidance only. Court representation and other additional services are not included automatically.</div><div className="card-watermark"><Landmark/></div></article></Reveal></div>
    </div></section>

    <section className="section process-section" id="process"><div className="container"><Reveal><div className="section-heading"><div className="eyebrow light"><span/> A SIMPLE PROCESS</div><h2>A clearer path<br/><em>starts here.</em></h2><p>Share the essentials. We can take it from there once your enquiry channel is active.</p></div></Reveal><div className="steps"><Reveal><div className="step"><span className="step-no">01</span><div className="step-icon"><ClipboardCheck/></div><h3>Tell us what happened</h3><p>Describe your land, property or real estate concern through the enquiry form.</p></div></Reveal><Reveal delay={.1}><div className="step"><span className="step-no">02</span><div className="step-icon"><FileCheck2/></div><h3>Choose a service</h3><p>Indicate whether you need arbitration services or free initial legal guidance.</p></div></Reveal><Reveal delay={.2}><div className="step"><span className="step-no">03</span><div className="step-icon"><Handshake/></div><h3>Discuss next steps</h3><p>The company can review your enquiry and explain the appropriate next step.</p></div></Reveal></div></div></section>

    <section className="section why-section"><div className="container why-grid"><Reveal><div><div className="eyebrow"><span/> THE SVU APPROACH</div><h2>Support built around<br/><em>what matters to you.</em></h2><p className="why-intro">Legal and property concerns can feel complicated. Our service approach is designed to make the first step more straightforward.</p></div></Reveal><div className="why-points"><Reveal><div className="why-point"><span><BadgeCheck/></span><div><h3>Clear service pathways</h3><p>Understand the difference between paid arbitration and free initial guidance.</p></div></div></Reveal><Reveal delay={.08}><div className="why-point"><span><Building2/></span><div><h3>Property-focused enquiries</h3><p>A service offering centred on land, property and real estate-related concerns.</p></div></div></Reveal><Reveal delay={.16}><div className="why-point"><span><ShieldCheck/></span><div><h3>Transparent expectations</h3><p>Know what initial guidance covers and when additional services may be chargeable.</p></div></div></Reveal></div></div></section>

    <section className="section faq-section" id="faqs"><div className="container faq-grid"><Reveal><div><div className="eyebrow"><span/> COMMON QUESTIONS</div><h2>Good to know<br/><em>before you begin.</em></h2><p>Some quick answers to help you choose the right starting point.</p><a className="text-link" href="#contact">Still have a question? Contact us <span>↗</span></a></div></Reveal><div className="faq-list">{faqs.map(([q,a],i)=><Reveal key={q} delay={i*.04}><div className={`faq-item ${faqOpen===i?'active':''}`}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)} aria-expanded={faqOpen===i}><span className="faq-number">0{i+1}</span><strong>{q}</strong><ChevronDown size={19}/></button>{faqOpen===i&&<p>{a}</p>}</div></Reveal>)}</div></div></section>

    <section className="contact-section" id="contact"><div className="container contact-grid"><Reveal><div className="contact-copy"><div className="eyebrow light"><span/> START A CONVERSATION</div><h2>Let’s understand<br/><em>your situation.</em></h2><p>Share a few details about your concern. Select the service you are enquiring about and use the contact details configured by the company for follow-up.</p><div className="contact-details">{phone&&<a href={`tel:${phone}`}><Phone size={17}/><span><small>CALL US</small>{phone}</span></a>}{email&&<a href={`mailto:${email}`}><Mail size={17}/><span><small>EMAIL</small>{email}</span></a>}<div><MapPin size={17}/><span><small>OFFICE</small>{address}</span></div></div></div></Reveal>
      <Reveal delay={.12}><div className="form-panel"><div className="form-heading"><span>ENQUIRY FORM</span><small>All fields marked * are required</small></div>{submitted?<div className="success-state"><CheckCircle2 size={42}/><h3>Enquiry form completed</h3><p>This demo form does not send or store your information. Connect an approved email or backend service before publishing to receive enquiries.</p><button className="btn btn-outline" onClick={()=>setSubmitted(false)}>Submit another enquiry</button></div>:<form onSubmit={submit}><div className="form-row"><label>Full name *<input name="name" placeholder="Your full name" required minLength={2}/></label><label>Phone number *<input name="phone" type="tel" placeholder="Your contact number" required pattern="[0-9+() .-]{7,20}"/></label></div><label>Email address<input name="email" type="email" placeholder="you@example.com"/></label><label>Service required *<select name="service" value={service} onChange={e=>setService(e.target.value)} required><option>Arbitration Services</option><option>Free Legal Assistance</option></select></label><label>Subject *<input name="subject" placeholder="Brief subject of your enquiry" required/></label><label>Tell us about your concern *<textarea name="description" rows={4} placeholder="Share a brief description. Please do not include confidential or sensitive documents." required minLength={10}/></label><button className="btn btn-gold submit-btn" type="submit">Submit enquiry <Send size={16}/></button><p className="form-note">Submitting this demo form does not transmit your details. A secure submission service must be configured before launch.</p></form>}</div></Reveal>
    </div></section>

    <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Scale size={22}/></span><span><strong>SVU DEVELOPERS</strong><small>PRIVATE LIMITED</small></span></a><p>Clearer pathways for land, property and real estate concerns.</p><div className="footer-links">{nav.map(([label,id])=><a key={id} href={`#${id}`}>{label}</a>)}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} SVU Developers Pvt Ltd. All rights reserved.</span><span>Arbitration · Free Initial Legal Guidance</span></div></footer>

    <div className="floating-actions">{whatsapp&&<a className="float-whatsapp" href={`https://wa.me/${whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/></a>}{phone&&<a className="float-phone" href={`tel:${phone}`} aria-label="Call SVU Developers"><Phone/></a>}</div>
  </main>;
}
