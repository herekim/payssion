import type * as Stitches from '@stitches/react'
import { ForwardedRef, DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'

import { InputBasic } from '@/styles/input.stitches'

type DetailedInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export interface InputProps extends Omit<DetailedInputProps, 'type' | 'ref'> {
  type?: DetailedInputProps['type']
  css?: Stitches.CSS
}

const Input = forwardRef(({ type = 'text', css, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <InputBasic ref={ref} type={type} css={{ ...css }} {...props} />
})

Input.displayName = 'Input'
export default Input
