import { EmptyCard, SmallCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { getCardNumbersDisplay, getCardExpiredDateDisplay } from '@/domain'
import { usePage } from '@/hooks'
import { useCardList } from '@/pages/CardList/hooks'

function CardList() {
  const { cardList, onClickCard } = useCardList()
  const { changeCurrentPage } = usePage()

  return (
    <div className="payssion-root">
      <div className="payssion-app text-center">
        <PageTitle addtionalClassName="mb-10" title="보유 카드" />
        {cardList?.map((card) => {
          const { cardNumbers, owner, name, nickname, expiredMonth, expiredYear, cardType } = card
          return (
            <div key={card.nickname} onClick={() => onClickCard(card)}>
              <SmallCard
                cardName={name}
                cardNumbers={getCardNumbersDisplay(cardNumbers)}
                cardOwner={owner}
                cardExpiredDate={getCardExpiredDateDisplay({ expiredMonth, expiredYear })}
                cardType={cardType}
              />
              <span className="card-nickname">{nickname}</span>
            </div>
          )
        })}
        <button onClick={() => changeCurrentPage('CardAdd')}>
          <EmptyCard>
            <span>+</span>
          </EmptyCard>
        </button>
      </div>
    </div>
  )
}

export default CardList
