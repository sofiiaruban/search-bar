import { FC, ReactNode } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  placeholder: string
  icon: ReactNode
  children: ReactNode
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, icon, children }) => {
  return (
    <div className={styles.searchBar}>
      {icon}
      <input type="text" placeholder={placeholder}></input>
      {children}
    </div>
  )
}

export default SearchBar
