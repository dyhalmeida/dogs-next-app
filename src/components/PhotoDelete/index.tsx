'use client'
import React from 'react'
import styles from './PhotoDelete.module.css'
import deletePhoto from '@/server-actions/photos/delete-photo'

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = React.useState(false)
  async function handleClick() {
    setLoading(true)
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      await deletePhoto(id)
    }
    setLoading(false)
  }
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  )
}
