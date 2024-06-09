import { FC } from 'react'
import RadioButton from './RadioButton/RadioButton'
import StarFullIcon from '../../assets/icons/StarFullIcon'
import styles from './RadioGroup.module.css'


interface RadioGroupProps {
  selectedValue: string
  onChange: (value: string) => void
}

const RadioGroup: FC<RadioGroupProps> = ({ selectedValue, onChange }) => {
  console.log(selectedValue)
  return (
    <div className={styles.radioGroup}>
      <RadioButton
        icon={<StarFullIcon filledColor="#ffffff" />}
        label="Favorites"
        name="coin"
        value="favorites"
        checked={selectedValue === 'favorites'}
        onChange={onChange}
      />
      <RadioButton
        label="All coins"
        name="coin"
        value="all"
        checked={selectedValue === 'all'}
        onChange={onChange}
      />
    </div>
  )
}

export default RadioGroup
