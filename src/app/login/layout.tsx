import { ReactNode } from 'react'

import styles from './Login.module.css'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  )
}
