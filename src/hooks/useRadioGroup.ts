import { useState } from 'react'

const useRadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState('all')

  const handleRadioChange = (value: string) => {
    setSelectedValue(value)
  }

  return {
    selectedValue,
    handleRadioChange
  }
}

export default useRadioGroup
