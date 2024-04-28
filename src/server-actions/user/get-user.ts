'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { IUser } from '@/context/user-context'
import { ApiError } from '@/utils/api-error'
import { cookies } from 'next/headers'

export const getUser = async () => {
  try {
    const token = cookies().get('token')?.value
    if (!token) throw new Error('token not provided')
    const response = await fetch(`${BASE_URL}/${RESOURCE.USER}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    })
    if (!response.ok) throw new Error('unauthorized user')
    const data = (await response.json()) as IUser
    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
