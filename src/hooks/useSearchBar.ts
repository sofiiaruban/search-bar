import { ChangeEvent, useMemo, useState } from 'react'
import { CryptoCurrency, cryptoCurrencies } from '../lib/cryptoCurrencyData'
import { debounce } from '../helpers/debounce'

interface SearchBarHookReturnType {
  currencySearchedList: CryptoCurrency[]
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

  const filteredCurrencies = useMemo(() => {
    const startsWithSearchValue = (currency: CryptoCurrency) =>
      currency.currencyName.toLowerCase().startsWith(searchValue.toLowerCase())

    const filteredCurrencies = cryptoCurrencies.filter(startsWithSearchValue)

    if (filteredCurrencies.length === 0) {
      return searchValue.length > 0 ? [] : cryptoCurrencies
    }

    return filteredCurrencies
  }, [searchValue])

  return {
    currencySearchedList: filteredCurrencies,
    searchValue,
    handleSearchChange,
    clearSearch
  }
}

export default useSearchBar
