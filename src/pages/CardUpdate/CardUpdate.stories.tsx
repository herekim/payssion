import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'
import { PageDecorator } from '@/decorator'
import { CardType } from '@/domain'

import CardUpdate from './CardUpdate'
import { useCardUpdate } from './hooks'

interface CardUpdateProps {
  cardName: string
  cardNickname: string
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
  cardType: CardType
}

/**
 * Todo: 카드 삭제, 카드 목록으로 돌아가기, 다음 버튼에 대한 테스트
 */
export default {
  title: 'Pages/CardUpdate',
  component: CardUpdate,
  decorators: [PageDecorator, withKnobs],
} as ComponentMeta<typeof CardUpdate>

const Template: ComponentStory<React.FC<CardUpdateProps>> = ({
  cardNumbers,
  cardName,
  cardOwner,
  cardExpiredDate,
  cardType,
  cardNickname,
}: CardUpdateProps) => {
  const { nicknameRef, onClickDeleteButton, handlePreNavigation } = useCardUpdate()

  return (
    <>
      <CardDetailsForm>
        <CardDetailsForm.PageTitle
          buttonElement={<BackButton />}
          addtionalClassName="mb-10"
          title="카드 목록으로 돌아가기"
        />
        <CardDetailsForm.BigCard
          onClickDeleteButton={onClickDeleteButton}
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
    </>
  )
}

const MOCK_DATA: Record<string, CardUpdateProps> = {
  하얀카드: {
    cardName: '하얀카드',
    cardNickname: '하양이',
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '김하얀',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '하얀카드',
      color: '#000000',
      bg: '#F5F5F5',
    },
  },
  파란카드: {
    cardName: '파란카드',
    cardNickname: '파랑이',
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '이파랑',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '파란카드',
      color: '#ffffff',
      bg: '#162bb1',
    },
  },
  빨간카드: {
    cardName: '빨간카드',
    cardNickname: '빨강이',
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '최빨강',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '빨간카드',
      color: '#ffffff',
      bg: '#932929',
    },
  },
  초록카드: {
    cardName: '초록카드',
    cardNickname: '초록이',
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '강초록',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '초록카드',
      color: '#000000',
      bg: '#54cb25',
    },
  },
  에메랄드카드: {
    cardName: '에메랄드카드',
    cardNickname: '에메랄드',
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '박에메랄드',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '에메랄드카드',
      color: '#ffffff',
      bg: '#20d0ad',
    },
  },
  분홍카드: {
    cardName: '분홍카드',
    cardNickname: '분홍이',
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '정분홍',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '분홍카드',
      color: '#ffffff',
      bg: '#d320c7',
    },
  },
  보라카드: {
    cardName: '보라카드',
    cardNickname: '보라',
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '진보라',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '보라카드',
      color: '#ffffff',
      bg: '#7c1ddb',
    },
  },
  주황카드: {
    cardName: '주황카드',
    cardNickname: '주황이',
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '장주황',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '주황카드',
      color: '#ffffff',
      bg: '#e1860f',
    },
  },
}

export const 하얀카드 = Template.bind({})
하얀카드.args = MOCK_DATA['하얀카드']

export const 파란카드 = Template.bind({})
파란카드.args = MOCK_DATA['파란카드']

export const 빨간카드 = Template.bind({})
빨간카드.args = MOCK_DATA['빨간카드']

export const 초록카드 = Template.bind({})
초록카드.args = MOCK_DATA['초록카드']

export const 에메랄드카드 = Template.bind({})
에메랄드카드.args = MOCK_DATA['에메랄드카드']

export const 분홍카드 = Template.bind({})
분홍카드.args = MOCK_DATA['분홍카드']

export const 보라카드 = Template.bind({})
보라카드.args = MOCK_DATA['보라카드']

export const 주황카드 = Template.bind({})
주황카드.args = MOCK_DATA['주황카드']
