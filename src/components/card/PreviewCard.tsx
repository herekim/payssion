import { useContext } from 'react'

import { CardStateContext } from '@/contexts'
import { getCardExpiredDateDisplay, getCardNumbersDisplay } from '@/domain'
import {
  CardTop,
  CardMiddle,
  SmallCardChip,
  CardNumber,
  CardBottom,
  CardBottomInfo,
  CardText,
} from '@/styles/card.stitches'
import { styled } from '@/styles/stitches.config'

import EmptyCard from './EmptyCard'

const PreviewCard = () => {
  const {
    cardNumbers: { first, second, third, fourth },
    owner,
    expiredYear,
    expiredMonth,
    cardType: { name, bg, color },
  } = useContext(CardStateContext)

  return (
    <EmptyCard backgroundColor={bg} color={color}>
      <CardTop>
        <CardName>{name}</CardName>
      </CardTop>
      <CardMiddle>
        <SmallCardChip />
        <CardNumber>
          <span>{getCardNumbersDisplay({ first, second, third, fourth })}</span>
        </CardNumber>
      </CardMiddle>
      <CardBottom>
        <CardBottomInfo>
          <CardText>{owner}</CardText>
          <CardText>{getCardExpiredDateDisplay({ expiredMonth, expiredYear })}</CardText>
        </CardBottomInfo>
      </CardBottom>
    </EmptyCard>
  )
}

const CardName = styled('p', {
  fontSize: '0.8rem',
})

export default PreviewCard
