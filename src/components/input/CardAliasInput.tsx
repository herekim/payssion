import { CardAliasInputProps } from './types'

const CardAliasInput = ({ inputRef, defaultValue = '' }: CardAliasInputProps) => {
  return (
    <input
      ref={inputRef}
      defaultValue={defaultValue}
      className="input-underline w-75"
      type="text"
      placeholder="카드 별칭 (선택)"
      maxLength={10}
    />
  )
}

export default CardAliasInput
