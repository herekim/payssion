import { styled } from '@/styles/stitches.config'

export const PayssionRoot = styled('div', {
  backgroundColor: '#fff',
  width: '375px',
  minWidth: '375px',
  height: '700px',
  // position: 'relative',
  borderRadius: '15px',
  overflowY: 'scroll',

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  // backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

export const PayssionApp = styled('div', {
  height: '100%',
  padding: '24px',
})

export const PageTitle = styled('h1', {
  fontWeight: '500',
  fontSize: '20px',
  display: 'flex',
  gap: '0.7rem',
  alignItems: 'center',
})
