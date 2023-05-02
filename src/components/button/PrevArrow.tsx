import { ButtonHTMLAttributes } from 'react'

import { styled } from '@/styles/stitches.config'

type PrevArrowProps = ButtonHTMLAttributes<HTMLButtonElement>

const PrevArrow = ({ onClick }: PrevArrowProps) => {
  return (
    <StyledPrevArrow onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 320 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </StyledPrevArrow>
  )
}

export default PrevArrow

const StyledPrevArrow = styled('button', {
  position: 'absolute',
  top: '45%',
  left: '-1.5625rem',
  transform: 'translateY(-50%)',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1,
})
