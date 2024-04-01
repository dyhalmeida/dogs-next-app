'use client'

import { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { Input } from '@/components/Input'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Button } from '@/components/Button'
import { recoveryLogin } from '@/server-actions/login/recovery-login'

import styles from './RecoveryLoginForm.module.css'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending}>
      {pending ? 'Enviando e-mail...' : 'Enviar e-mail'}
    </Button>
  )
}

export const RecoveryLoginForm = () => {
  const [state, action] = useFormState(recoveryLogin, {
    ok: false,
    error: '',
    data: null,
  })

  const [url, setUrl] = useState('')

  useEffect(() => {
    const resetUrl = window.location.href.replace('recovery', 'reset')
    setUrl(resetUrl)
  }, [])

  return (
    <form action={action} className={styles.form}>
      <Input
        label="E-mail / Usuário"
        type="text"
        name="login"
        id="login"
        placeholder="seu e-mail ou usuário"
      />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p style={{ color: '#4c1' }}>E-mail enviado com sucesso!</p>
      ) : (
        <FormButton />
      )}
    </form>
  )
}
