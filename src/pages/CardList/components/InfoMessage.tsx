import { styled } from '@stitches/react'

const InfoMessage = () => {
  return (
    <StyledInfoMessage>
      결제정보 변경은&nbsp;
      <Strong>설정&gt;계좌정보</Strong>에서 하실 수 있습니다.
    </StyledInfoMessage>
  )
}

export default InfoMessage

const StyledInfoMessage = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  fontSize: '0.7rem',
  marginBottom: '2rem',
})

const Strong = styled('span', {
  fontWeight: 'bold',
})
