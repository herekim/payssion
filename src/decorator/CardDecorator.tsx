import { ComponentType } from 'react'

// import { Header } from '@/components/header'
import { Modal } from '@/components/modal'
import { CardProvider, ModalProvider, CardListProvider } from '@/providers'
import { PayssionRoot, PayssionApp } from '@/styles/layout.stitches'
import { styled } from '@/styles/stitches.config'

export default function CardDecorator(Story: ComponentType) {
  return (
    <PayssionRoot>
      <PayssionApp>
        <ModalProvider>
          <CardListProvider>
            <CardProvider>
              <StoryContainer>
                <Story />
                <Modal />
              </StoryContainer>
            </CardProvider>
          </CardListProvider>
        </ModalProvider>
      </PayssionApp>
    </PayssionRoot>
  )
}

const StoryContainer = styled('div', {
  paddingTop: '2rem',
})
