import { CreateLoginForm } from '@/components/CreateLoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crie sua conta | Dogs',
  description: 'Crie sua conta no site Dogs',
}

export default function CreateLoginPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <CreateLoginForm />
    </div>
  )
}
