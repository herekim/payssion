import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCardInfo, useCardList } from '@/pages/hooks'

const useCardUpdate = () => {
  const navigate = useNavigate()
  const {
    cardInfo,
    cardInfo: {
      cardNumbers: { first, second, third, fourth },
      owner,
      name,
      nickname,
      expiredMonth,
      expiredYear,
    },
    handleNickname,
    resetCardInfo,
  } = useCardInfo()

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
    navigate('/')
  }

  const cardNumbers = `${first} - ${second} - ${third} - ${fourth}`
  const cardOwner = owner
  const cardExpiredDate = `${expiredMonth} / ${expiredYear}`
  const cardNickname = nickname

  return {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardNickname,
    onClickDeleteButton,
    handlePreNavigation,
  }
}

export default useCardUpdate
