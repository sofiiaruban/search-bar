import { FC } from 'react'
import StarFullIcon from '../../../assets/icons/StarFullIcon'
import StarIcon from '../../../assets/icons/StarIcon'
import styles from './CurrencyItem.module.css'

interface CurrencyItemProps {
  currencyName: string
  isFavorite: boolean
}

const CurrencyItem: FC<CurrencyItemProps> = ({ currencyName, isFavorite }) => {
  return (
    <li className={styles.currencyItem}>
      {isFavorite ? <StarFullIcon /> : <StarIcon />}
      {currencyName}
    </li>
  )
}

export default CurrencyItem
