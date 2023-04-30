import { Input, InputTitle, InputContainer } from '@/components/input'
import { useCardPassword } from '@/pages/CardAdd/components/CardForm/hooks'
import { CardPasswordProps, CardPasswordOrder } from '@/pages/CardAdd/components/CardForm/types'
import { InputPasswordContainer } from '@/styles/input.stitches'
const CardPassword = ({ passwordRef }: CardPasswordProps) => {
  const onFocusChange = (order: CardPasswordOrder) => {
    passwordRef[order].current?.focus()
  }

  const { handleInputChange, openVirtualKeyboard } = useCardPassword({ passwordRef, onFocusChange })

  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <InputPasswordContainer>
        <Input
          ref={passwordRef.first}
          data-name="first"
          css={{ width: '15%' }}
          type="password"
          maxLength={1}
          onInput={handleInputChange}
          onFocus={() => openVirtualKeyboard('first')}
        />
        <Input
          ref={passwordRef.second}
          data-name="second"
          css={{ width: '15%' }}
          type="password"
          maxLength={1}
          onInput={handleInputChange}
          onFocus={() => openVirtualKeyboard('second')}
        />
        <Input css={{ width: '15%', backgroundColor: 'white' }} type="password" value="x" readOnly />
        <Input css={{ width: '15%', backgroundColor: 'white' }} type="password" value="x" readOnly />
      </InputPasswordContainer>
    </InputContainer>
  )
}

export default CardPassword
