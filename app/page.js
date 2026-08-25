'use client'
import { useState } from 'react'
import { ROMANIA_VIEWBOX, ROMANIA_COUNTIES, OLTENIA_LABELS } from './data/romania-counties'

function CertIcon({ type }) {
  const props = {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round'
  }
  switch (type) {
    case 'igpr':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'igsu':
      return (
        <svg {...props}>
          <path d="M17.66 18.66A8 8 0 0 1 6.34 7.34S7 9 9 10c0-2 .5-5 3-7 2 2 4.16 5.19 4.16 8.16A7.97 7.97 0 0 1 17.66 18.66z" />
          <path d="M9.88 16.12A3 3 0 1 0 12.01 11L11 14H9c0 .77.29 1.54.88 2.12z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Home() {
  const [formData, setFormData] = useState({ nume: '', telefon: '', email: '', serviciu: '', mesaj: '' })
  const [sent, setSent] = useState(false)
  const [activeService, setActiveService] = useState(null)

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'cd3950a6-541c-467e-8b80-6d1a0717ff16',
        ...formData
      })
    })
    setSent(true)
  } catch (err) {
    console.error('Eroare:', err)
  }
}

  const services = [
    {
      icon: 'cctv',
      title: 'Sisteme CCTV / Supraveghere Video',
      desc: 'Instalare camere de supraveghere interior și exterior, sisteme analogice și IP, stocare NVR/DVR. Acoperire 24/7 cu rezoluție HD și 4K.',
      details: 'Proiectăm sistemul de supraveghere în funcție de dimensiunea și cerințele obiectivului: camere dome, bullet sau PTZ, analogice (HD-TVI/CVI) sau IP, cu vedere nocturnă și detecție inteligentă de mișcare. Stocare pe NVR/DVR cu acces la distanță din aplicație mobilă, configurare pentru vizualizare live și export înregistrări.\n\nEtapele lucrării: consultanță și evaluare a punctelor de acoperire necesare, proiectare unghiuri de filmare, montaj camere și cablare (sau configurare wireless), configurare NVR/DVR și rețea, testare completă și instruirea clientului privind aplicația de vizualizare de pe telefon. Oferim garanție la echipamente și opțiune de contract de mentenanță.',
      images: []
    },
    {
      icon: 'alarm',
      title: 'Sisteme de Alarmare la Efracție',
      desc: 'Detectoare de mișcare, senzori de geam și ușă, sirene interior/exterior. Sisteme conectate la dispecerat sau aplicație mobilă.',
      details: 'Sisteme complete de alarmă cu senzori de mișcare (PIR/dual tehnologie), contacte magnetice pentru uși și ferestre, senzori de vibrație și sirene interior/exterior cu flash. Centrală conectată la aplicație mobilă pentru armare/dezarmare de la distanță și notificări în timp real, cu opțiune de conectare la dispecerat de monitorizare 24/7.\n\nSistemul poate fi extins cu telecomenzi, tastaturi de armare pe zone separate (utile în case cu mai multe niveluri) și baterie de backup în caz de pană de curent. La finalul instalării, primești o sesiune de instruire pentru armare/dezarmare și configurarea notificărilor.',
      images: []
    },
    {
      icon: 'perimeter',
      title: 'Sisteme de Detecție Perimetrală',
      desc: 'Senzori perimetrali, bariere infraroșu și detectoare de mișcare pentru protecția curții, gardului sau limitei proprietății. Alertare imediată la orice intruziune.',
      details: 'Protejăm limita proprietății cu bariere infraroșu, senzori pe gard, detectoare radar de mișcare exterioară și cabluri senzoriale îngropate, calibrate să evite alarmele false (animale, vânt). Ideal pentru curți, depozite, parcări și obiective industriale unde intervenția trebuie declanșată înainte de intruziunea efectivă în clădire.\n\nSoluția se proiectează individual, în funcție de configurația terenului și de riscurile identificate la evaluarea inițială, și se poate integra cu sistemul de CCTV (pornire automată a înregistrării la alarmă) și cu cel de alarmare la efracție.',
      images: []
    },
    {
      icon: 'access',
      title: 'Sisteme de Control al Accesului',
      desc: 'Sisteme cu card RFID, cod PIN sau amprentă digitală. Ideal pentru firme, depozite și instituții. Jurnalizare completă a accesului.',
      details: 'Sisteme de control acces cu cititoare de card RFID, cod PIN, amprentă digitală sau recunoaștere facială, integrate cu electromagneți, yale electrice sau bariere. Software de administrare cu jurnal complet al accesărilor și programare de drepturi pe zone și intervale orare, potrivit pentru firme, blocuri, depozite și instituții.\n\nPoți gestiona ușor adăugarea sau ștergerea unui utilizator, restricționa accesul pe anumite intervale orare și genera rapoarte de prezență/accesare pentru fiecare punct de control.',
      images: []
    },
    {
      icon: 'fire',
      title: 'Instalații de Detecție și Semnalizare la Incendiu',
      desc: 'Detectoare de fum și temperatură, centrale de semnalizare și sirene de alarmare. Sisteme conforme normativelor în vigoare, cu intervenție rapidă.',
      details: 'Instalații de detecție și semnalizare la incendiu cu detectoare de fum, temperatură și gaz, centrale adresabile sau convenționale, butoane de alarmare manuală și sirene optico-acustice. Proiectare, punere în funcțiune și verificare periodică, conform normativelor în vigoare.\n\nRecomandat pentru firme, depozite, blocuri și instituții care au nevoie de sisteme conforme pentru autorizare — de la consultanță inițială până la documentația necesară și mentenanța periodică obligatorie.',
      images: []
    },
    {
      icon: 'intercom',
      title: 'Sisteme de Interfonie și Videointerfonie',
      desc: 'Instalare interfoane audio și video pentru blocuri, vile și clădiri de birouri. Integrare cu sistemul de control acces.',
      details: 'Instalăm interfoane audio și video pentru blocuri, vile și clădiri de birouri, cu monitoare interioare color, deschidere ușă de la distanță și, opțional, vizualizare de pe telefon. Integrare completă cu sistemul de control acces și, la cerere, cu camerele de supraveghere ale intrării.\n\nDisponibile atât în variantă cu fir, cât și wireless, cu unul sau mai multe posturi interioare — utile pentru vile cu mai multe apartamente sau clădiri de birouri cu recepție.',
      images: []
    },
    {
      icon: 'automation',
      title: 'Sisteme de Automatizare',
      desc: 'Automatizare porți, bariere și uși de acces — telecomenzi, cititoare de proximitate și integrare cu restul sistemelor de securitate.',
      details: 'Automatizăm porți batante, glisante și bariere auto, cu telecomenzi, cititoare de proximitate, buton de interior și senzori de siguranță anti-blocare. Integrare cu sistemul de control acces și interfonie, pentru comandă unificată a intrării în proprietate.\n\nOferim și comandă de pe telefon (deschidere de la distanță), programare de coduri temporare pentru vizitatori și mentenanță periodică a motoarelor și automatizărilor existente, chiar dacă nu au fost instalate de noi.',
      images: []
    },
    {
      icon: 'network',
      title: 'Rețelistică',
      desc: 'Proiectare și instalare rețele de date pentru sisteme IP: cablare structurată, switch-uri, echipamente wireless și configurare pentru integrarea sistemelor de securitate.',
      details: 'Proiectăm și instalăm infrastructura de rețea necesară sistemelor IP: cablare structurată UTP/fibră, switch-uri PoE, echipamente wireless și configurare pentru separarea traficului de securitate de restul rețelei. Testare a cablajului la finalizare.\n\nAcoperă atât instalații noi (birouri, depozite, obiective industriale), cât și extinderea sau optimizarea unei rețele existente, astfel încât camerele și sistemele IP să funcționeze stabil, fără blocaje de bandă.',
      images: []
    },
    {
      icon: 'maintenance',
      title: 'Mentenanță & Service',
      desc: 'Întreținere periodică, reparații și upgrade sisteme existente. Contracte de mentenanță cu intervenție rapidă garantată.',
      details: 'Contracte de mentenanță preventivă cu verificări periodice programate, curățare și calibrare echipamente, actualizări firmware și înlocuire componente uzate. Intervenție rapidă la solicitare pentru remedierea oricărei defecțiuni, cu timp de răspuns garantat prin contract.\n\nPreluăm în mentenanță și sisteme instalate de alți furnizori, după o evaluare inițială a stării echipamentelor existente.',
      images: []
    },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <a href="#acasa" className="nav-logo">
          <img src="/logo-white.png" alt="SIM Security" style={{ height: 44, width: 'auto' }} />
          <span className="nav-logo-text">SIM <span>Security</span></span>
        </a>
        <ul className="nav-links">
          <li><a href="#acasa">Acasă</a></li>
          <li><a href="#servicii">Servicii</a></li>
          <li><a href="#despre">Despre Noi</a></li>
          <li><a href="#acoperire">Acoperire</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
      </nav>

      {/* BUTOANE PLUTITOARE: SUNĂ / WHATSAPP */}
      {activeService === null && (
        <div className="floating-actions">
          <a
            href="https://wa.me/40787310051"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn floating-btn-whatsapp"
            aria-label="Scrie-ne pe WhatsApp"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.33 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.22 8.22 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.19-.06-.11-.23-.17-.48-.29z"/>
            </svg>
          </a>
          <a
            href="tel:+40787310051"
            className="floating-btn floating-btn-call"
            aria-label="Sună acum"
          >
            <span className="floating-btn-pulse" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      )}

      {/* HERO */}
      <section className="hero" id="acasa">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div>
            <h1 className="hero-title">
              Securitate<br />
              <span className="accent">Profesională</span><br />
              pentru afacerea ta
            </h1>
            <p className="hero-subtitle">
              Instalare și mentenanță sisteme de securitate în județul Dolj și nu numai.
              Camere CCTV, alarme, control acces — soluții complete adaptate nevoilor tale.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Solicită Ofertă</a>
              <a href="#servicii" className="btn-secondary">Vezi Servicii</a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-number">10+</div>
                <div className="stat-label">Ani Experiență</div>
              </div>
              <div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Proiecte Finalizate</div>
              </div>
              <div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Suport Tehnic</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="shield-container">
              <div className="shield-glow" />
              <div className="shield-ring" />
              <div className="shield-ring" />
              <div className="shield-ring" />
              <div className="shield-center">
                <img src="/logo-white.png" alt="SIM Security" style={{ width: '70%', height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicii">
        <div className="container">
          <div className="services-header">
            <p className="section-label">Ce Oferim</p>
            <h2 className="section-title">Serviciile Noastre</h2>
            <p className="section-subtitle">
              Soluții complete de securitate pentru locuințe, firme și instituții.
              Proiectare, instalare și mentenanță cu garanție.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                className="service-card"
                key={i}
                onClick={() => setActiveService(i)}
              >
                <span className="service-icon">
                  <img
                    src={`/services/${s.icon}.jpg`}
                    alt={s.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-more">Vezi detalii →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL MODAL */}
      {activeService !== null && (
        <div className="service-modal-overlay" onClick={() => setActiveService(null)}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="service-modal-close"
              onClick={() => setActiveService(null)}
              aria-label="Închide"
            >
              ✕
            </button>
            <div className="service-modal-hero">
              <img
                src={`/services/${services[activeService].icon}.jpg`}
                alt={services[activeService].title}
              />
            </div>
            <h3>{services[activeService].title}</h3>
            {services[activeService].details.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            {services[activeService].images && services[activeService].images.length > 0 && (
              <div className="service-modal-images">
                {services[activeService].images.map((src, idx) => (
                  <img key={idx} src={src} alt={`${services[activeService].title} - imagine ${idx + 1}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ABOUT */}
      <section id="despre">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-card">
                <div className="about-card-accent" />
                <p className="section-label" style={{marginBottom: '0.5rem'}}>Compania Noastră</p>
                <h3 style={{fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem'}}>
                  SIM Security SRL
                </h3>
                <p style={{color: 'var(--silver)', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300}}>
                  Firmă cu sediul în Com. Plenița, jud. Dolj, specializată în instalarea și mentenanța
                  sistemelor de securitate electronice.
                </p>
                <div className="cert-list">
                  <div className="cert-item cert-item-iso">
                    <span className="cert-icon">
                      <img
                        src="/certifications/iso-mc-logo.png"
                        alt="Management Certification"
                        width={38}
                        height={38}
                        style={{ width: 38, height: 38, objectFit: 'contain' }}
                      />
                    </span>
                    <div>
                      <div className="cert-item-title">Certificat ISO 9001:2015</div>
                      <div className="cert-item-desc">Sistem de Management al Calității — Certificat nr. C-MC 8356</div>
                    </div>
                  </div>
                  <div className="cert-item cert-item-igpr">
                    <span className="cert-icon"><CertIcon type="igpr" /></span>
                    <div>
                      <div className="cert-item-title">Licență de Funcționare IGPR</div>
                      <div className="cert-item-desc">Instalare, modificare și întreținere a sistemelor de alarmare împotriva efracției — Nr. 5255/T</div>
                    </div>
                  </div>
                  <div className="cert-item cert-item-igsu">
                    <span className="cert-icon"><CertIcon type="igsu" /></span>
                    <div>
                      <div className="cert-item-title">Autorizație IGSU</div>
                      <div className="cert-item-desc">Instalarea și întreținerea sistemelor de semnalizare, alarmare și alertare la incendiu — Seria B Nr. 5056</div>
                    </div>
                  </div>
                </div>

                <div style={{marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                  {[
                    {num: '10+', label: 'Ani Activitate'},
                    {num: '500+', label: 'Clienți Mulțumiți'},
                    {num: '100%', label: 'Sisteme Garantate'},
                    {num: 'Jud. Dolj si nu numai', label: 'Zona de Acoperire'},
                  ].map((stat, i) => (
                    <div key={i} style={{
                      background: 'rgba(37, 99, 235, 0.08)',
                      border: '1px solid rgba(37, 99, 235, 0.15)',
                      borderRadius: 6,
                      padding: '1rem',
                    }}>
                      <div style={{fontSize: '1.4rem', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--accent-bright)'}}>{stat.num}</div>
                      <div style={{fontSize: '0.75rem', color: 'var(--silver)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem'}}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-text">
              <p className="section-label">Povestea Noastră</p>
              <h2 className="section-title">De ce să alegi<br />SIM Security?</h2>
              <p>
                Cu peste 10 ani de experiență în domeniul securității electronice, SIM Security SRL
                s-a impus ca un partener de încredere pentru locuințe, firme și instituții publice
                din județul Dolj.
              </p>
              <p>
                Oferim soluții complete, de la consultanță și proiectare până la instalare și
                mentenanță, asigurând cele mai înalte standarde de calitate confirmate prin
                certificarea ISO 9001:2015.
              </p>
              <p>
                Echipa noastră de tehnicieni autorizați utilizează echipamente de ultimă generație
                de la producători consacrați, garantând sisteme fiabile și durabile.
              </p>
              <ul className="features-list">
                <li>Consultanță gratuită la sediul clientului</li>
                <li>Proiectare personalizată a sistemului</li>
                <li>Instalare rapidă cu deranjament minim</li>
                <li>Garanție și contract de mentenanță disponibil</li>
                <li>Suport tehnic 24/7</li>
                <li>Prețuri competitive, fără costuri ascunse</li>
              </ul>

              {/* FONDATORI */}
              <div style={{marginTop: '2.5rem'}}>
                <p className="section-label" style={{marginBottom: '1rem'}}>Fondatori & Asociați</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                  {[
                    { nume: 'Mihai BĂDULESCU', initiale: 'MB' },
                    { nume: 'Florin IONESCU', initiale: 'FI' },
                  ].map((p, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      background: 'rgba(37, 99, 235, 0.06)',
                      border: '1px solid rgba(37, 99, 235, 0.15)',
                      borderRadius: 6,
                      padding: '0.75rem 1rem',
                    }}>
                      <div style={{
                        width: 42, height: 42, borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--blue-mid), var(--blue-light))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 800, fontSize: '0.85rem',
                        color: 'white', flexShrink: 0,
                        letterSpacing: '0.05em',
                      }}>{p.initiale}</div>
                      <div>
                        <div style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 700, fontSize: '1.05rem',
                          color: 'var(--white)', letterSpacing: '0.03em',
                        }}>{p.nume}</div>
                        <div style={{fontSize: '0.75rem', color: 'var(--accent-bright)', textTransform: 'uppercase', letterSpacing: '0.08em'}}>
                          Fondator & Asociat
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONĂ DE ACOPERIRE */}
      <section id="acoperire">
        <div className="container">
          <div className="services-header">
            <p className="section-label">Unde Intervenim</p>
            <h2 className="section-title">Zonă de Acoperire</h2>
            <p className="section-subtitle">
              Acoperim constant regiunea Oltenia, cu intervenție rapidă și mentenanță programată.
              Pentru proiecte mai ample, ne deplasăm oriunde în țară.
            </p>
          </div>

          <div className="coverage-grid">
            <div className="coverage-map-wrap">
              <svg className="coverage-map" viewBox={ROMANIA_VIEWBOX} role="img" aria-label="Harta României, cu regiunea Oltenia evidențiată">
                {ROMANIA_COUNTIES.map((c) => (
                  <path
                    key={c.id}
                    d={c.path}
                    className={c.oltenia ? 'county-path county-path-oltenia' : 'county-path'}
                  >
                    <title>{c.name}</title>
                  </path>
                ))}
                {OLTENIA_LABELS.map((l) => (
                  <text key={l.id} className="county-map-label" x={l.x} y={l.y}>{l.name}</text>
                ))}
                <circle className="hq-dot" cx="216" cy="383" r="3.2" />
                <text className="county-hq-tag" x="216" y="395">SEDIU</text>
              </svg>
              <p className="coverage-map-caption">Regiunea Oltenia — zona noastră de acoperire constantă</p>
            </div>

            <div className="coverage-note">
              <span className="coverage-note-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <div className="coverage-note-title">Disponibili la nivel național</div>
                <p>
                  În funcție de complexitatea proiectului, ne deplasăm și în afara Olteniei, indiferent
                  de distanță — avem deja la activ lucrări executate departe de sediu. Contactează-ne
                  pentru a discuta despre o eventuală colaborare, indiferent de locație.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div style={{marginBottom: '3rem'}}>
            <p className="section-label">Hai să Vorbim</p>
            <h2 className="section-title">Contactează-ne</h2>
            <p className="section-subtitle">
              Solicită o ofertă gratuită. Răspundem în maximum 24 de ore.
            </p>
          </div>
          <div className="contact-grid">
            <div>
              <div className="contact-info">
                {[
                  { icon: '📍', label: 'Adresă', value: 'Aleea Inv. Constantin Papa, Nr. 1\nCom. Plenița, Jud. Dolj' },
                  { icon: '📞', label: 'Telefon 1', value: '0787 310 051', href: 'tel:+40787310051' },
                  { icon: '📞', label: 'Telefon 2', value: '0744 597 609', href: 'tel:+40744597609' },
                  { icon: '✉️', label: 'Email', value: 'sim.securitate@gmail.com', href: 'mailto:sim.securitate@gmail.com' },
                  { icon: '🌐', label: 'Website', value: 'www.simsecuritate.ro', href: 'http://www.simsecuritate.ro' },
                ].map((item, i) => (
                  <div className="contact-item" key={i}>
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="contact-item-value">{item.value}</a>
                      ) : (
                        <div className="contact-item-value" style={{whiteSpace: 'pre-line'}}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form">
              <h3>Solicită Ofertă Gratuită</h3>
              {sent ? (
                <div style={{
                  textAlign: 'center', padding: '2rem',
                  background: 'rgba(37, 99, 235, 0.1)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  borderRadius: 8,
                }}>
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>✅</div>
                  <h4 style={{fontSize: '1.3rem', marginBottom: '0.5rem'}}>Mesaj Trimis!</h4>
                  <p style={{color: 'var(--silver)', fontSize: '0.9rem'}}>Vă vom contacta în cel mai scurt timp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nume Complet *</label>
                    <input
                      type="text"
                      placeholder="Ex: Ion Popescu"
                      required
                      value={formData.nume}
                      onChange={e => setFormData({...formData, nume: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon *</label>
                    <input
                      type="tel"
                      placeholder="07XX XXX XXX"
                      required
                      value={formData.telefon}
                      onChange={e => setFormData({...formData, telefon: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="adresa@email.ro"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Serviciu Dorit</label>
                    <select
                      value={formData.serviciu}
                      onChange={e => setFormData({...formData, serviciu: e.target.value})}
                    >
                      <option value="">Selectează...</option>
                      <option>Sistem CCTV</option>
                      <option>Sistem de Alarmă</option>
                      <option>Control Acces</option>
                      <option>Interfonie / Video</option>
                      <option>Mentenanță / Service</option>
                      <option>Altele / Mai multe</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mesaj</label>
                    <textarea
                      placeholder="Descrieți pe scurt ce aveți nevoie..."
                      value={formData.mesaj}
                      onChange={e => setFormData({...formData, mesaj: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{width: '100%', cursor: 'pointer', border: 'none'}}>
                    Trimite Solicitarea
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src="/logo-white.png" alt="SIM Security" style={{ height: 32, width: 'auto' }} />
            SIM <span>Security</span> SRL
          </div>
          <div className="footer-badges">
            <div className="iso-badge">
              <span>🏅</span>
              <span>Certificat <strong>ISO 9001:2015</strong></span>
            </div>
            <div className="iso-badge">
              <span>🛡️</span>
              <span>Licență <strong>IGPR</strong></span>
            </div>
            <div className="iso-badge">
              <span>🔥</span>
              <span>Autorizație <strong>IGSU</strong></span>
            </div>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} SIM Security SRL. Toate drepturile rezervate. V1.0.14 ·{' '}
            <a href="/politica-confidentialitate" className="footer-legal-link">Politica de Confidențialitate</a>
          </div>
        </div>
      </footer>
    </>
  )
}