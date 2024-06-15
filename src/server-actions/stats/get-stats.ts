'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { IPhoto } from '../interfaces/photo.interface'
import { ApiError } from '@/utils/api-error'
import { cookies } from 'next/headers'

export type IStats = {
  id: number
  title: string
  acessos: string
}

export const getStats = async () => {
  try {
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Unauthorized')
    const response = await fetch(`${BASE_URL}/${RESOURCE.STATS}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    })
    if (!response.ok) throw new Error('Error getting stats')
    const data = (await response.json()) as IStats[]
    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
