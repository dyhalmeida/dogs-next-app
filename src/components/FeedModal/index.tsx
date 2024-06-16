'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { MouseEvent } from 'react'
import styles from './FeedModal.module.css'
import PhotoContent from '../PhotoContent'
import { IPhotoData } from '@/server-actions/photos/get-photo'

export default function FeedModal({ photo }: { photo: IPhotoData }) {
  const router = useRouter()
  const pathname = usePathname()

  if (!pathname.includes('photo')) return null

  function handleOutsideClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back()
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />
    </div>
  )
}
