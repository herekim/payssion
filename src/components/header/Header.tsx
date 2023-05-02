import { styled } from '@/styles/stitches.config'

const Header = () => {
  return (
    <StyledHeader>
      <img src="logo.svg" width={25} height={25} alt="Payssion Logo" />
      <Title>
        Payssion <Stick>|</Stick> 결제
      </Title>
    </StyledHeader>
  )
}

const StyledHeader = styled('header', {
  position: 'sticky',
  top: 0,
  left: 0,
  height: '2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '0.7rem',
  padding: '1rem',
  fontWeight: 'bold',
  boxShadow: 'rgba(149, 157, 165, 0.1) 0px 8px 24px',
  borderRadius: '15px',
  zIndex: 10,
})

const Stick = styled('span', {
  color: '$main',
  fontWeight: 'bold',
})

const Title = styled('p', {
  fontWeight: 'bold',
})
export default Header
