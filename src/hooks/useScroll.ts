import { useEffect, useRef, useState, useCallback } from 'react'
import { CryptoCurrency } from '../lib/cryptoCurrencyData'

interface UseCurrencyChunksProps {
  currencyList: CryptoCurrency[]
  selectedValue: string
}

const CHUNK_SIZE = 10

const useScroll = ({ currencyList, selectedValue }: UseCurrencyChunksProps) => {
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0)
  const [displayedCurrencies, setDisplayedCurrencies] = useState<CryptoCurrency[]>([])
  const totalChunks = Math.ceil(currencyList.length / CHUNK_SIZE)
  const ulRef = useRef<HTMLUListElement | null>(null)

  const loadNextChunk = useCallback(() => {
    const start = currentChunkIndex * CHUNK_SIZE
    const end = start + CHUNK_SIZE
    const nextChunk = currencyList.slice(start, end)
    setDisplayedCurrencies((prev) => [...prev, ...nextChunk])
  }, [currentChunkIndex, currencyList])

  const handleScroll = () => {
    if (ulRef.current) {
      const scrollTop = ulRef.current.scrollTop
      if (scrollTop >= 15 && currentChunkIndex <= totalChunks) {
        setCurrentChunkIndex((prevIndex) => prevIndex + 1)
      }
    }
  }

  useEffect(() => {
    setCurrentChunkIndex(0)
    setDisplayedCurrencies([])
  }, [selectedValue])

  useEffect(() => {
    loadNextChunk()
  }, [currentChunkIndex, currencyList, loadNextChunk])

  return {
    ulRef,
    displayedCurrencies,
    handleScroll,
  }
}

export default useScroll
