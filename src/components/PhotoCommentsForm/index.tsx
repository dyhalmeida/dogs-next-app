'use client'

import React from 'react'

import { useFormState, useFormStatus } from 'react-dom'
import { IComment } from '@/server-actions/photos/get-photo'
import { SendIcon } from '@/icons'
import styles from './PhotoCommentsForm.module.css'
import { ErrorMessage } from '../ErrorMessage'
import postComments from '@/server-actions/comments/post-comments'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      <SendIcon />
    </button>
  )
}

export default function PhotoCommentsForm({
  single,
  id,
  setComments,
}: {
  single: boolean
  id: number
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>
}) {
  const [state, action] = useFormState(postComments, {
    ok: false,
    data: null,
    error: '',
  })

  React.useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data])
      setComment('')
    }
  }, [state, setComments])

  const [comment, setComment] = React.useState('')

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  )
}
