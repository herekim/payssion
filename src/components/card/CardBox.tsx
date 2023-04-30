import { PropsWithChildren } from 'react'

import { CardBox as StyledCardBox } from '@/styles/card.stitches'

const CardBox = ({ children }: PropsWithChildren) => {
  return <StyledCardBox>{children}</StyledCardBox>
}

export default CardBox
