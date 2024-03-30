import { IPhoto } from '@/server-actions/interfaces/photo.interface'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../Feed.module.css'

interface IFeedPhotosProps {
  photos: IPhoto[]
}

export const FeedPhotos = ({ photos }: IFeedPhotosProps) => {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo) => (
        <li className={styles.photo} key={photo.id}>
          <Link href={`/photo/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={styles.view}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
