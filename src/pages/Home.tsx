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
import ButtonIcon from '../components/ButtonIcon/ButtonIcon'
import useSearchBar from '../hooks/useSearchBar'

const Home: FC = () => {
  const { toggleDropdown, closeDropdown, isDropdownOpen } = useDropdown()
  const { searchValue, handleSearchChange, clearSearch } = useSearchBar()

  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <header className={styles.header}>
      <Button
        ref={buttonRef}
        text="Search"
        icon={<SearchIcon />}
        onClick={toggleDropdown}
        isButtonActive={isDropdownOpen}
      />
      <Dropdown
        isOpen={isDropdownOpen}
        targetRef={buttonRef}
        onClick={closeDropdown}
      >
        <SearchBar
          placeholder="Search..."
          icon={<SearchIcon />}
          value={searchValue}
          onChange={handleSearchChange}
        >
          <ButtonIcon onClick={clearSearch} isVisible={searchValue.length > 0}>
            <CloseIcon />
          </ButtonIcon>
        </SearchBar>
        <RadioGroup />
        <CurrencyList currencyList={cryptoCurrencies} />
      </Dropdown>
    </header>
  )
}

export default Home
