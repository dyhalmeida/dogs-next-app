import { AccountHeader } from '@/components/AccountHeader'

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <AccountHeader />
      {children}
    </div>
  )
}
