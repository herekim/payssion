import { useRef, useContext } from 'react'

import { CardTypeButton } from '@/components/button'
import { BottomSheetContainer, DarkOverlay } from '@/components/modal'
import { CARD_TYPES } from '@/contants'
import { CardDispatchContext } from '@/contexts'
import { CardBackgoundColor, CardColor } from '@/domain'
import { useModal, useOutsideClick } from '@/hooks'
import { styled } from '@/styles/stitches.config'

export interface CheckModalProps {
  onAfterModalClose?: () => void
}

const CardTypeSelectionModal = ({ onAfterModalClose }: CheckModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const cardDispatch = useContext(CardDispatchContext)

  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: CardTypeSelectionModal })
    if (onAfterModalClose) {
      onAfterModalClose()
    }
  })

  const selectCardType = (name: string, bg: CardBackgoundColor, color: CardColor) => {
    cardDispatch({ type: 'SET_CARD_TYPE', payload: { name, bg, color } })
    closeModal({ element: CardTypeSelectionModal })

    if (onAfterModalClose) {
      onAfterModalClose()
    }
  }

  return (
    <DarkOverlay>
      <div ref={modalRef}>
        <BottomSheetContainer>
          <CardTypeButtonContainer>
            {CARD_TYPES.map(({ name, bg, color }) => (
              <CardTypeButton
                key={name}
                name={name}
                backgroundColor={bg}
                color={color}
                selectCardType={selectCardType}
              />
            ))}
          </CardTypeButtonContainer>
        </BottomSheetContainer>
      </div>
    </DarkOverlay>
  )
}

const CardTypeButtonContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0.5rem',
  gridRowGap: '1.5rem',
})

export default CardTypeSelectionModal
