'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { IPhoto } from '../interfaces/photo.interface'
import { ApiError } from '@/utils/api-error'

interface IGetPhotosParams {
  page?: number
  total?: number
  user?: 0 | string
  options?: RequestInit
}

export const getPhotos = async ({
  page = 1,
  total = 6,
  user = 0,
  options,
}: IGetPhotosParams) => {
  try {
    const responseOptions = options || {
      next: { revalidate: 10, tags: ['photos'] },
    }
    const response = await fetch(
      `${BASE_URL}/${RESOURCE.PHOTOS}/?_page=${page}&_total=${total}&_user=${user}`,
      responseOptions,
    )
    if (!response.ok) throw new Error('Error getting photos')
    const data = (await response.json()) as IPhoto[]
    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
