import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PayssionApp, PayssionRoot } from '@/styles/layout.stitches'

import Header from './Header'

export default {
  title: 'Components/Header/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => {
  return (
    <PayssionRoot>
      <Header />
      <PayssionApp />
    </PayssionRoot>
  )
}

export const Default = Template.bind({})
