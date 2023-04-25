import { CardBox } from '@/components/card'
import { CardType } from '@/domain'

interface SmallCardProps {
  cardName: string
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
  cardType: CardType
}

const SmallCard = ({
  cardName,
  cardNumbers,
  cardOwner,
  cardExpiredDate,
  cardType: { name, color, bg },
}: SmallCardProps) => {
  return (
    <CardBox>
      <div className="small-card" style={{ backgroundColor: bg, color }}>
        <div className="card-top">
          <span className="card-text">{cardName || name}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-number">
          <span className="card-text">{cardNumbers}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">{cardOwner}</span>
            <span className="card-text">{cardExpiredDate}</span>
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default SmallCard
