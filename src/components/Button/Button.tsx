import { forwardRef } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  text?: string
  onClick: () => void
  isButtonActive: boolean
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, onClick, icon, isButtonActive, type = 'button' }, ref) => {
    if (!ref) return

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${styles.button} ${isButtonActive ? styles.active : ''}`}
        ref={ref}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </button>
    )
  }
)

export default Button
