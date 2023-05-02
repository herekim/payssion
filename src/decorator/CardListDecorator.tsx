import { ComponentType } from 'react'

import { Header } from '@/components/header'
import { Modal } from '@/components/modal'
import { CardProvider, ModalProvider, CardListProvider } from '@/providers'
import { PayssionRoot } from '@/styles/layout.stitches'

export default function CardListDecorator(Story: ComponentType) {
  return (
    <PayssionRoot>
      <Header />
      <ModalProvider>
        <CardListProvider>
          <CardProvider>
            <Story />
            <Modal />
          </CardProvider>
        </CardListProvider>
      </ModalProvider>
    </PayssionRoot>
  )
}
