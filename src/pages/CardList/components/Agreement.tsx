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
          <span>주문 내용을 확인하였으며, 정보 제공 등에 확인합니다.</span>
          <CustomCheckbox type="checkbox" checked={checked} onChange={onClick} />
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

const CustomCheckbox = styled('input', {
  appearance: 'none',
  width: '1rem',
  height: '1rem',
  borderRadius: '0.25rem',
  border: '1px solid #e2e2e2',
  cursor: 'pointer',
  transition: 'border-color 0.15s ease',
  position: 'relative',

  '&:checked': {
    backgroundColor: 'white',
  },

  '&:checked::after': {
    content: '""',
    display: 'block',
    width: '0.25rem',
    height: '0.5rem',
    border: 'solid $main',
    borderWidth: '0 2px 2px 0',
    position: 'absolute',
    top: 'calc(50% - 0.125rem)',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(45deg)',
  },
})

const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})
