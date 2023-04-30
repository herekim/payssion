import { PropsWithChildren } from 'react'

import { NavigationButton as NavigationTextButton } from '@/components/button'
import { BigCard } from '@/components/card'
import { CardAliasInput, InputContainer } from '@/components/input'
import { PageTitle } from '@/components/layouts'
import { getCardDetailsFormSubElement } from '@/domain'
import { PayssionApp } from '@/styles/layout.stitches'
import { styled } from '@/styles/stitches.config'

const CardDetailsForm = ({ children }: PropsWithChildren) => {
  const bigCard = getCardDetailsFormSubElement(children, BigCard)
  const pageTitle = getCardDetailsFormSubElement(children, PageTitle)
  const NavigationButton = getCardDetailsFormSubElement(children, NavigationTextButton)
  const cardAliasInput = getCardDetailsFormSubElement(children, CardAliasInput)
  return (
    <CustomPayssionApp>
      <Title>{pageTitle}</Title>
      {bigCard}
      <InputContainer
        css={{
          flexCenter: 'center',
          width: '100%',
        }}
      >
        {cardAliasInput}
      </InputContainer>
      {NavigationButton}
    </CustomPayssionApp>
  )
}

const CustomPayssionApp = styled(PayssionApp, {
  flexColumnCenter: 'center',
})

const Title = styled('div', {
  flexCenter: 'center',
})

CardDetailsForm.PageTitle = PageTitle
CardDetailsForm.BigCard = BigCard
CardDetailsForm.NavigationButton = NavigationTextButton
CardDetailsForm.CardAliasInput = CardAliasInput

export default CardDetailsForm
