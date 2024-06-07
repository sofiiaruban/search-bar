import { FC, useRef, useState } from 'react'
import Button from '../components/Button/Button'
import SearchIcon from '../assets/icons/SearchIcon'
import Dropdown from '../components/Dropdown/Dropdown'
import SearchBar from '../components/SearchBar/SearchBar'
import CloseIcon from '../assets/icons/CloseIcon'

const Home: FC = () => {
  const [isDropdownOpen] = useState(false) //, setDropdownOpen

  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <header>
      <Button
        ref={buttonRef}
        onClick={() => {}}
        text="Search"
        icon={<SearchIcon />}
      />
      <Dropdown isOpen={isDropdownOpen} targetRef={buttonRef}>
        <SearchBar
          placeholder="Search"
          icon={<SearchIcon />}
          children={<CloseIcon />}
        />
        ghjjk
      </Dropdown>
    </header>
  )
}

export default Home
