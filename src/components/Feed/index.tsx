'use client'

import { IPhoto } from '@/server-actions/interfaces/photo.interface'
import { FeedPhotos } from './FeedPhotos'
import { useEffect, useRef, useState } from 'react'
import { getPhotos } from '@/server-actions/photos/get-photos'

interface IFeedProps {
  photos: IPhoto[]
  user?: 0 | string
}

export const Feed = ({ photos, user }: IFeedProps) => {
  const hasInfinite = photos.length < 6 ? false : true
  const [photosFeed, setPhotosFeed] = useState(photos)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isInfinite, setIsInfinite] = useState(hasInfinite)
  const isFetching = useRef(false)

  const infiniteScroll = () => {
    if (isFetching.current) return
    isFetching.current = true
    setIsLoading(true)
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1)
      isFetching.current = false
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    if (page === 1) return
    ;(async () => {
      const response = await getPhotos({
        page,
        total: 6,
        user,
        options: {
          cache: 'no-store',
        },
      })
      if (Array.isArray(response?.data)) {
        console.log(response.data)
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...response.data])
        if (response.data.length < 6) setIsInfinite(false)
      }
    })()
  }, [page, user])

  useEffect(() => {
    if (isInfinite) {
      window.addEventListener('scroll', infiniteScroll)
      window.addEventListener('wheel', infiniteScroll)
    } else {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }

    return () => {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }
  }, [isInfinite])

  return (
    <>
      <FeedPhotos photos={photosFeed} />
      {isLoading && <p>Carregando...</p>}
    </>
  )
}
