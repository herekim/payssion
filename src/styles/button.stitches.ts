import { styled } from '@/styles/stitches.config'

export const ButtonBox = styled('div', {
  width: '100%',
  textAlign: 'right',
})

export const ButtonText = styled('span', {})

export const ToastButton = styled('button', {
  boxShadow:
    'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
  borderRadius: '4px',
  padding: '15px',
  backgroundColor: 'white',
})

export const ToastTitle = styled('h4', {
  fontSize: '0.8rem',
  fontWeight: '600',
})

export const ToastDescription = styled('p', {
  fontSize: '0.7rem',
  fontWeight: '400',
})

export const DigitButton = styled('button', {
  fontSize: '1rem',
  textAlign: 'center',
  borderRadius: '4px',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  padding: '10px 5px',
})
