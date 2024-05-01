'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { IPhoto } from '../interfaces/photo.interface'

export const getPhotos = async (): Promise<IPhoto[]> => {
  const response = await fetch(
    `${BASE_URL}/${RESOURCE.PHOTOS}/?_page=1&_total=6&_user=0`,
    {
      next: { revalidate: 10, tags: ['photos'] },
    },
  )
  const data = await response.json()
  return data as IPhoto[]
}
