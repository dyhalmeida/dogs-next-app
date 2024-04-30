'use client'

import React, { useMemo } from 'react'
import { FeedIcon, AddIcon, LogoutIcon, StatisticsIcon } from '@/icons'

import styles from './AccountHeader.module.css'
import { useMedia } from '@/hooks/use-media'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const getTitle = (pathname: string) =>
  ({
    '/account/post': 'Poste sua foto',
    '/account/statistics': 'Estatísticas',
  })[pathname] || 'Minha Conta'

const getMenuActive = (pathname: string) => {
  const accountActive = pathname === '/account' ? 'active' : ''
  const statisticsActive = pathname === '/account/statistics' ? 'active' : ''
  const postActive = pathname === '/account/post' ? 'active' : ''

  return {
    accountActive,
    statisticsActive,
    postActive,
  }
}

export function AccountHeader() {
  const isMobile = useMedia('(max-width: 40rem)')
  const [isOpenMobileMenu, setIsOpenMobileMenu] = React.useState(false)

  const pathname = usePathname()

  const pageTitle = useMemo(() => getTitle(pathname), [pathname])

  const { accountActive, statisticsActive, postActive } =
    getMenuActive(pathname)

  React.useEffect(() => {
    setIsOpenMobileMenu(false)
  }, [pathname])

  function handleLogout() {
    /**
     * @todo
     */
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{pageTitle}</h1>
      {isMobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            isOpenMobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        ></button>
      )}

      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          isOpenMobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/account" className={accountActive}>
          <FeedIcon />
          {isMobile && 'Minha Conta'}
        </Link>
        <Link href="/account/statistics" className={statisticsActive}>
          <StatisticsIcon />
          {isMobile && 'Estatísticas'}
        </Link>
        <Link href="/account/post" className={postActive}>
          <AddIcon />
          {isMobile && 'Adicionar Foto'}
        </Link>
        <button onClick={handleLogout}>
          <LogoutIcon />
          {isMobile && 'Sair'}
        </button>
      </nav>
    </header>
  )
}
