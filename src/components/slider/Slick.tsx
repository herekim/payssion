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
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </SlideContainer>
  )
}

export default Slick

const SlideContainer = styled('div', {
  width: '80%',
})
