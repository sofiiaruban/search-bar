import { FC } from 'react'
import { createPortal } from 'react-dom'

interface DropdownProps {
  isOpen: boolean
  children: React.ReactNode
  targetRef: React.RefObject<HTMLElement>
}

const Dropdown: FC<DropdownProps> = ({ isOpen, children, targetRef }) => {
  if (!isOpen) return null

  const { top, left, height } = targetRef.current!.getBoundingClientRect()

  return createPortal(
    <div className="dropdown" style={{ top: top + height, left }}>
      {children}
    </div>,
    document.body
  )
}

export default Dropdown
