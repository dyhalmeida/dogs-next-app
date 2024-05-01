import { IPhoto } from '@/server-actions/interfaces/photo.interface'
import { FeedPhotos } from './FeedPhotos'

interface IFeedProps {
  photos: IPhoto[]
}

export const Feed = ({ photos }: IFeedProps) => {
  return <FeedPhotos photos={photos} />
}
