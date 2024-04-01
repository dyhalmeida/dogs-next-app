'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { ApiError } from '@/utils/api-error'

const checkFormData = (formData: FormData) => {
  const login = formData.get('login')

  if (!login) {
    throw new Error('E-mail or username is required')
  }

}

export const recoveryLogin = async (state: {}, formData: FormData) => {
  try {
    checkFormData(formData)
    const response = await fetch(`${BASE_URL}/${RESOURCE.RECOVERY_LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: formData.get('login'),
        url: formData.get('url')
      }),
    })

    if (!response.ok) {
      throw new Error('Email or user not exists')
    }

    return {
      ok: true,
      error: '',
      data: null,
    }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
