'use client'

import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { Input } from '@/components/Input'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Button } from '@/components/Button'
import { createLogin } from '@/server-actions/login/create-login'

import styles from './CreateLoginForm.module.css'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending}>
      {pending ? 'Cadastrando...' : 'Cadastrar'}
    </Button>
  )
}

export const CreateLoginForm = () => {
  const [state, action] = useFormState(createLogin, {
    ok: false,
    error: '',
    data: null,
  })

  useEffect(() => {
    if (state.ok) window.location.href = '/account'
  }, [state.ok])

  return (
    <form action={action} className={styles.form}>
      <Input
        label="Usuário"
        type="text"
        name="username"
        id="username"
        placeholder="seu usuário"
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        id="email"
        placeholder="seu e-mail"
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        id="password"
        placeholder="sua senha"
      />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  )
}
