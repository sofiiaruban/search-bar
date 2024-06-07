import { FC } from 'react'
import styles from './RadioButton.module.css'

interface RadioButtonProps {
  label: string
  name: string
  value: string
  icon?: React.ReactNode
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: FC<RadioButtonProps> = ({
  icon,
  label,
  name,
  value,
  checked,
  onChange
}) => {
  return (
    <div className={styles.radio}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{icon}</span>
      <label>
        <span>{label}</span>
      </label>
    </div>
  )
}

export default RadioButton
