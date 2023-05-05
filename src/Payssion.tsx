import { Header } from '@/components/header'
import { Modal } from '@/components/modal'
import Page from '@/Page'
import { CardProvider, CardListProvider, ModalProvider, PayssionProvider } from '@/providers'
import { globalStyles } from '@/styles/globalStyles'
import { PayssionRoot } from '@/styles/layout.stitches'

function Payssion() {
  globalStyles()

  return (
    <PayssionProvider>
      <ModalProvider>
        <CardListProvider>
          <CardProvider>
            <PayssionRoot>
              <Header />
              <Page />
              <Modal />
            </PayssionRoot>
          </CardProvider>
        </CardListProvider>
      </ModalProvider>
    </PayssionProvider>
  )
}

export default Payssion
