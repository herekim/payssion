import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import { CardDecorator } from '@/decorator'
import { ToastButton } from '@/styles/button.stitches'

import Toast, { ToastProps } from './Toast'

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
  decorators: [CardDecorator],
} as Meta

const Template: Story<ToastProps> = (args) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <ToastButton onClick={handleClick}>Toast 열기</ToastButton>
      <Toast {...args} open={open} onOpenChange={setOpen} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: '입력정보가 올바른지 확인해주세요❗️',
  description: '',
}
