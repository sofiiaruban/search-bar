import { useMemo } from 'react'
import { CryptoCurrency, cryptoCurrencies } from '../lib/cryptoCurrencyData'

const useFiltration = ({
  selectedValue,
  searchValue
}: {
  selectedValue: string
  searchValue: string
}) => {
  const list: CryptoCurrency[] = useMemo(() => {
    if (selectedValue === 'favorites') {
      return cryptoCurrencies.filter((currency) => currency.isFavorite)
    }

    return cryptoCurrencies
  }, [selectedValue])

  const currencyList = useMemo(() => {
    const startsWithSearchValue = (currency: CryptoCurrency) =>
      currency.currencyName.toLowerCase().startsWith(searchValue.toLowerCase())

    const filteredCurrencies = list.filter(startsWithSearchValue)

    if (filteredCurrencies.length === 0) {
      return searchValue.length > 0 ? [] : list
    }

    return filteredCurrencies
  }, [list, searchValue])

  return {
    currencyList
  }
}

export default useFiltration
