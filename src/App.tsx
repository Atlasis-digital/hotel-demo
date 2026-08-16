import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from './i18n/I18nProvider';
import { i18n, photos, contact } from './data';

const wa = (lang: string) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  lang === 'ar' ? `مرحباً ${contact.name}، أرغب في الحجز` : lang === 'en' ? `Hello ${contact.name}, I would like to book` : `Bonjour ${contact.name}, je souhaite réserver`
)}`;

/* --- HERO entrée stagger + zoom de fond --- */
const heroV = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } } };
const heroChild = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

/* --- Reveal au scroll (plus marqué) --- */
const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
      variants={{ ...fade, show: { ...fade.show, transition: { ...fade.show.transition, delay } } }}
    >{children}</motion.div>
  );
}

/* --- transition de page --- */
const pageV = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.3, ease: 'easeIn' } },
};

function Home() {
  const { lang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  return (
    <div>
      <motion.section
        className="hero" style={{ backgroundImage: `url(${photos[0]})` }}
        initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, ease: 'easeOut' }}
      >
        <motion.div className="hero-inner container" variants={heroV} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={heroChild}>{t('eyebrow')}</motion.span>
          <motion.h1 className="display" variants={heroChild}>{contact.name}</motion.h1>
          <motion.p className="lead serif" variants={heroChild}>{t('hero_lead')}</motion.p>
        </motion.div>
      </motion.section>

      <div className="bookbar">
        <div className="container">
          <span>{contact.city}, {contact.country}</span>
          <span>·</span>
          <span>★ {contact.rating}</span>
          <a href={wa(lang)} target="_blank" rel="noopener noreferrer"> {t('nav_contact')} </a>
        </div>
      </div>

      <section className="container">
        <div className="split2">
          <Reveal>
            <div>
              <div className="rule" />
              <h2 className="title display">{t('about_title')}</h2>
              <p className="muted">{t('about')}</p>
              <p className="muted" style={{ color: 'var(--gold)', marginTop: '1.5rem' }}> 🕒 {t('hours')}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}><motion.div className="frame" style={{ backgroundImage: `url(${photos[3]})` }} whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} /></Reveal>
        </div>
      </section>

      <section style={{ background: 'var(--surface)' }}>
        <div className="container">
          <h2 className="title display" style={{ textAlign: 'center', marginBottom: '3rem' }}>{t('rooms_title')}</h2>
          <div className="grid3">
            {(i18n.rooms[lang] as any[]).map((r, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <motion.div className="card" whileHover={{ y: -8 }} transition={{ duration: 0.35 }}>
                  <div className="ph" style={{ backgroundImage: `url(${photos[(i * 2 + 3) % photos.length]})` }} />
                  <div className="body">
                    <h3>{r.name}</h3>
                    <p className="muted">{r.desc}</p>
                    <p className="price">{r.price}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}><Link to="/rooms" className="btn btn-ghost">Voir toutes les suites</Link></div>
        </div>
      </section>

      <section className="container">
        <div className="trust">
          {(i18n.trust[lang] as string[]).map((x, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}>
              <span className="dot">◆</span>{x}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}

function Rooms() {
  const { lang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  return (
    <section style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="rule" />
        <h2 className="title display">{t('rooms_title')}</h2>
        <div className="grid3" style={{ marginTop: '2rem' }}>
          {(i18n.rooms[lang] as any[]).map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <motion.div className="card" whileHover={{ y: -8 }} transition={{ duration: 0.35 }}>
                <div className="ph" style={{ backgroundImage: `url(${photos[(i * 2 + 3) % photos.length]})` }} />
                <div className="body"><h3>{r.name}</h3><p className="muted">{r.desc}</p><p className="price">{r.price}</p></div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { lang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  return (
    <section style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="rule" />
        <h2 className="title display">{t('gallery_title')}</h2>
        <div className="masonry" style={{ marginTop: '2rem' }}>
          {photos.map((p, i) => (
            <motion.div key={i} className={`ph ${i % 3 === 0 ? 'tall' : 'wide'}`} style={{ backgroundImage: `url(${p})` }}
              initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} whileHover={{ scale: 1.05 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { lang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  return (
    <section style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div className="rule" />
        <h2 className="title display reveal">{t('contact_title')}</h2>
        <p className="muted reveal" style={{ maxWidth: '32rem', marginBottom: '2rem' }}>{t('contact_text')}</p>
        <div className="contact-grid">
          <Reveal>
            <div className="box">
              <ul className="contact-list">
                <li>📍 {contact.address}</li>
                <li>📞 <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a></li>
                <li>🕒 {t('hours')}</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href={wa(lang)} target="_blank" rel="noopener noreferrer" className="btn">🟢 {t('whatsapp')}</a>
                <a href={`tel:${contact.phone}`} className="btn btn-ghost">📞 {t('call')}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}><motion.div className="frame" style={{ backgroundImage: `url(${photos[4]})` }} whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} /></Reveal>
        </div>
      </div>
    </section>
  );
}

function Shell() {
  const { lang, setLang } = useI18n();
  const t = (k: keyof typeof i18n) => i18n[k][lang];
  const loc = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, [loc.pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', on); return () => window.removeEventListener('scroll', on);
  }, []);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/rooms', label: t('nav_rooms') },
    { to: '/gallery', label: t('nav_gallery') },
    { to: '/contact', label: t('nav_contact') },
  ];

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh' }}>
      <header className={scrolled ? 'solid' : ''}>
        <div className="container nav">
          <Link to="/" className="brand serif">{contact.name}</Link>
          <nav><ul className="nav-links">
            {links.map((l) => (
              <li key={l.to}><Link to={l.to} className={loc.pathname === l.to ? 'active' : ''}>{l.label}</Link></li>
            ))}
          </ul></nav>
          <div className="langs">
            {(['fr', 'en', 'ar'] as const).map((l) => (
              <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>{l === 'fr' ? 'FR' : l === 'en' ? 'EN' : 'ع'}</button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.div key={loc.pathname} variants={pageV} initial="initial" animate="animate" exit="exit">
            <Routes location={loc}>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="container">
        © {new Date().getFullYear()} {contact.name} · {t('rights')}
      </footer>
    </div>
  );
}

export default function App() {
  return <Shell />;
}
