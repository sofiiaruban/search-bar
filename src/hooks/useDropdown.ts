import { MouseEventHandler, useState } from 'react'

interface ModalHookReturnType {
  toggleDropdown: () => void
  closeDropdown: MouseEventHandler<HTMLElement>
  isDropdownOpen: boolean
}

const useDropdown = (): ModalHookReturnType => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  return {
    toggleDropdown,
    closeDropdown,
    isDropdownOpen
  }
}

export default useDropdown
