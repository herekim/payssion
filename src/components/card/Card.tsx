import { PropsWithChildren } from 'react'

import { CardBox } from '@/components/card'
import { EmptyCard } from '@/styles/card.stitches'

function Card({ children }: PropsWithChildren) {
  return (
    <CardBox>
      <EmptyCard>{children}</EmptyCard>
    </CardBox>
  )
}

export default Card
