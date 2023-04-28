import { useContext } from 'react'

import { CardListStateContext, CardListDispatchContext } from '@/contexts'
import { CardInfomation } from '@/domain'
import { usePage } from '@/hooks'
import { useCardInfo } from '@/pages/hooks'

const useCardList = () => {
  const { changeCurrentPage } = usePage()

  const cardList = useContext(CardListStateContext)
  const cardListDispatch = useContext(CardListDispatchContext)

  const { setAllCardInfo } = useCardInfo()

  const onClickCard = (card: CardInfomation) => {
    setAllCardInfo(card)
    changeCurrentPage('CardUpdate')
  }

  const addCard = (newCard: CardInfomation) => {
    cardListDispatch({ type: 'ADD', payload: newCard })
  }

  const updateCard = (updatedCard: CardInfomation) => {
    cardListDispatch({ type: 'UPDATE', payload: updatedCard })
  }

  const deleteCard = (deletedCard: CardInfomation) => {
    cardListDispatch({ type: 'DELETE', payload: deletedCard })
  }
  return { cardList, addCard, deleteCard, updateCard, onClickCard }
}

export default useCardList
