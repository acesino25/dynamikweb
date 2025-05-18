import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dynamiksoft | Convertimos los desafíos en soluciones de software escalables',
  description: 'Dynamiksoft desarrolla software a medida para resolver desafíos reales. Equipos interdisciplinarios que convierten ideas en soluciones.',
  generator: 'dynamiksoft',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
