import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'
<<<<<<< HEAD:src/pages/CardAdd/components/CardForm/components/CardSecurityCode.stories.tsx

import { useCardInfo } from '@/pages/hooks'
=======
>>>>>>> 6c3e046 ([클린코드 리액트 2기 김희열] 페이먼츠 미션 Step 2 (#86)):src/pages/card-add/card-form/components/CardSecurityCode.stories.tsx

import CardSecurityCode from './CardSecurityCode'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardSecurityCode',
  component: CardSecurityCode,
} as ComponentMeta<typeof CardSecurityCode>

const Template: ComponentStory<typeof CardSecurityCode> = () => {
<<<<<<< HEAD:src/pages/CardAdd/components/CardForm/components/CardSecurityCode.stories.tsx
  const { handleSecurityCode } = useCardInfo()
=======
>>>>>>> 6c3e046 ([클린코드 리액트 2기 김희열] 페이먼츠 미션 Step 2 (#86)):src/pages/card-add/card-form/components/CardSecurityCode.stories.tsx
  const securityCodeRef = useRef<HTMLInputElement>(null)
  return (
    <div className="root">
      <div className="app">
<<<<<<< HEAD:src/pages/CardAdd/components/CardForm/components/CardSecurityCode.stories.tsx
        <CardSecurityCode securityCodeRef={securityCodeRef} handleChange={handleSecurityCode} />
=======
        <CardSecurityCode securityCodeRef={securityCodeRef} />
>>>>>>> 6c3e046 ([클린코드 리액트 2기 김희열] 페이먼츠 미션 Step 2 (#86)):src/pages/card-add/card-form/components/CardSecurityCode.stories.tsx
      </div>
    </div>
  )
}

export const basic = Template.bind({})
