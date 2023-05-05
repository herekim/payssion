import { useRef, ComponentType } from 'react'

import { useModal, useOutsideClick } from '@/hooks'

import VirtualKeyboard from '../VirtualKeyboard'

const useVirtualKeyboard = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: VirtualKeyboard as ComponentType })
  })

  return { modalRef }
}

export default useVirtualKeyboard
