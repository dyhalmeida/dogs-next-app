import FeedModal from '@/components/FeedModal'
import { getPhoto } from '@/server-actions/photos/get-photo'
import { notFound } from 'next/navigation'

interface IPhotoParams {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: IPhotoParams) {
  const { data } = await getPhoto(params.id)

  if (!data) return { title: 'Foto' }
  return {
    title: data.photo.title + ' | Dogs',
  }
}

export default async function PhotoIdPage({ params }: IPhotoParams) {
  const { data } = await getPhoto(params.id)
  if (!data) return notFound()

  return (
    <section className="container mainContainer">
      <FeedModal photo={data} />
    </section>
  )
}
