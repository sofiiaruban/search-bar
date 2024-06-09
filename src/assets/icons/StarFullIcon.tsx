import { FC } from 'react'

interface StarFullIconProps {
  filledColor?: string
}

const StarFullIcon: FC<StarFullIconProps> = ({ filledColor = '#ABA7A7' }) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_616_9)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.98109 4.87686L6.5 0L5.01893 4.87686H0L4.06064 8.034L2.55357 13L6.5 9.93109L10.4464 13L8.93938 8.034L13 4.87686H7.98109Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_616_9">
          <rect width="13" height="13" fill={filledColor} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default StarFullIcon
