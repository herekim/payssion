import { useContext } from 'react'

import { PayssionContext } from '@/contexts'

const usePayssion = () => {
  const { initiatePayment, closePayment, isSuceess, isOpen, processPayment, paymentAmount, changePaymentAmount } =
    useContext(PayssionContext)

  return { initiatePayment, closePayment, isSuceess, isOpen, processPayment, paymentAmount, changePaymentAmount }
}
export default usePayssion
