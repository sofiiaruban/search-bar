import { FC } from 'react'

import CurrencyItem from './CurrencyItem/CurrencyItem'
import { CryptoCurrency } from '../../lib/cryptoCurrencyData'
import styles from './CurrencyList.module.css'

interface CurrencyListProps {
  currencyList: CryptoCurrency[]
}

const CurrencyList: FC<CurrencyListProps> = ({ currencyList }) => {
  return (
    <ul className={styles.currencyList}>
      {currencyList.map((currency) => (
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
