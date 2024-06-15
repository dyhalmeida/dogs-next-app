import PhotoContent from '@/components/PhotoContent'
import { getPhoto } from '@/server-actions/photos/get-photo'
import { notFound } from 'next/navigation'

type IPhotoPageParams = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: IPhotoPageParams) {
  const { data } = await getPhoto(params.id)

  if (!data) return { titlte: 'Fotos' }
  return {
    title: data.photo.title,
  }
}

export default async function PhotoIdPage({ params }: IPhotoPageParams) {
  const { data } = await getPhoto(params.id)

  if (!data) return notFound()

  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  )
}
