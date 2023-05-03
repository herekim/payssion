import { createContext } from 'react'

export type Page = 'CardAdd' | 'CardCompleted' | 'CardList' | 'CardUpdate'

type PayssionContext = {
  initiatePayment: (amount: number) => void
  closePayment: () => void
  isOpen: boolean
  isSuceess: boolean
  processPayment: () => void
  currentPage: Page
  changePage: (page: Page) => void
  goToPrevPage: () => void
  paymentAmount: number
  isLoading: boolean
}

export const PayssionContext = createContext<PayssionContext>({
  initiatePayment: () => {},
  closePayment: () => {},
  isOpen: false,
  isSuceess: false,
  processPayment: () => {},
  currentPage: 'CardList',
  changePage: () => {},
  goToPrevPage: () => {},
  paymentAmount: 0,
  isLoading: false,
})
