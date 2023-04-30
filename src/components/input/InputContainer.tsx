import type * as Stitches from '@stitches/react'
import { PropsWithChildren } from 'react'

import { InputContainer as StyledInputContainer } from '@/styles/input.stitches'
interface InputContainerProps {
  css?: Stitches.CSS
}

const InputContainer = ({ children, css }: PropsWithChildren<InputContainerProps>) => {
  return <StyledInputContainer css={{ ...css }}>{children}</StyledInputContainer>
}

export default InputContainer
