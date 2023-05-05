import { ButtonHTMLAttributes } from 'react'

import { ReactComponent as NextArrowIcon } from '@/assets/next-arrow.svg'
import { styled } from '@/styles/stitches.config'

type NextArrowProps = ButtonHTMLAttributes<HTMLButtonElement>

const NextArrow = ({ onClick }: NextArrowProps) => {
  return (
    <StyledNextArrow onClick={onClick}>
      <NextArrowIcon width={20} height={20} />
    </StyledNextArrow>
  )
}

export default NextArrow

const StyledNextArrow = styled('button', {
  position: 'absolute',
  top: '45%',
  right: '-1.5625rem',
  transform: 'translateY(-50%)',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1,
})
