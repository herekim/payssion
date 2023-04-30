import { PropsWithChildren } from 'react'

import { InputTitle as StyledInputTitme } from '@/styles/input.stitches'

const InputTitle = ({ children }: PropsWithChildren) => {
  return <StyledInputTitme>{children}</StyledInputTitme>
}

export default InputTitle
