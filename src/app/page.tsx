import { Feed } from '@/components/Feed'
import { getPhotos } from '@/server-actions/photos/get-photos'

export default async function Home() {
  const photos = await getPhotos()
  return (
    <section className="container mainContainer">
      <Feed photos={photos} />
    </section>
  )
}
