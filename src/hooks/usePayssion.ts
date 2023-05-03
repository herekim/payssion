import { useContext } from 'react'

import { PayssionContext } from '@/contexts'

const usePayssion = () => {
  const { initiatePayment, closePayment, isSuceess, isOpen, processPayment, paymentAmount, isLoading } =
    useContext(PayssionContext)

  return {
    initiatePayment,
    closePayment,
    isSuceess,
    isOpen,
    processPayment,
    paymentAmount,
    isLoading,
  }
}
export default usePayssion
