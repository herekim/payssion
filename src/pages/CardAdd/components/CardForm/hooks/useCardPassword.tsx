import { ChangeEvent, ComponentType } from 'react'

import { VirtualKeyboard } from '@/components/modal'
import { useModal } from '@/hooks'
import { CardPasswordProps, CardPasswordOrder } from '@/pages/CardAdd/components/CardForm/types'
import { useCardInfo } from '@/pages/hooks'

const useCardPassword = ({ passwordRef, onFocusChange }: CardPasswordProps) => {
  const { handlePassword: handleChange } = useCardInfo()
  const { openModal, closeModal } = useModal()

  const handleSecurityCode = (order: CardPasswordOrder, value: string) => {
    const currentRef = passwordRef[order].current

    if (!currentRef) return

    if (value === 'Delete') {
      currentRef.value = currentRef.value.slice(0, -1)
      return
    }
    if (currentRef.value.length >= 1) return
    currentRef.value += value

    if (currentRef.value.length >= 1 && onFocusChange) {
      onFocusChange('second')
      openVirtualKeyboard('second')
    }

    if (currentRef.value.length >= 1 && order === 'second') {
      closeModal({ element: VirtualKeyboard as ComponentType })
    }

    handleChange({ order, value: currentRef.value })
  }

  const openVirtualKeyboard = (order: CardPasswordOrder) => {
    openModal({
      element: <VirtualKeyboard onKeyPress={(value) => handleSecurityCode(order, value)} />,
    })
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target

    switch (name) {
      case 'first':
        handleChange({ value, order: name })
        break
      case 'second':
        handleChange({ value, order: name })
        break
      default:
        throw new Error('useCardPassword: Invalid name')
    }
  }
  return { handleInputChange, openVirtualKeyboard }
}

export default useCardPassword
