import { useRef, useContext } from 'react'

import { CardStateContext } from '@/contexts'
import { usePage } from '@/hooks'
import { useCardList } from '@/pages/CardList/hooks'
import { useCardInfo } from '@/pages/hooks'

const useCardUpdate = () => {
  const cardInfo = useContext(CardStateContext)
  const {
    cardNumbers: { first, second, third, fourth },
    owner,
    name,
    nickname,
    expiredMonth,
    expiredYear,
  } = cardInfo
  const { changeCurrentPage } = usePage()
  const { handleNickname, resetCardInfo } = useCardInfo()

  const { updateCard, deleteCard } = useCardList()

  const nicknameRef = useRef<HTMLInputElement>(null)

  const handlePreNavigation = () => {
    const nicknameValue = nicknameRef.current?.value || name
    handleNickname(nicknameValue)
    updateCard({ ...cardInfo, nickname: nicknameValue })
    resetCardInfo()
  }

  const onClickDeleteButton = () => {
    deleteCard(cardInfo)
    changeCurrentPage('CardList')
  }

  const cardNumbers = `${first} - ${second} - ${third} - ${fourth}`
  const cardOwner = owner
  const cardExpiredDate = `${expiredMonth} / ${expiredYear}`
  const cardNickname = nickname
  const cardName = name
  const { cardType } = cardInfo

  return {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardNickname,
    cardName,
    cardType,
    onClickDeleteButton,
    handlePreNavigation,
  }
}

export default useCardUpdate
