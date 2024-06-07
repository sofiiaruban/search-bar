import { FC } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  text?: string
  onClick: () => void
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = ({ text, onClick, icon, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  )
}

export default Button
