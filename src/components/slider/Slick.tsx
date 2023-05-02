import { useMemo, PropsWithChildren, useRef } from 'react'
import Slider, { Settings } from 'react-slick'

import { PrevArrow, NextArrow } from '@/components/button'
import { styled } from '@/styles/stitches.config'

interface SlickProps {
  changeCurrentCard: (index: number) => void
}

const Slick = ({ children, changeCurrentCard }: PropsWithChildren<SlickProps>) => {
  const sliderRef = useRef<Slider>(null)

  const settings = useMemo<Settings>(
    () => ({
      slidesToShow: 1,
      nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} />,
      prevArrow: <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
      afterChange: changeCurrentCard,
    }),
    [changeCurrentCard],
  )
  return (
    <SlideContainer>
      <StyledSlider ref={sliderRef} {...settings}>
        {children}
      </StyledSlider>
    </SlideContainer>
  )
}

export default Slick

const SlideContainer = styled('div', {
  width: '80%',
})

const StyledSlider = styled(Slider, {
  position: 'relative',
  display: 'block',
  boxSizing: 'border-box',
  userSelect: 'none',
  touchAction: 'pan-y',
  WebkitTapHighlightColor: 'transparent',

  '& .slick-list': {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },

  '& .slick-track': {
    position: 'relative',
    top: 0,
    left: 0,
    display: 'block',
    margin: '0 auto',
  },

  '& .slick-slide': {
    // display: 'none',
    float: 'left',
    height: '100%',
    minHeight: '1px',
  },

  '& .slick-arrow': {
    display: 'none',
  },
})
