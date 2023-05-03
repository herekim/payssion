import { styled, keyframes } from '@stitches/react'

interface CircleLoaderProps {
  size?: 'small' | 'medium' | 'large'
}

const rotateAnimation = keyframes({
  '0%, 100%': { animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)' },
  '0%': { transform: 'rotateY(0deg)' },
  '50%': {
    transform: 'rotateY(1800deg)',
    animationTimingFunction: 'cubic-bezier(0, 0.5, 0.5, 1)',
  },
  '100%': { transform: 'rotateY(3600deg)' },
})

function CircleLoader({ size = 'medium' }: CircleLoaderProps) {
  return (
    <LdsCircle>
      <Circle size={size} />
    </LdsCircle>
  )
}

export default CircleLoader

const LdsCircle = styled('div', {
  display: 'inline-block',
  transform: 'translateZ(1px)',
})

const Circle = styled('div', {
  display: 'inline-block',
  width: '64px',
  height: '64px',
  margin: '8px',
  borderRadius: '50%',
  background: '#fff',
  animation: `${rotateAnimation} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite`,

  variants: {
    size: {
      small: {
        width: '32px',
        height: '32px',
      },
      medium: {
        width: '64px',
        height: '64px',
      },
      large: {
        width: '96px',
        height: '96px',
      },
    },
  },
})
