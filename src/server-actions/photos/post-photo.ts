'use server'

import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { BASE_URL, RESOURCE } from '@/constants/api'
import { ApiError } from '@/utils/api-error'

const checkFormData = (formData: FormData) => {
  const name = formData.get('nome') as string | null
  const age = formData.get('idade') as string | null
  const weight = formData.get('peso') as string | null
  const img = formData.get('img') as File

  if (!name) {
    throw new Error('name is required')
  }

  if (!age) {
    throw new Error('age is required')
  }

  if (!weight) {
    throw new Error('weight is required')
  }

  if (!img.size) {
    throw new Error('image is required')
  }
}

export default async function postPhoto(state: {}, formData: FormData) {
  try {
    const token = cookies().get('token')?.value
    checkFormData(formData)
    const response = await fetch(`${BASE_URL}/${RESOURCE.PHOTOS}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
    if (!response.ok) throw new Error('Unable to post photo')
  } catch (error: unknown) {
    return ApiError(error)
  }
  revalidateTag('photos')
  redirect('/account')
}
