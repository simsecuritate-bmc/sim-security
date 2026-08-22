import './globals.css'

export const metadata = {
  title: 'SIM Security SRL | Sisteme de Securitate Craiova',
  description: 'Instalare și mentenanță sisteme de securitate în județul Dolj. Camere CCTV, sisteme de alarmă, control acces. Certificat ISO 9001:2015.',
  keywords: 'sisteme securitate dolj, camere cctv plenita, alarme, control acces, sim security',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
