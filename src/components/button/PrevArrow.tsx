import { ButtonHTMLAttributes } from 'react'

import { ReactComponent as PrevArrowIcon } from '@/assets/prev-arrow.svg'
import { styled } from '@/styles/stitches.config'

type PrevArrowProps = ButtonHTMLAttributes<HTMLButtonElement>

const PrevArrow = ({ onClick }: PrevArrowProps) => {
  return (
    <StyledPrevArrow onClick={onClick}>
      <PrevArrowIcon width={20} height={20} />
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
