'use client'

import React from 'react'
import styles from './PhotoContent.module.css'
import Link from 'next/link'
import { useUser } from '@/context/user-context'
import Image from 'next/image'
import { IPhotoData } from '@/server-actions/photos/get-photo'
import PhotoDelete from '../PhotoDelete'

const PhotoContent = ({
  data,
  single,
}: {
  data: IPhotoData
  single: boolean
}) => {
  const { user } = useUser()
  const { photo } = data

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={String(data.photo.id)} />
            ) : (
              <Link href={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PhotoContent
