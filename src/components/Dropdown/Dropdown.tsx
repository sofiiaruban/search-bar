import { FC } from 'react'
import { createPortal } from 'react-dom'
import styles from './DropDown.module.css'

interface DropdownProps {
  isOpen: boolean
  children: React.ReactNode
  targetRef: React.RefObject<HTMLElement>
}

const Dropdown: FC<DropdownProps> = ({ isOpen, children, targetRef }) => {
  if (!isOpen || !targetRef.current) return null

  const { top, height } = targetRef.current!.getBoundingClientRect()

  return createPortal(
    <div className={styles.dropdown} style={{ top: top + height }}>
      {children}
    </div>,
    document.body
  )
}

export default Dropdown
