import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState, useContext } from 'react'

import { PageTitle } from '@/components/layouts'
import { PayssionContext } from '@/contexts'
import { CardListDecorator } from '@/decorator'
import { CardInfomation } from '@/domain'
import { usePage } from '@/hooks'
import { useCardList } from '@/pages/CardList/hooks'
import { PayssionApp } from '@/styles/layout.stitches'

import CardList from './CardList'
import { CardListSlick, InfoMessage, PaymentAmount, Agreement, ButtonContainer } from './components'

interface CardListProps {
  cardList: CardInfomation[]
}

// Todo: 플러스 버튼 눌렀을 때의 인터렉션 추가해야함.
export default {
  title: 'Pages/CardList',
  component: CardList,
  decorators: [CardListDecorator],
  argTypes: {
    cardList: {
      control: {
        type: 'object',
      },
    },
  },
} as ComponentMeta<typeof CardList>

const Template: ComponentStory<React.FC<CardListProps>> = (args: CardListProps) => {
  const { onClickCard } = useCardList()
  const { changeCurrentPage } = usePage()

  const { closePayment, processPayment, paymentAmount } = useContext(PayssionContext)

  const [checked, setChecked] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)

  const isCurrentCardPresent = CARD_LIST[currentCard]

  const goToCardAddPage = () => {
    changeCurrentPage('CardAdd')
  }

  const onClickAgreement = () => {
    setChecked((prev) => !prev)
  }

  const changeCurrentCard = (index: number) => {
    setCurrentCard(index)
  }

  const { cardList } = args
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
        onClickCancelButton={closePayment}
        onClickPayButton={processPayment}
        disabled={!isCurrentCardPresent || !checked}
      />
    </>
  )
}

const CARD_LIST: CardInfomation[] = [
  {
    cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
    name: '하얀카드',
    nickname: '소비카드',
    expiredYear: '26',
    expiredMonth: '11',
    owner: '김하얀',
    securityCode: '123',
    passwords: { first: '1', second: '2' },
    cardType: {
      name: '하얀카드',
      color: '#000000',
      bg: '#F5F5F5',
    },
  },
  {
    cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
    name: '빨간카드',
    nickname: '저축카드',
    expiredYear: '26',
    expiredMonth: '11',
    owner: '최빨강',
    securityCode: '123',
    passwords: { first: '1', second: '2' },
    cardType: {
      name: '빨간카드',
      color: '#ffffff',
      bg: '#932929',
    },
  },
  {
    cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
    name: '파란카드',
    nickname: '포인트카드',
    expiredYear: '26',
    expiredMonth: '11',
    owner: '이파랑',
    securityCode: '123',
    passwords: { first: '1', second: '2' },
    cardType: {
      name: '파란카드',
      color: '#ffffff',
      bg: '#162bb1',
    },
  },
]

export const Default = Template.bind({})
Default.args = { cardList: CARD_LIST }
