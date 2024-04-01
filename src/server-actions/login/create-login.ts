'use server'

import { BASE_URL, RESOURCE } from '@/constants/api'
import { ApiError } from '@/utils/api-error'
import { makeLogin } from './make-login'

const checkFormData = (formData: FormData) => {
  const username = formData.get('username')
  const email = formData.get('email')
  const password = formData.get('password')

  if (!username) {
    throw new Error('Username is required')
  }

  if (!email) {
    throw new Error('E-mail is required')
  }

  if (!password) {
    throw new Error('password is required')
  }
}

export const createLogin = async (state: {}, formData: FormData) => {
  try {
    checkFormData(formData)
    const response = await fetch(`${BASE_URL}/${RESOURCE.USER}`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Email or user already exists')
    }

    const { ok } = await makeLogin({}, formData)
    if (!ok) throw new Error('Login failed')
    
    return {
      ok: true,
      error: '',
      data: null,
    }
  } catch (error: unknown) {
    return ApiError(error)
  }
}
