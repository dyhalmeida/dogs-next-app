import { Feed } from '@/components/Feed'
import { getPhotos } from '@/server-actions/photos/get-photos'

export default async function Home() {
  const { data } = await getPhotos({})
  const photos = data?.length ? data : []
  return (
    <section className="container mainContainer">
      <Feed photos={photos} />
    </section>
  )
}
