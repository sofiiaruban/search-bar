import { FC } from 'react'

import CurrencyItem from './CurrencyItem/CurrencyItem'
import { CryptoCurrency } from '../../lib/cryptoCurrencyData'
import styles from './CurrencyList.module.css'
import useScroll from '../../hooks/useScroll'

interface CurrencyListProps {
  currencyList: CryptoCurrency[]
  selectedValue: string
}

const CurrencyList: FC<CurrencyListProps> = ({
  currencyList,
  selectedValue
}) => {
  const { ulRef, displayedCurrencies, handleScroll } = useScroll({
    currencyList,
    selectedValue
  })

  return (
    <ul className={styles.currencyList} ref={ulRef} onScroll={handleScroll}>
      {displayedCurrencies.map((currency: CryptoCurrency) => (
        <CurrencyItem
          key={currency.id}
          currencyName={currency.currencyName}
          isFavorite={currency.isFavorite}
        />
      ))}
    </ul>
  )
}
export default CurrencyList
