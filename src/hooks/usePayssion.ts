import { useContext } from 'react'

import { PayssionContext } from '@/contexts'

const usePayssion = () => {
  const { initiatePayment, closePayment, isSuceess, isOpen } = useContext(PayssionContext)

  return { initiatePayment, closePayment, isSuceess, isOpen }
}
export default usePayssion
