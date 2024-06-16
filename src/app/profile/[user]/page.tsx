import { Feed } from '@/components/Feed'
import { getPhotos } from '@/server-actions/photos/get-photos'
import { notFound } from 'next/navigation'

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string }
}) {
  const { data } = await getPhotos({ user: params.user })

  if (!data) return notFound()

  const title = params.user.charAt(0).toUpperCase() + params.user.slice(1)

  return (
    <section className="container mainSection">
      <h1 className="title">{title}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  )
}
