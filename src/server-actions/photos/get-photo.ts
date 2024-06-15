'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { IPhoto } from '../interfaces/photo.interface'
import { ApiError } from '@/utils/api-error'

export type IComment = {
  comment_ID: string
  commnent_post_ID: string
  comment_author: string
  comment_content: string
}

export type IPhotoData = {
  photo: IPhoto
  comments: IComment[]
}

export const getPhoto = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${RESOURCE.PHOTOS}/${id}`, {
      next: {
        revalidate: 60,
        tags: ['photos', 'comment'],
      },
    })
    if (!response.ok) throw new Error('Error getting photo')
    const data = (await response.json()) as IPhotoData
    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
