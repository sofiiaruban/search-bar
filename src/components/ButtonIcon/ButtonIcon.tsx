import { FC, ReactNode, MouseEventHandler } from 'react'
import styles from './ButtonIcon.module.css'

interface ButtonIconProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  isVisible?: boolean
}

const ButtonIcon: FC<ButtonIconProps> = ({ children, onClick, isVisible }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.buttonIcon} ${isVisible ? styles.visible : ''}`}
      type="button"
    >
      {children}
    </button>
  )
}

export default ButtonIcon
