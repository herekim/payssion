import { useState } from 'react'

import { PageTitle } from '@/components/layouts'
import { usePage, usePayssion } from '@/hooks'
import { useCardList } from '@/pages/CardList/hooks'
import { PayssionApp } from '@/styles/layout.stitches'

import { CardListSlick, InfoMessage, PaymentAmount, Agreement, ButtonContainer } from './components'

function CardList() {
  const { cardList, onClickCard } = useCardList()
  const { changeCurrentPage } = usePage()
  const { closePayment, processPayment, paymentAmount } = usePayssion()

  const [checked, setChecked] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)

  const isCurrentCardPresent = cardList[currentCard]

  const goToCardAddPage = () => {
    changeCurrentPage('CardAdd')
  }

  const onClickAgreement = () => {
    setChecked((prev) => !prev)
  }

  const changeCurrentCard = (index: number) => {
    setCurrentCard(index)
  }

  const onClickCancelButton = () => {
    closePayment()
  }

  return (
    <>
      <PayssionApp>
        <PageTitle title="보유 카드" />
        <CardListSlick
          cardList={cardList}
          goToCardAddPage={goToCardAddPage}
          onClickCard={onClickCard}
          changeCurrentCard={changeCurrentCard}
        />
        <InfoMessage />
        <PaymentAmount amount={paymentAmount} />
        <Agreement checked={checked} onClick={onClickAgreement} />
      </PayssionApp>
      <ButtonContainer
        onClickCancelButton={onClickCancelButton}
        onClickPayButton={processPayment}
        disabled={!isCurrentCardPresent || !checked}
      />
    </>
  )
}

export default CardList
