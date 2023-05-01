import { ComponentType } from 'react'

import { Header } from '@/components/header'
import { Modal } from '@/components/modal'
import { CardProvider, ModalProvider, CardListProvider } from '@/providers'
import { PayssionRoot, PayssionApp } from '@/styles/layout.stitches'

export default function HeaderDecorator(Story: ComponentType) {
  return (
    <PayssionRoot>
      <Header />
      <PayssionApp>
        <ModalProvider>
          <CardListProvider>
            <CardProvider>
              <Story />
              <Modal />
            </CardProvider>
          </CardListProvider>
        </ModalProvider>
      </PayssionApp>
    </PayssionRoot>
  )
}
