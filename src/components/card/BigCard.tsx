import { CardBox, BigCardProps } from '@/components/card'
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
      <div className="big-card" style={{ backgroundColor: bg, color }}>
        <div className="card-top">
          <span className="card-text__big">{cardName || name}</span>
          {onClickDeleteButton && (
            <button type="button" className="card-text" onClick={onClickDeleteButton}>
              카드삭제
            </button>
          )}
        </div>
        <div className="card-middle">
          <div className="big-card__chip" />
          <div className="card-number">
            <span className="card-text__big">{cardNumbers}</span>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text__big">{cardOwner}</span>
            <span className="card-text__big">{cardExpiredDate}</span>
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default BigCard
