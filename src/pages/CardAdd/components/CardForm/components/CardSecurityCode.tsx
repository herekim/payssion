import { Input, InputTitle, InputContainer } from '@/components/input'
import { ToolTip } from '@/components/tooltip'
import { useCardSecurityCode } from '@/pages/CardAdd/components/CardForm/hooks'
import { CardSecurityCodeProps } from '@/pages/CardAdd/components/CardForm/types'

const CardSecurityCode = ({ securityCodeRef, nextRef }: CardSecurityCodeProps) => {
  const { handleInputChange, openVirtualKeyboard } = useCardSecurityCode({ securityCodeRef, nextRef })
  return (
    <InputContainer>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <Input
        ref={securityCodeRef}
        type="password"
        css={{ width: '25%' }}
        maxLength={3}
        onInput={handleInputChange}
        onFocus={openVirtualKeyboard}
      />
      <ToolTip content="카드 보안코드(CVV 또는 CVC)는 카드 결제를 보호하기 위한 3자리의 숫자입니다." />
    </InputContainer>
  )
}

export default CardSecurityCode
