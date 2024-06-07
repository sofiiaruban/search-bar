import { FC } from 'react'
import RadioButton from './RadioButton/RadioButton'
import StarFullIcon from '../../assets/icons/StarFullIcon'
import styles from './RadioGroup.module.css'

const RadioGroup: FC = () => {
  return (
    <div className={styles.radioGroup}>
      <RadioButton
        icon={<StarFullIcon filledColor="#ffffff" />}
        label="Favorites"
        name="coin"
        value={''}
      />
      <RadioButton label="All coins" name="coin" value={''} />
    </div>
  )
}

export default RadioGroup
