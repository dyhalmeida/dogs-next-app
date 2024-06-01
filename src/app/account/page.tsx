import { Metadata } from 'next'
import Link from 'next/link'
import { Feed } from '@/components/Feed'
import { getPhotos } from '@/server-actions/photos/get-photos'
import { getUser } from '@/server-actions/user/get-user'

import styles from './Account.module.css'

export const metadata: Metadata = {
  title: 'Minha Conta | Dog Next',
}

export default async function AccountPage() {
  const { data: user } = await getUser()
  const { data: photos } = await getPhotos({ user: user?.username })

  return (
    <section>
      {photos?.length ? (
        <Feed photos={photos} user={user?.username} />
      ) : (
        <div>
          <p className={styles.message}>Nenhuma foto encontrada</p>
          <Link href="/account/post" className={`button ${styles.link}`}>
            Postar uma foto
          </Link>
        </div>
      )}
    </section>
  )
}
