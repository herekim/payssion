import { styled } from '@stitches/react'

import { PageTitle as InfoTitle } from '@/styles/layout.stitches'

interface AgreementProps {
  checked: boolean
  onClick: () => void
}

const Agreement = ({ checked, onClick }: AgreementProps) => {
  return (
    <StyledAgreement>
      <StyledInfoTitle>약관 이용 및 동의</StyledInfoTitle>
      <CheckBoxContainer>
        <TransactionAgreement>
          <p>거래제공 정보 동의: NEXTSTEP</p>
          <Detail>상세보기</Detail>
        </TransactionAgreement>
        <Label>
          <p>주문 내용을 확인하였으며, 정보 제공 등에 확인합니다.</p>
          <input type="checkbox" id="check1" checked={checked} onChange={onClick} />
          <label htmlFor="check1"></label>
        </Label>
      </CheckBoxContainer>
    </StyledAgreement>
  )
}

export default Agreement

const StyledAgreement = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginBottom: '4rem',
})

const StyledInfoTitle = styled(InfoTitle, {
  borderBottom: '1px solid #e2e2e2',
  paddingBottom: '0.5rem',
})

const CheckBoxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '0.5rem',
  padding: '1rem 0',
  fontSize: '0.8rem',
})

const TransactionAgreement = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

const Detail = styled('button', {
  fontSize: '0.7rem',
  textDecoration: 'underline',
})

const Label = styled('p', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  '& input[type="checkbox"]': {
    display: 'none',
  },

  '& input[type="checkbox"] + label': {
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    border: '1px solid #707070',
    borderRadius: '0.2rem',
    position: 'relative',
  },

  '& input:checked + label::after': {
    content: '"✓"',
    fontSize: '1rem',
    width: '1rem',
    height: '1rem',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
  },
})
