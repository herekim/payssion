import { PropsWithChildren } from 'react'

import { EmptyCard } from '@/styles/card.stitches'

import CardBox from './CardBox'

function Card({ children }: PropsWithChildren) {
  return (
    <CardBox>
      <EmptyCard>{children}</EmptyCard>
    </CardBox>
  )
}

export default Card
