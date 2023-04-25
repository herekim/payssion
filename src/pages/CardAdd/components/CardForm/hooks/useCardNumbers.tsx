import { useContext, ChangeEvent, ComponentType } from 'react'

import { CardTypeSelectionModal, VirtualKeyboard } from '@/components/modal'
import { ModalStateContext } from '@/contexts/modal'
import { useModal } from '@/hooks'
import { CardNumbersProps, CardNumbersOrder } from '@/pages/CardAdd/components/CardForm/types'
import { useCardInfo } from '@/pages/hooks'

const useCardNumbers = ({ numbersRef, nextRef, onFocusChange }: CardNumbersProps) => {
  const { handleNumber: handleChange } = useCardInfo()
  const { openModal, closeModal } = useModal()
  const openedModal = useContext(ModalStateContext)

  // Todo: 리팩토링 필요. 함수 분리
  const handleNumber = (order: CardNumbersOrder, value: string) => {
    const currentRef = numbersRef[order].current

    if (!currentRef) return

    if (currentRef) {
      if (value === 'Delete') {
        currentRef.value = currentRef.value.slice(0, -1)
        return
      }
      if (currentRef.value.length >= 4) {
        return
      }
      currentRef.value += value
    }

    if (currentRef.value.length >= 4 && onFocusChange) {
      onFocusChange('fourth')
      openVirtualKeyboard('fourth')
    }

    if (currentRef.value.length >= 4 && order === 'fourth') {
      closeModal({ element: VirtualKeyboard as ComponentType })
      nextRef?.current?.focus()
    }

    handleChange({ order, value: currentRef.value })
  }

  const openVirtualKeyboard = (order: CardNumbersOrder) => {
    if (openedModal) return
    openModal({
      element: <VirtualKeyboard onKeyPress={(value) => handleNumber(order, value)} />,
    })
  }

  const onAfterModalClose = () => {
    if (!onFocusChange) return
    onFocusChange('third')
    openModal({
      element: <VirtualKeyboard onKeyPress={(value) => handleNumber('third', value)} />,
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
        if (value.length === 4) {
          openModal({ element: <CardTypeSelectionModal onAfterModalClose={onAfterModalClose} /> })
        }
        break
      case 'third':
        handleChange({ value, order: name })
        break
      case 'fourth':
        handleChange({ value, order: name })
        break
      default:
        throw new Error('useCardNumbers: Invalid name')
    }
  }

  return {
    handleInputChange,
    openVirtualKeyboard,
  }
}

export default useCardNumbers
