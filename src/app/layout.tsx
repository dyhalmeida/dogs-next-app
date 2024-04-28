import type { Metadata } from 'next'
import { spectral } from '@/fonts'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import { UserContextProvider } from '@/context/user-context'
import { getUser } from '@/server-actions/user/get-user'

export const metadata: Metadata = {
  title: 'Dogs App',
  description: 'Rede Social para cachorros',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: user } = await getUser()

  return (
    <html lang="pt-br">
      <body className={spectral.variable}>
        <div className="App">
          <UserContextProvider user={user}>
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </UserContextProvider>
        </div>
      </body>
    </html>
  )
}
