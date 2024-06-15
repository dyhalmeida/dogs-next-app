import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getStats } from '@/server-actions/stats/get-stats'

const Stats = dynamic(() => import('@/components/Stats'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Estatísticas | Dog Next',
}

export default async function StatisticsPage() {
  const { data } = await getStats()

  if (!data) return null

  return (
    <section>
      <Stats data={data} />
    </section>
  )
}
