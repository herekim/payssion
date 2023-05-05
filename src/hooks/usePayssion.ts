import { useContext } from 'react'

import { PayssionContext } from '@/contexts'

const usePayssion = () => {
  const { initiatePayment, closePayment, isOpen } = useContext(PayssionContext)

  return {
    initiatePayment,
    closePayment,
    isOpen,
    // isSuceess,
    // processPayment,
    // paymentAmount,
    // isLoading,
  }
}
export default usePayssion
