import { ButtonHTMLAttributes } from 'react'

import { styled } from '@/styles/stitches.config'

type NextArrowProps = ButtonHTMLAttributes<HTMLButtonElement>

const NextArrow = ({ onClick }: NextArrowProps) => {
  return (
    <StyledNextArrow onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 320 512">
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
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
