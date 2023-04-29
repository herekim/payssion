import { Modal } from '@/components/modal'
import Page from '@/Page'
import { CardProvider, CardListProvider, ModalProvider } from '@/providers'

function Payssion() {
  return (
    <ModalProvider>
      <CardListProvider>
        <CardProvider>
          <div className="payssion-root">
            <Page />
            <Modal />
          </div>
        </CardProvider>
      </CardListProvider>
    </ModalProvider>
  )
}

export default Payssion
