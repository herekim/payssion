import { useState, ReactNode } from 'react'

import { PayssionContext, Page } from '@/contexts'

interface ProviderProps {
  children: ReactNode
}

const PayssionProvider = ({ children }: ProviderProps) => {
  const [currentPage, setCurrentPage] = useState<Page>('CardList')
  const [pageHistory, setPageHistory] = useState<Page[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSuceess, setIsSuccess] = useState<boolean>(false)
  const [paymentAmount, setPaymentAmount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const changePage = (type: Page) => {
    setPageHistory([...pageHistory, currentPage])
    setCurrentPage(type)
  }

  const goToPrevPage = () => {
    const newHistory = [...pageHistory]
    const prevPage = newHistory.pop() || currentPage
    setCurrentPage(prevPage)
  }

  const initiatePayment = () => {
    setIsOpen(true)
  }

  const closePayment = () => {
    setIsOpen(false)
  }

  const processPayment = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsSuccess(true)
      setIsLoading(false)
      setIsOpen(false)
    }, 1500)
  }

  const changePaymentAmount = (amount: number) => {
    setPaymentAmount(amount)
  }

  const context = {
    initiatePayment,
    currentPage,
    changePage,
    closePayment,
    isOpen,
    isSuceess,
    processPayment,
    goToPrevPage,
    paymentAmount,
    changePaymentAmount,
    isLoading,
  }
  return <PayssionContext.Provider value={context}>{children}</PayssionContext.Provider>
}

export default PayssionProvider
