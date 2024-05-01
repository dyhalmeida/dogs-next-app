'use client'

import { ChangeEvent, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import postPhoto from '@/server-actions/photos/post-photo'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { ErrorMessage } from '@/components/ErrorMessage'

import styles from './PostPhotoForm.module.css'

function FormButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  )
}

export default function PostPhotoForm() {
  const [state, action] = useFormState(postPhoto, {
    ok: false,
    error: '',
    data: null,
  })

  const [img, setImg] = useState('')
  function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files?.length) {
      setImg(URL.createObjectURL(target.files[0]))
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          onChange={handleImgChange}
          type="file"
          name="img"
          id="img"
          className={styles.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  )
}
