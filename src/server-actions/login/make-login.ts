'use server'

import { cookies } from 'next/headers'
import { BASE_URL, RESOURCE } from '@/constants/api'
import { ApiError } from '@/utils/api-error'

const checkFormData = (formData: FormData) => {
  const username = formData.get('username')
  const password = formData.get('password')

  if (!username) {
    throw new Error('Username is required')
  }

  if (!password) {
    throw new Error('password is required')
  }
}

export const makeLogin = async (state: {}, formData: FormData) => {
  try {
    checkFormData(formData)
    const response = await fetch(`${BASE_URL}/${RESOURCE.AUTH}`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Invalid username or password')
    }

    const data = await response.json()
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
    })
    return {
      ok: true,
      error: '',
      data: null,
    }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
