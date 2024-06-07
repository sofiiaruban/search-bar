import { FC } from 'react'

interface StarFullIconProps {
  filledColor?: string
}

const StarFullIcon: FC<StarFullIconProps> = ({ filledColor = '#ABA7A7' }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2786 7.50286L10 0L7.72143 7.50286H0L6.24714 12.36L3.92857 20L10 15.2786L16.0714 20L13.7529 12.36L20 7.50286H12.2786Z"
        fill={filledColor}
      />
    </svg>
  )
}

export default StarFullIcon
