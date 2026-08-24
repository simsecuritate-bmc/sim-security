'use client'
import { useState } from 'react'

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
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="acasa">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Certificat ISO 9001:2015
            </div>
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
                <div className="cert-badges">
                  <span className="cert-badge">ISO 9001:2015</span>
                  <span className="cert-badge">Certificat MC</span>
                  <span className="cert-badge">Autorizat IGPR</span>
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
          <div className="iso-badge">
            <span>🏅</span>
            <span>Certificat <strong>ISO 9001:2015</strong></span>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} SIM Security SRL. Toate drepturile rezervate. V1.0.3 </div>
        </div>
      </footer>
    </>
  )
}
