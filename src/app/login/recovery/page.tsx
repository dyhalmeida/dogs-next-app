import { RecoveryLoginForm } from '@/components/RecoveryLoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recuperar conta | Dogs',
  description: 'Recupere sua conta no site Dogs',
}

export default function RecoveryLoginPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Recuperar senha</h1>
      <RecoveryLoginForm />
    </div>
  )
}
