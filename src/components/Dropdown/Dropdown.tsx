import { FC, MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'
import styles from './DropDown.module.css'
import { Overlay } from '../Overlay/Overlay'
import useDropdown from '../../hooks/useDropdown'

interface DropdownProps {
  isOpen: boolean
  children: React.ReactNode
  targetRef: React.RefObject<HTMLElement>
  onClick: MouseEventHandler<HTMLDivElement>
}

const Dropdown: FC<DropdownProps> = ({
  isOpen,
  children,
  targetRef,
  onClick
}) => {
  const { dropdownPropagationHandle } = useDropdown()
  if (!isOpen || !targetRef.current) return null

  const { top, height } = targetRef.current!.getBoundingClientRect()

  return createPortal(
    <Overlay onClick={onClick}>
      <div
        className={styles.dropdown}
        style={{ top: top + height + '5px' }}
        onClick={dropdownPropagationHandle}
      >
        {children}
      </div>
    </Overlay>,
    document.body
  )
}

export default Dropdown
