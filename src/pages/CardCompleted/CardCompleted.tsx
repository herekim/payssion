import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'
import { useCardCompleted } from '@/pages/CardCompleted/hooks'

function CardCompleted() {
  const {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardNickname,
    cardName,
    cardType,
    handlePreNavigation,
  } = useCardCompleted()

  return (
    <CardDetailsForm>
      <CardDetailsForm.PageTitle buttonElement={<BackButton />} title="카드등록이 완료되었습니다." />
      <CardDetailsForm.BigCard
        cardNumbers={cardNumbers}
        cardName={cardName}
        cardOwner={cardOwner}
        cardExpiredDate={cardExpiredDate}
        cardType={cardType}
      />
      <CardDetailsForm.CardAliasInput inputRef={nicknameRef} defaultValue={cardNickname} />
      <CardDetailsForm.NavigationButton
        additionalClassNames="mt-50"
        onBeforeNavigate={handlePreNavigation}
        to="CardList"
        text="다음"
      />
    </CardDetailsForm>
  )
}

export default CardCompleted
