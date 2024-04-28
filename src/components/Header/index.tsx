'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import { useUser } from '@/context/user-context'

export const Header = () => {
  const { user } = useUser()

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/">
          <Image
            src="/assets/dogs.svg"
            alt="Dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user?.id ? (
          <Link className={styles.login} href="/account">
            {user.username}
          </Link>
        ) : (
          <Link className={styles.login} href="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}
