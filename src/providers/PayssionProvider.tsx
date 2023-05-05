import { useState, ReactNode } from 'react'

import { PayssionContext, Page, InitiatePaymentParams } from '@/contexts'
import { PaymentError } from '@/error'

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
  const [successAction, setSuccessAction] = useState<() => void>(() => {})

  const changePage = (type: Page) => {
    setPageHistory([...pageHistory, currentPage])
    setCurrentPage(type)
  }

  const goToPrevPage = () => {
    const newHistory = [...pageHistory]
    const prevPage = newHistory.pop() || currentPage
    setCurrentPage(prevPage)
  }

  const initiatePayment = async ({ amount, onSuccessAction }: InitiatePaymentParams) => {
    if (!amount && amount !== 0) {
      throw new PaymentError('Error: 결제 금액이 없습니다.', 1051)
    }
    if (onSuccessAction) {
      setSuccessAction(onSuccessAction)
    }
    setPaymentAmount(amount)
    setIsOpen(true)
  }

  const closePayment = () => {
    setIsOpen(false)
  }

  const processPayment = () => {
    setIsLoading(true)

    setTimeout(async () => {
      setIsSuccess(true)
      setIsLoading(false)
      setIsOpen(false)
      if (typeof successAction === 'function') {
        await successAction()
      }
    }, 1500)
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
    isLoading,
  }
  return <PayssionContext.Provider value={context}>{children}</PayssionContext.Provider>
}

export default PayssionProvider
