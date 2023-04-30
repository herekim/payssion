import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { useModal } from '@/hooks'
import { DigitButton } from '@/styles/button.stitches'

import VirtualKeyboard, { VirtualKeyboardProps } from './VirtualKeyboard'

export default {
  title: 'Components/Modal/VirtualKeyboard',
  component: VirtualKeyboard,
  decorators: [CardDecorator],
} as ComponentMeta<typeof VirtualKeyboard>

const Template: ComponentStory<typeof VirtualKeyboard> = (args: VirtualKeyboardProps) => {
  const { openModal } = useModal()

  return <DigitButton onClick={() => openModal({ element: <VirtualKeyboard {...args} /> })}>Click Here</DigitButton>
}

export const Default = Template.bind({})
