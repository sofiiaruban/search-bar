import { FC } from 'react'
import { CryptoCurrency } from '@/lib/cryptoCurrencyData'

interface CurrencyListProps {
  currencyList: CryptoCurrency[]
}

const CurrencyList: FC<CurrencyListProps> = ({currencyList}) => {
 
  return <ul>{currencyList.map(currency => )}</ul>
}

export default CurrencyList
