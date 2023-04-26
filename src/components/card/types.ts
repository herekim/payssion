import { CardType } from '@/domain'

export interface BigCardProps {
  onClickDeleteButton?: () => void
  cardName: string
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
  cardType: CardType
}
