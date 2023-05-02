import { styled } from '@/styles/stitches.config'

export const PayssionRoot = styled('div', {
  backgroundColor: '#fff',
  width: '30%',
  minWidth: '375px',
  height: '90%',
  maxHeight: '700px',
  borderRadius: '15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
})

export const PayssionApp = styled('div', {
  padding: '1.5rem',
  overflowY: 'scroll',
  position: 'relative',

  '&::-webkit-scrollbar': {
    width: 0, // Chrome, Safari, Edge
  },

  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE
})

export const PageTitle = styled('h1', {
  fontWeight: '500',
  fontSize: '20px',
  display: 'flex',
  gap: '0.7rem',
  alignItems: 'center',
})
