import BottomSheetContainer from '@/components/modal/BottomSheetContainer'
import { getRandomVirtualDigits } from '@/domain'
import { DigitButton } from '@/styles/button.stitches'
import { styled } from '@/styles/stitches.config'

import { useVirtualKeyboard } from './hooks'
export interface VirtualKeyboardProps {
  onKeyPress: (value: string) => void
}

const VirtualKeyboard = ({ onKeyPress }: VirtualKeyboardProps) => {
  const { modalRef } = useVirtualKeyboard()

  return (
    <div ref={modalRef}>
      <BottomSheetContainer>
        <DigitButtonContainer>
          {getRandomVirtualDigits().map((digit) => (
            <DigitButton key={digit} onClick={() => onKeyPress(String(digit))}>
              {digit}
            </DigitButton>
          ))}
        </DigitButtonContainer>
      </BottomSheetContainer>
    </div>
  )
}

const DigitButtonContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  width: '100%',
  padding: '0 1.25rem',
  gap: '0.5rem',
})
export default VirtualKeyboard
