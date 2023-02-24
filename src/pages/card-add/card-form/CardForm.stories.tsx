import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardInfo } from '@/pages/card-add/card-form/hooks'

import CardForm from './CardForm'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm',
  component: CardForm,
} as ComponentMeta<typeof CardForm>

const Template: ComponentStory<typeof CardForm> = () => {
  const { cardInfo, handleNumber, handleExpiredDate, handleOwner, handleSecurityCode, handlePassword } = useCardInfo()
  return (
    <div className="root">
      <div className="app">
        <CardForm>
          <CardForm.CardNumbers numbers={cardInfo.cardNumbers} handleChange={handleNumber} />
          <CardForm.CardExpiredDate
            expiredYear={cardInfo.expiredYear}
            expiredMonth={cardInfo.expiredMonth}
            handleChange={handleExpiredDate}
          />
          <CardForm.CardOwner owner={cardInfo.owner} handleChange={handleOwner} />
          <CardForm.CardSecurityCode securityCode={cardInfo.securityCode} handleChange={handleSecurityCode} />
          <CardForm.CardPassword password={cardInfo.password} handleChange={handlePassword} />
        </CardForm>
      </div>
    </div>
  )
}

export const basic = Template.bind({})