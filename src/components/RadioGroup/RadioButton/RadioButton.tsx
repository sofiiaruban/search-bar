import { FC } from 'react'

interface RadioButtonProps {
  icon: React.ReactNode
  title: string
  name: string
  value: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: FC<RadioButtonProps> = ({
  icon,
  title,
  name,
  value,
  checked,
  onChange
}) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{icon}</span>
      <span>{title}</span>
    </label>
  )
}

export default RadioButton
