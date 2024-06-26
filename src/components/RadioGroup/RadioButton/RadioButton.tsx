import { FC, ReactNode } from 'react'
import styles from './RadioButton.module.css'

interface RadioButtonProps {
  label: string
  name: string
  value: string
  icon?: ReactNode
  checked?: boolean
  onChange: (value: string) => void
}

const RadioButton: FC<RadioButtonProps> = ({
  icon,
  label,
  name,
  value,
  checked,
  onChange
}) => {
  const handleOnChange = () => {
    onChange(value)
  }

  return (
    <label className={`${styles.radio} ${checked ? styles.active : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleOnChange}
      />
      {icon}
      <span>{label}</span>
    </label>
  )
}

export default RadioButton
