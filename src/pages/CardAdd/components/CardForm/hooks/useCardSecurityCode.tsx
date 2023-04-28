import { useContext, ChangeEvent, ComponentType } from 'react'

import { VirtualKeyboard } from '@/components/modal'
import { ModalStateContext } from '@/contexts'
import { useModal } from '@/hooks'
import { CardSecurityCodeProps } from '@/pages/CardAdd/components/CardForm/types'
import { useCardInfo } from '@/pages/hooks'

const useCardSecurityCode = ({ securityCodeRef, nextRef }: CardSecurityCodeProps) => {
  const { handleSecurityCode: handleChange } = useCardInfo()
  const { openModal, closeModal } = useModal()
  const openedModal = useContext(ModalStateContext)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange({ value: event.target.value })
  }

  const handleSecurityCode = (value: string) => {
    const currentRef = securityCodeRef.current

    if (!currentRef) return

    if (value === 'Delete') {
      currentRef.value = currentRef.value.slice(0, -1)
      return
    }
    if (currentRef.value.length >= 3) return
    currentRef.value += value

    if (currentRef.value.length >= 3) {
      closeModal({ element: VirtualKeyboard as ComponentType })
      nextRef?.current?.focus()
    }

    handleChange({ value: securityCodeRef.current.value })
  }

  const openVirtualKeyboard = () => {
    if (openedModal) return
    openModal({
      element: <VirtualKeyboard onKeyPress={(value) => handleSecurityCode(value)} />,
    })
  }
  return { handleInputChange, openVirtualKeyboard }
}

export default useCardSecurityCode
