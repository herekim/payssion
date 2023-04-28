import { Modal } from '@/components/modal'
import Page from '@/Page'
import { CardProvider, CardListProvider, ModalProvider } from '@/providers'

function Payssion() {
  return (
    <div className="root">
      <ModalProvider>
        <CardListProvider>
          <CardProvider>
            <Page />
            <Modal />
          </CardProvider>
        </CardListProvider>
      </ModalProvider>
    </div>
  )
}

export default Payssion
