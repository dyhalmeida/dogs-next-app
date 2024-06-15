'use server'

import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import { BASE_URL, RESOURCE } from '@/constants/api'
import { ApiError } from '@/utils/api-error'
import { IComment } from '../photos/get-photo'

const checkFormData = (formData: FormData) => {
  const comment = formData.get('comment') as string | null
  const id = formData.get('id') as string | null

  if (!comment) {
    throw new Error('comment is required')
  }

  if (!id) {
    throw new Error('id is required')
  }
}

export default async function postComments(state: {}, formData: FormData) {
  try {
    const token = cookies().get('token')?.value
    checkFormData(formData)

    const id = formData.get('id') as string | null

    const response = await fetch(`${BASE_URL}/${RESOURCE.COMMENT}/${id}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
    if (!response.ok) throw new Error('Unable to post comments')
    const data = (await response.json()) as IComment
    revalidateTag('comment')
    return {
      data,
      ok: true,
      error: '',
    }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
