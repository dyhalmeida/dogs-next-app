import { ResetLoginForm } from '@/components/ResetLoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resete sua senha | Dogs',
  description: 'Resete sua senha no site Dogs',
}

interface IResetLoginPageProps {
  searchParams: {
    key: string
    login: string
  }
}
export default function ResetLoginPage({ searchParams }: IResetLoginPageProps) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resetar senha</h1>
      <ResetLoginForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  )
}
