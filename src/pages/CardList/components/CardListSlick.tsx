import { styled } from '@stitches/react'

import { EmptyCard, SmallCard } from '@/components/card'
import { Slick } from '@/components/slider'
import { getCardNumbersDisplay, getCardExpiredDateDisplay, CardInfomation } from '@/domain'
import { CardNickname } from '@/styles/card.stitches'

interface CardListSlickProps {
  cardList: CardInfomation[]
  goToCardAddPage: () => void
  onClickCard: (card: CardInfomation) => void
}

const CardListSlick = ({ cardList, goToCardAddPage, onClickCard }: CardListSlickProps) => {
  return (
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
        <button onClick={goToCardAddPage}>
          <EmptyCard backgroundColor="#e2e2e2" color="#ffffff">
            <span>+</span>
          </EmptyCard>
        </button>
      </Slick>
    </CardListContainer>
  )
}

export default CardListSlick

const CardListContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '2rem',
})
