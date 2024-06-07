import { ChangeEvent, FC, ReactNode } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  placeholder: string
  icon: ReactNode
  children: ReactNode
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  icon,
  children,
  value,
  onChange
}) => {
  return (
    <div className={styles.searchBar}>
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  )
}

export default SearchBar
