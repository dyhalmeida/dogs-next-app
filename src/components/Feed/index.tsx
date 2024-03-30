import { IPhoto } from '@/server-actions/interfaces/photo.interface'
import { FeedPhotos } from './FeedPhotos'

interface IFeedProps {
  photos: IPhoto[]
}

export const Feed = ({ photos }: IFeedProps) => {
  return (
    <div>
      <h1>Feed</h1>
      <FeedPhotos photos={photos} />
    </div>
  )
}
