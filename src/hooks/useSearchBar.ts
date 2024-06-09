import { ChangeEvent, useMemo, useState } from 'react'

interface SearchBarHookReturnType {
  searchValue: string
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
  clearSearch: () => void
}

const useSearchBar = (): SearchBarHookReturnType => {
  const [searchValue, setSearchValue] = useState('')

  const debouncedSetSearchValue = useMemo(
    () => debounce(setSearchValue, 100),
    []
  )

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    debouncedSetSearchValue(value)
  }

  const clearSearch = () => {
    setSearchValue('')
  }

  return {
    searchValue,
    handleSearchChange,
    clearSearch
  }
}

export default useSearchBar

const debounce = <T extends (...args: string[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>

  return function executedFunction(...args: Parameters<T>): void {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
