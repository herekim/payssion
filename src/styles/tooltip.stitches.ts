import { styled, keyframes } from '@/styles/stitches.config'

export const TooltipIcon = styled('div', {
  color: 'lightgray',
  fontSize: '18px',
  cursor: 'pointer',
  textDecoration: 'none',
})

export const TooltipContent = styled('div', {
  width: '12.5rem',
  borderRadius: '4px',
  padding: '10px',
  fontSize: '10px',
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
})

export const TooltipArrow = styled('div', {
  fill: 'white',
})

export const IconButton = styled('div', {
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '35px',
  width: '35px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--violet11)',
  backgroundColor: 'white',
  boxShadow: '0 2px 10px var(--blackA7)',
  '&:hover': {
    backgroundColor: 'var(--violet3)',
  },
})

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const animations = {
  slideUpAndFade,
  slideRightAndFade,
  slideDownAndFade,
  slideLeftAndFade,
}
