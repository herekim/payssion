import type * as Stitches from '@stitches/react'
import { PropsWithChildren } from 'react'

import { InputBox as StyledInputBox } from '@/styles/input.stitches'
interface InputBoxProps {
  css?: Stitches.CSS
}

const InputBox = ({ children, css }: PropsWithChildren<InputBoxProps>) => {
  return <StyledInputBox css={{ ...css }}>{children}</StyledInputBox>
}

export default InputBox
