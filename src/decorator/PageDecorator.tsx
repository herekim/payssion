import { ComponentType } from 'react'

import { Header } from '@/components/header'
import { Modal } from '@/components/modal'
import { CardProvider, ModalProvider, CardListProvider } from '@/providers'
import { PayssionRoot } from '@/styles/layout.stitches'

export default function PageDecorator(Story: ComponentType) {
  return (
    <PayssionRoot>
      <ModalProvider>
        <CardListProvider>
          <CardProvider>
            <Header />
            <Story />
            <Modal />
          </CardProvider>
        </CardListProvider>
      </ModalProvider>
    </PayssionRoot>
  )
}
