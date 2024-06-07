import { FC } from 'react'
import { CryptoCurrency } from '@/lib/cryptoCurrencyData'
import StarFullIcon from '@/assets/icons/StarFullIcon'
import StarIcon from '@/assets/icons/StarIcon'

interface CurrencyItemProps {
  currency: CryptoCurrency
}

const CurrencyItem: FC<CurrencyItemProps> = ({ currency }) => {
  return (
    <li>
      {currency.isFavorite ? <StarFullIcon /> : <StarIcon />}
      {currency.currencyName}
    </li>
  )
}

export default CurrencyItem
