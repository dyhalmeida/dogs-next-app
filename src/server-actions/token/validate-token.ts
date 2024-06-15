'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { ApiError } from '@/utils/api-error'
import { cookies } from 'next/headers'

export const validateToken = async () => {
  try {
    const token = cookies().get('token')?.value
    if (!token) throw new Error('Unauthorized')
    const response = await fetch(`${BASE_URL}/${RESOURCE.TOKEN_VALIDATE}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    if (!response.ok) throw new Error('Error validate token')
    const data = await response.json()
    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
