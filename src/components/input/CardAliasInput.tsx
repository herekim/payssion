import { InputUnderline } from '@/styles/input.stitches'

import { CardAliasInputProps } from './types'

const CardAliasInput = ({ inputRef, defaultValue = '' }: CardAliasInputProps) => {
  return (
    <InputUnderline
      ref={inputRef}
      defaultValue={defaultValue}
      css={{ width: '100%' }}
      type="text"
      placeholder="카드 별칭 (선택)"
      maxLength={10}
    />
  )
}

export default CardAliasInput
