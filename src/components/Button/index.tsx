import styles from './Button.module.css'

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}
