import { FC, MouseEventHandler, ReactNode } from 'react'
import styles from './Overlay.module.css'

interface OverlayProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLDivElement>
}

export const Overlay: FC<OverlayProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.overlay}>
      {children}
    </div>
  )
}
