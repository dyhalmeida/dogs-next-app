import type { Metadata } from 'next'
import { spectral } from '@/fonts'
import { Header } from '@/components/Header'
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
      <body className={spectral.variable}>
        <Header />
        {children}
      </body>
    </html>
  )
}
