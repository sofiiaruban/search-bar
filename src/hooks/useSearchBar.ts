import { ChangeEvent, useState } from 'react'

interface SearchBarHookReturnType {
  searchValue: string
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
  clearSearch: () => void
}

const useSearchBar = (): SearchBarHookReturnType => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const clearSearch = () => {
    setSearchValue('')
    console.log(searchValue)
    console.log('click')
  }

  return {
    searchValue,
    handleSearchChange,
    clearSearch
  }
}

export default useSearchBar
