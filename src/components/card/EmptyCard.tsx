import { PropsWithChildren } from 'react'

import { CardBox } from '@/components/card'
import { EmptyCard as StyledEmptyCard } from '@/styles/card.stitches'

interface EmptyCardProps {
  backgroundColor?: string
  color?: string
}

function EmptyCard({ children, backgroundColor, color }: PropsWithChildren<EmptyCardProps>) {
  return (
    <CardBox>
      <StyledEmptyCard
        css={{
          backgroundColor,
          color,
        }}
      >
        {children}
      </StyledEmptyCard>
    </CardBox>
  )
}

export default EmptyCard
