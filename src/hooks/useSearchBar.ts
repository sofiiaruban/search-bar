import { ChangeEvent, useMemo, useState } from 'react'
import { debounce } from '../helpers/debounce'

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
