import { FC, useRef } from 'react'
import Button from '../components/Button/Button'
import SearchIcon from '../assets/icons/SearchIcon'
import Dropdown from '../components/Dropdown/Dropdown'
import SearchBar from '../components/SearchBar/SearchBar'
import CloseIcon from '../assets/icons/CloseIcon'
import CurrencyList from '../components/CurrencyList/CurrencyList'
import { cryptoCurrencies } from '../lib/cryptoCurrencyData'
import RadioGroup from '../components/RadioGroup/RadioGroup'
import styles from './Home.module.css'
import useDropdown from '../hooks/useDropdown'

const Home: FC = () => {
  const { toggleDropdown, closeDropdown, isDropdownOpen } = useDropdown()

  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <header className={styles.header}>
      <Button
        ref={buttonRef}
        text="Search"
        icon={<SearchIcon />}
        onClick={toggleDropdown}
      />

      <Dropdown
        isOpen={isDropdownOpen}
        targetRef={buttonRef}
        onClick={closeDropdown}
      >
        <SearchBar
          placeholder="Search..."
          icon={<SearchIcon />}
          children={<CloseIcon />}
        />
        <RadioGroup />
        <CurrencyList currencyList={cryptoCurrencies} />
      </Dropdown>
    </header>
  )
}

export default Home
