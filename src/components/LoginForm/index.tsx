'use client'

import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { Input } from '@/components/Input'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Button } from '@/components/Button'
import { makeLogin } from '@/server-actions/login/make-login'

import styles from './LoginForm.module.css'
import Link from 'next/link'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending}>{pending ? 'Enviando...' : 'Entrar'}</Button>
  )
}

export const LoginForm = () => {
  const [state, action] = useFormState(makeLogin, {
    ok: false,
    error: '',
    data: null,
  })

  useEffect(() => {
    if (state.ok) window.location.href = '/account'
  }, [state.ok])

  return (
    <>
      <form action={action} className={styles.form}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          id="username"
          placeholder="seu usuário"
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
      <Link className={styles.recovery} href="/login/recovery">
        Perdeu a senha?
      </Link>
      <div className={styles.create}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/create">
          Cadastro
        </Link>
      </div>
    </>
  )
}
