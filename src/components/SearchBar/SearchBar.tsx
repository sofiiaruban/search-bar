import { FC, ReactNode } from 'react'

interface SearchBarProps {
  placeholder: string
  icon: ReactNode
  children: ReactNode
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, icon, children }) => {
  return (
    <div>
      {icon}
      <input type="text" placeholder={placeholder}></input>
      {children}
    </div>
  )
}

export default SearchBar
