# SIM Security SRL — Site de Prezentare

Site construit cu **Next.js 14** (React).

## 📦 Instalare

```bash
# 1. Instalează dependențele
npm install

# 2. Pornește serverul de development
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

## 🚀 Deploy (Publicare pe internet)

Cel mai simplu și gratuit: **Vercel**

1. Creează cont pe [vercel.com](https://vercel.com)
2. Conectează proiectul din GitHub
3. Click "Deploy" — gata!

## ✏️ Ce poți edita

| Fișier | Ce conține |
|--------|-----------|
| `app/page.js` | Tot conținutul: texte, servicii, contact |
| `app/globals.css` | Stiluri, culori, fonturi |
| `app/layout.js` | Titlul și meta-descripțiile SEO |

### Culori principale (în globals.css):
- `--blue-light: #2563eb` — albastrul principal
- `--accent-bright: #60a5fa` — accentul deschis
- `--navy: #0a1628` — fundalul întunecat

## 📧 Configurare formular de contact

Formularul afișează un mesaj de confirmare, dar nu trimite email-uri automat.
Pentru a-l activa, ai 2 opțiuni simple:

**Opțiunea 1 — Formspree (recomandat, gratuit):**
1. Creează cont pe [formspree.io](https://formspree.io)
2. Creează un form și copiază endpoint-ul
3. În `page.js`, înlocuiește `handleSubmit` cu un fetch către endpoint

**Opțiunea 2 — EmailJS:**
1. Creează cont pe [emailjs.com](https://emailjs.com)
2. Instalează: `npm install emailjs-com`
3. Integrează în `handleSubmit`

## 📁 Structura proiectului

```
sim-security/
├── app/
│   ├── globals.css    # Stiluri globale
│   ├── layout.js      # Layout și SEO
│   └── page.js        # Pagina principală
├── public/            # Imagini și fișiere statice
├── next.config.js
└── package.json
```

## 🖼️ Adăugare imagini

Pune imaginile în folderul `/public/` și folosește-le în `page.js`:

```jsx
import Image from 'next/image'

<Image src="/poza-lucrare.jpg" width={600} height={400} alt="Lucrare CCTV" />
```
