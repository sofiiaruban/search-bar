export interface CryptoCurrency {
  id: number
  currencyName: string
  isFavorite: boolean
}

export const cryptoCurrencies: CryptoCurrency[] = [
  { id: 1, currencyName: 'WINGS', isFavorite: true },
  { id: 2, currencyName: 'STARL', isFavorite: false },
  { id: 3, currencyName: 'CVP', isFavorite: true },
  { id: 4, currencyName: 'DOT', isFavorite: false },
  { id: 5, currencyName: 'ONG', isFavorite: true },
  { id: 6, currencyName: 'MSOL', isFavorite: false },
  { id: 7, currencyName: 'JENNER', isFavorite: true },
  { id: 8, currencyName: 'LXT', isFavorite: false },
  { id: 9, currencyName: 'ORBR', isFavorite: true },
  { id: 10, currencyName: 'CMP', isFavorite: false }
  // { id: 11, currencyName: 'KP3R', isFavorite: true },
  // { id: 12, currencyName: 'BNBBULL', isFavorite: false },
  // { id: 13, currencyName: 'HPT', isFavorite: true },
  // { id: 14, currencyName: 'AERGO', isFavorite: false },
  // { id: 15, currencyName: 'MONA', isFavorite: true },
  // { id: 16, currencyName: 'CANDY', isFavorite: false },
  // { id: 17, currencyName: 'MAGE', isFavorite: true },
  // { id: 18, currencyName: 'PLY', isFavorite: false },
  // { id: 19, currencyName: 'MMF', isFavorite: true },
  // { id: 20, currencyName: 'JAPAN225IX', isFavorite: false },
  // { id: 21, currencyName: 'RSR', isFavorite: true },
  // { id: 22, currencyName: 'HARD', isFavorite: false },
  // { id: 23, currencyName: 'UOS', isFavorite: true },
  // { id: 24, currencyName: 'DAD', isFavorite: false },
  // { id: 25, currencyName: 'POA', isFavorite: true },
  // { id: 26, currencyName: 'EVX', isFavorite: false },
  // { id: 27, currencyName: 'NFT', isFavorite: true },
  // { id: 28, currencyName: 'B2M', isFavorite: false },
  // { id: 29, currencyName: 'ANTEX', isFavorite: true },
  // { id: 30, currencyName: '', isFavorite: false },
  // { id: 31, currencyName: 'RPX', isFavorite: true },
  // { id: 32, currencyName: 'MOTHER', isFavorite: false },
  // { id: 33, currencyName: 'GYEN', isFavorite: true },
  // { id: 34, currencyName: 'PAAL', isFavorite: false },
  // { id: 35, currencyName: 'RVN', isFavorite: true },
  // { id: 36, currencyName: 'ID', isFavorite: false },
  // { id: 37, currencyName: 'EURCV', isFavorite: true },
  // { id: 38, currencyName: 'CERE', isFavorite: false },
  // { id: 39, currencyName: 'MUSD', isFavorite: true },
  // { id: 40, currencyName: 'PYR', isFavorite: false },
  // { id: 41, currencyName: 'ZEROLEND', isFavorite: true },
  // { id: 42, currencyName: 'RDNT', isFavorite: false },
  // { id: 43, currencyName: 'ANY', isFavorite: true },
  // { id: 44, currencyName: 'MICE', isFavorite: false },
  // { id: 45, currencyName: 'GO', isFavorite: true },
  // { id: 46, currencyName: 'DICE', isFavorite: false },
  // { id: 47, currencyName: 'TAVA', isFavorite: true },
  // { id: 48, currencyName: 'VET', isFavorite: false },
  // { id: 49, currencyName: 'PROM', isFavorite: true },
  // { id: 50, currencyName: 'WOZX', isFavorite: false },
  // { id: 51, currencyName: 'TCT', isFavorite: true },
  // { id: 52, currencyName: 'IDT', isFavorite: false },
  // { id: 53, currencyName: 'LTCDOWN', isFavorite: true },
  // { id: 54, currencyName: 'XAVA', isFavorite: false },
  // { id: 55, currencyName: 'ORN', isFavorite: true },
  // { id: 56, currencyName: 'STRM', isFavorite: false },
  // { id: 57, currencyName: '1000BTT', isFavorite: true },
  // { id: 58, currencyName: 'SNX', isFavorite: false },
  // { id: 59, currencyName: 'VRA', isFavorite: true },
  // { id: 60, currencyName: 'XTP', isFavorite: false },
  // { id: 61, currencyName: 'SOL', isFavorite: true },
  // { id: 62, currencyName: 'CGPT', isFavorite: false },
  // { id: 63, currencyName: 'HOTCROSS', isFavorite: true },
  // { id: 64, currencyName: 'POOLX', isFavorite: false },
  // { id: 65, currencyName: 'BRETT', isFavorite: true },
  // { id: 66, currencyName: 'CKB', isFavorite: false },
  // { id: 67, currencyName: 'BLAST', isFavorite: true },
  // { id: 68, currencyName: 'GST', isFavorite: false },
  // { id: 69, currencyName: 'MYRO', isFavorite: true },
  // { id: 70, currencyName: 'ARN', isFavorite: false },
  // { id: 71, currencyName: 'CHAT', isFavorite: true },
  // { id: 72, currencyName: 'XPR', isFavorite: false },
  // { id: 73, currencyName: 'MXT', isFavorite: true },
  // { id: 74, currencyName: 'SXPDOWN', isFavorite: false },
  // { id: 75, currencyName: 'USTC', isFavorite: true },
  // { id: 76, currencyName: 'UMEE', isFavorite: false },
  // { id: 77, currencyName: 'MONFTER', isFavorite: true },
  // { id: 78, currencyName: 'LEO', isFavorite: false },
  // { id: 79, currencyName: 'CLO', isFavorite: true },
  // { id: 80, currencyName: 'XCH', isFavorite: false },
  // { id: 81, currencyName: 'STG', isFavorite: true },
  // { id: 82, currencyName: 'CYBER', isFavorite: false },
  // { id: 83, currencyName: 'LMWR', isFavorite: true },
  // { id: 84, currencyName: 'PNT', isFavorite: false },
  // { id: 85, currencyName: 'TREMP', isFavorite: true },
  // { id: 86, currencyName: 'TRVL', isFavorite: false },
  // { id: 87, currencyName: 'UUU', isFavorite: true },
  // { id: 88, currencyName: 'ANKR', isFavorite: false },
  // { id: 89, currencyName: 'BT1', isFavorite: true },
  // { id: 90, currencyName: 'SHILL', isFavorite: false },
  // { id: 91, currencyName: 'FRONT', isFavorite: true },
  // { id: 92, currencyName: 'AEVO', isFavorite: false },
  // { id: 93, currencyName: 'PONKE', isFavorite: true },
  // { id: 94, currencyName: 'INTR', isFavorite: false },
  // { id: 95, currencyName: 'MBOX', isFavorite: true },
  // { id: 96, currencyName: '10000000AIDOGE', isFavorite: false },
  // { id: 97, currencyName: 'KRRX', isFavorite: true },
  // { id: 98, currencyName: 'PVT', isFavorite: false },
  // { id: 99, currencyName: 'WinToken', isFavorite: true },
  // { id: 100, currencyName: 'VITE', isFavorite: false }
]
