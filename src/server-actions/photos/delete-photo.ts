'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ApiError } from '@/utils/api-error'

export default async function deletePhoto(id: string) {
  const token = cookies().get('token')?.value
  try {
    if (!token) throw new Error('Unauthorized')
    const response = await fetch(`${BASE_URL}/${RESOURCE.PHOTOS}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    if (!response.ok) throw new Error('Error deleting photo')
  } catch (error: unknown) {
    return ApiError(error)
  }
  revalidateTag('photos')
  redirect('/account')
}
