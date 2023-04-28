import { useState, ReactNode } from 'react'

import { PayssionContext, Page } from '@/contexts'

interface ProviderProps {
  children: ReactNode
}

export const PaymentAppContextProvider = ({ children }: ProviderProps) => {
  const [currentPage, setCurrentPage] = useState<Page>('CardAdd')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSuceess, setIsSuccess] = useState<boolean>(false)

  const changePage = (type: Page) => {
    setCurrentPage(type)
  }

  const initiatePayment = () => {
    setIsOpen(true)
  }

  const closePayment = () => {}

  const processPayment = () => {
    setTimeout(() => {
      setIsSuccess(true)
    }, 1000)
  }

  const context = {
    initiatePayment,
    currentPage,
    changePage,
    closePayment,
    isOpen,
    isSuceess,
    processPayment,
  }
  return <PayssionContext.Provider value={context}>{children}</PayssionContext.Provider>
}
