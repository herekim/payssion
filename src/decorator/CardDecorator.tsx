import { ComponentType } from 'react'

import { Modal } from '@/components/modal'
import { CardProvider, ModalProvider, CardListProvider } from '@/providers'
import { PayssionRoot, PayssionApp } from '@/styles/layout.stitches'

export default function CardDecorator(Story: ComponentType) {
  return (
    <PayssionRoot>
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
