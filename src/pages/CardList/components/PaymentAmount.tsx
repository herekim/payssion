import { styled } from '@stitches/react'

import { PageTitle as InfoTitle } from '@/styles/layout.stitches'

interface PaymentAmountProps {
  amount: number
}

const PaymentAmount = ({ amount }: PaymentAmountProps) => {
  return (
    <StyledPaymentAmount>
      <StyledInfoTitle>결제금액</StyledInfoTitle>
      <TotalPayment>
        <UnderLineText>총 결제금액</UnderLineText>
        <UnderLineText>{`${amount.toLocaleString()}원`}</UnderLineText>
      </TotalPayment>
    </StyledPaymentAmount>
  )
}

export default PaymentAmount

const StyledPaymentAmount = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '2rem',
})

const StyledInfoTitle = styled(InfoTitle, {
  borderBottom: '1px solid #e2e2e2',
  paddingBottom: '0.5rem',
})

const TotalPayment = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '1rem 0',
})

const UnderLineText = styled('p', {
  position: 'relative',

  '&::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    left: '-0.2rem',
    right: '-0.2rem',
    bottom: '0.1rem',
    height: '0.5rem',
    backgroundColor: '$main',
    opacity: 0.4,
    zIndex: -1,
    borderRadius: '0.2rem',
  },
})
