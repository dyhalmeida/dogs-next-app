'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { ApiError } from '@/utils/api-error'
import { redirect } from 'next/navigation'

const checkFormData = (formData: FormData) => {
  const login = formData.get('login')
  const key = formData.get('key')
  const password = formData.get('password')

  if (!login) {
    throw new Error('Login is required')
  }

  if (!password) {
    throw new Error('Password is required')
  }

  if (!key) {
    throw new Error('Key is required')
  }

}

export const resetLogin = async (state: {}, formData: FormData) => {
  try {
    checkFormData(formData)
    const response = await fetch(`${BASE_URL}/${RESOURCE.RESET_LOGIN}`, {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      throw new Error('Não foi possível resetar a senha')
    }
  } catch (error: unknown) {
    return ApiError(error)
  }
  redirect('/login')
}
