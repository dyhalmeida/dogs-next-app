import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dogs App',
  description: 'Rede Social para cachorros',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
