import { CardType } from '@/domain'
import {
  SmallCard as StyledSmallCard,
  CardTop,
  CardMiddle,
  SmallCardChip,
  CardNumber,
  CardBottom,
  CardBottomInfo,
  CardText,
} from '@/styles/card.stitches'

import CardBox from './CardBox'

interface SmallCardProps {
  cardName: string
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
  cardType: CardType
}

const SmallCard = ({ cardNumbers, cardOwner, cardExpiredDate, cardType: { name, color, bg } }: SmallCardProps) => {
  return (
    <CardBox>
      <StyledSmallCard style={{ backgroundColor: bg, color }}>
        <CardTop>
          <CardText>{name}</CardText>
        </CardTop>
        <CardMiddle>
          <SmallCardChip />
        </CardMiddle>
        <CardNumber>
          <CardText>{cardNumbers}</CardText>
        </CardNumber>
        <CardBottom>
          <CardBottomInfo>
            <CardText>{cardOwner}</CardText>
            <CardText>{cardExpiredDate}</CardText>
          </CardBottomInfo>
        </CardBottom>
      </StyledSmallCard>
    </CardBox>
  )
}

export default SmallCard
