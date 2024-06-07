import { MouseEventHandler, useState } from 'react'

interface DropdownHookReturnType {
  toggleDropdown: () => void
  closeDropdown: MouseEventHandler<HTMLElement>
  dropdownPropagationHandle: MouseEventHandler<HTMLDivElement>
  isDropdownOpen: boolean
}

const useDropdown = (): DropdownHookReturnType => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const dropdownPropagationHandle: MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.stopPropagation()
  }

  return {
    toggleDropdown,
    closeDropdown,
    isDropdownOpen,
    dropdownPropagationHandle
  }
}

export default useDropdown
