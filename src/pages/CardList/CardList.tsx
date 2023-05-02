import { useState } from 'react'

import { PageTitle } from '@/components/layouts'
import { usePage } from '@/hooks'
import { useCardList } from '@/pages/CardList/hooks'
import { PayssionApp } from '@/styles/layout.stitches'

import { CardListSlick, InfoMessage, PaymentAmount, Agreement, ButtonContainer } from './components'

function CardList() {
  const { cardList, onClickCard } = useCardList()
  const { changeCurrentPage } = usePage()

  const [checked, setChecked] = useState(false)

  const goToCardAddPage = () => {
    changeCurrentPage('CardAdd')
  }

  const onClickAgreement = () => {
    setChecked((prev) => !prev)
  }

  return (
    <>
      <PayssionApp>
        <PageTitle title="보유 카드" />
        <CardListSlick cardList={cardList} goToCardAddPage={goToCardAddPage} onClickCard={onClickCard} />
        <InfoMessage />
        <PaymentAmount amount={0} />
        <Agreement checked={checked} onClick={onClickAgreement} />
      </PayssionApp>
      <ButtonContainer onClickCancelButton={() => {}} onClickPayButton={() => {}} disabled={true} />
    </>
  )
}

export default CardList
