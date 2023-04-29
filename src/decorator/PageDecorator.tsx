import { ComponentType } from 'react'

import { Modal } from '@/components/modal'
import { CardProvider, ModalProvider, CardListProvider } from '@/providers'

export default function CardDecorator(Story: ComponentType) {
  return (
    <div className="payssion-root">
      <ModalProvider>
        <CardListProvider>
          <CardProvider>
            <Story />
            <Modal />
          </CardProvider>
        </CardListProvider>
      </ModalProvider>
    </div>
  )
}
