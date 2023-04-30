import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { useModal } from '@/hooks'
import { DigitButton } from '@/styles/button.stitches'

import CardTypeSelectionModal, { CheckModalProps } from './CardTypeSelectionModal'

export default {
  title: 'Components/Modal/CardTypeSelectionModal',
  component: CardTypeSelectionModal,
  decorators: [CardDecorator],
} as ComponentMeta<typeof CardTypeSelectionModal>

const Template: ComponentStory<typeof CardTypeSelectionModal> = (args: CheckModalProps) => {
  const { openModal } = useModal()
  return (
    <DigitButton onClick={() => openModal({ element: <CardTypeSelectionModal {...args} /> })}>Click Here</DigitButton>
  )
}

export const Default = Template.bind({})
