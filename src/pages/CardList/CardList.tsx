import { styled } from '@stitches/react'

import { EmptyCard, SmallCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { Slick } from '@/components/slider'
import { getCardNumbersDisplay, getCardExpiredDateDisplay } from '@/domain'
import { usePage } from '@/hooks'
import { useCardList } from '@/pages/CardList/hooks'
import { CardNickname } from '@/styles/card.stitches'
import { PayssionApp } from '@/styles/layout.stitches'

function CardList() {
  const { cardList, onClickCard } = useCardList()
  const { changeCurrentPage } = usePage()

  return (
    <PayssionApp>
      <PageTitle title="보유 카드" />
      <CardListContainer>
        <Slick>
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
                <CardNickname>{nickname}</CardNickname>
              </div>
            )
          })}
          <button onClick={() => changeCurrentPage('CardAdd')}>
            <EmptyCard backgroundColor="#e2e2e2" color="#ffffff">
              <span>+</span>
            </EmptyCard>
          </button>
        </Slick>
      </CardListContainer>
    </PayssionApp>
  )
}

const CardListContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

export default CardList
