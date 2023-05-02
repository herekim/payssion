import { styled } from '@stitches/react'

interface ButtonContainerProps {
  onClickCancelButton: () => void
  onClickPayButton: () => void
  disabled: boolean
}

const ButtonContainer = ({ onClickCancelButton, onClickPayButton, disabled }: ButtonContainerProps) => {
  return (
    <StyledButtonContainer>
      <Button onClick={onClickCancelButton}>취소하기</Button>
      <Button backgroundColor="main" disabled={disabled} onClick={disabled ? undefined : onClickPayButton}>
        결제하기
      </Button>
    </StyledButtonContainer>
  )
}

export default ButtonContainer

const StyledButtonContainer = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  zIndex: 10,
})

const Button = styled('button', {
  width: '100%',
  padding: '0.7rem 0',
  borderRadius: '0.5rem',
  backgroundColor: '#e2e2e2',
  color: 'white',
  textAlign: 'center',
  variants: {
    disabled: {
      true: {
        opacity: 0.3,
      },
      false: {
        opacity: 1,
      },
    },
    color: {
      black: {
        color: '#000000',
      },
    },
    backgroundColor: {
      main: {
        backgroundColor: '$main',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
})
