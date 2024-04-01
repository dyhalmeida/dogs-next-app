'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Input } from '@/components/Input'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Button } from '@/components/Button'
import { resetLogin } from '@/server-actions/login/reset-login'

import styles from './ResetLoginForm.module.css'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending}>
      {pending ? 'Resetando senha...' : 'Resetar senha'}
    </Button>
  )
}

interface IResetLoginFormProps {
  keyToken: string
  login: string
}
export const ResetLoginForm = ({ keyToken, login }: IResetLoginFormProps) => {
  const [state, action] = useFormState(resetLogin, {
    ok: false,
    error: '',
    data: null,
  })

  return (
    <form action={action} className={styles.form}>
      <Input
        label="Nova senha"
        type="password"
        name="password"
        id="password"
        placeholder="sua nova senha"
      />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  )
}
