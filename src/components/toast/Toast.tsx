import * as RadixToast from '@radix-ui/react-toast'
import { Dispatch, SetStateAction } from 'react'

import { ToastButton, ToastDescription, ToastTitle } from '@/styles/button.stitches'
import { styled } from '@/styles/stitches.config'
export interface ToastProps {
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  title: string
  description?: string
}

const Toast = ({ open, onOpenChange, title, description }: ToastProps) => {
  return (
    <>
      <RadixToast.Provider swipeDirection="down" duration={2000}>
        <RadixToastRoot open={open} onOpenChange={onOpenChange}>
          <RadixToastTitmeContainer>
            <RadixToastTitle>{title}</RadixToastTitle>
            {description && <RadixToastDescription>{description}</RadixToastDescription>}
          </RadixToastTitmeContainer>
        </RadixToastRoot>
        <RadixToast.Viewport />
      </RadixToast.Provider>
    </>
  )
}

const RadixToastRoot = styled(RadixToast.Root, {
  ...ToastButton,
  positionTop: {
    top: '25px',
    left: '20px',
    right: '20px',
  },
})

const RadixToastTitmeContainer = styled('div', {
  flexColumnCenter: 'center',
  gap: '0.5rem',
})

const RadixToastTitle = styled(RadixToast.Title, {
  ...ToastTitle,
})

const RadixToastDescription = styled(RadixToast.Description, {
  ...ToastDescription,
})

export default Toast
