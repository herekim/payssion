import { useContext } from 'react'

import { PayssionContext } from '@/contexts'

const usePayssion = () => {
  const {
    initiatePayment,
    closePayment,
    isSuceess,
    isOpen,
    processPayment,
    paymentAmount,
    changePaymentAmount,
    isLoading,
  } = useContext(PayssionContext)

  return {
    initiatePayment,
    closePayment,
    isSuceess,
    isOpen,
    processPayment,
    paymentAmount,
    changePaymentAmount,
    isLoading,
  }
}
export default usePayssion
