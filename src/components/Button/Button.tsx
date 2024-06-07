import { forwardRef } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  text?: string
  onClick: () => void
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, onClick, icon, type = 'button' }, ref) => {
    return (
      <button type={type} onClick={onClick} className={styles.button} ref={ref}>
        <span>{icon}</span>
        <span>{text}</span>
      </button>
    )
  }
)

export default Button
