import { styled } from '@/styles/stitches.config'

// export const Modal = styled('div', {
//   width: '375px',
//   height: '220px',
//   borderRadius: '5px 5px 15px 15px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexWrap: 'wrap',
//   background: '#fff',
//   zIndex: 10,
// })

export const DarkOverlay = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  animation: 'toggle 1s',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
})

// export const ModalDimmed = styled('div', {
//   width: '100%',
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-end',
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   background: 'rgba(0, 0, 0, 0.5)',
//   borderRadius: '15px',
//   zIndex: 5,
// })

// export const ModalItemContainer = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// })

// export const ModalItemDot = styled('div', {
//   margin: '0.5rem 1rem',
//   borderRadius: '50%',
//   width: '2.8rem',
//   height: '2.8rem',
//   backgroundColor: '#94dacd',
// })

// export const ModalItemName = styled('div', {
//   fontSize: '12px',
//   letterSpacing: '-0.085rem',
// })

export const BottomSheetContainer = styled('div', {
  position: 'absolute',
  left: '50%',
  bottom: 0,
  margin: 'auto',
  display: 'flex',
  transform: 'translateX(-50%)',
  justifyContent: 'center',
  alignItems: 'flex-end',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  backgroundColor: '#fff',
  padding: '2rem 0',
})
