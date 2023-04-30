import { styled } from '@/styles/stitches.config'

export const CardBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0.625rem 0',
  '&:hover': {
    transform: 'scale(1.01)',
    cursor: 'pointer',
  },
})

export const EmptyCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 15px',
  width: '208px',
  height: '130px',
  fontSize: '30px',
  color: '#575757',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  borderRadius: '5px',
  userSelect: 'none',
})

export const SmallCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 15px',
  width: '208px',
  height: '130px',
  fontSize: '30px',
  color: '#575757',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
})

export const DeleteButtonBox = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
})

export const DeleteButton = styled('button', {
  padding: '0 10px 0 0',
})

export const SmallCardChip = styled('div', {
  width: '40px',
  height: '26px',
  left: '95px',
  top: '122px',
  background: '#cbba64',
  borderRadius: '4px',
})

export const BigCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 15px',
  width: '290px',
  height: '180px',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
})

export const BigCardChip = styled('div', {
  width: '55.04px',
  height: '35.77px',
  background: '#cbba64',
  borderRadius: '4px',
  fontSize: '24px',
})

export const CardTop = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CardMiddle = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

export const CardNumber = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '16px',
})

export const CardBottom = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const CardBottomNumber = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const CardBottomInfo = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CardText = styled('span', {
  fontSize: '14px',
  verticalAlign: 'middle',
  fontWeight: 400,
})

export const CardTextBig = styled('span', {
  fontSize: '18px',
  fontWeight: 400,
})

export const CardColor = styled('div', {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
})

export const CardNickname = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})
