import styles from './Input.module.css'

type InputType = React.ComponentProps<'input'> & {
  label: string
  error?: string
}

export const Input = ({ label, error, ...props }: InputType) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={props.type}
        id={props.name}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
