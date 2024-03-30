import Image from 'next/image'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/assets/dogs-footer.svg" alt="Dogs" width={28} height={22} />
      <p>Dogs. Desenvolvido com Next 14</p>
    </footer>
  )
}
