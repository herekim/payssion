import { CardBox, BigCardProps } from '@/components/card'
import {
  BigCard as StyledBigCard,
  CardTop,
  CardTextBig,
  CardText,
  CardMiddle,
  BigCardChip,
  CardNumber,
  CardBottom,
  CardBottomInfo,
} from '@/styles/card.stitches'

const BigCard = ({
  onClickDeleteButton,
  cardName,
  cardNumbers,
  cardOwner,
  cardExpiredDate,
  cardType: { name, color, bg },
}: BigCardProps) => {
  return (
    <CardBox>
      <StyledBigCard style={{ backgroundColor: bg, color }}>
        <CardTop>
          <CardTextBig>{cardName || name}</CardTextBig>
          {onClickDeleteButton && <CardText onClick={onClickDeleteButton}>카드삭제</CardText>}
        </CardTop>
        <CardMiddle>
          <BigCardChip />
          <CardNumber>
            <CardTextBig>{cardNumbers}</CardTextBig>
          </CardNumber>
        </CardMiddle>
        <CardBottom>
          <CardBottomInfo>
            <CardTextBig>{cardOwner}</CardTextBig>
            <CardTextBig>{cardExpiredDate}</CardTextBig>
          </CardBottomInfo>
        </CardBottom>
      </StyledBigCard>
    </CardBox>
  )
}

export default BigCard
