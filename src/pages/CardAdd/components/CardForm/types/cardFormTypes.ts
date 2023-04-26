import { RefObject } from 'react'

export type HandleExpiredDateProps = {
  value: string
  yymm: 'YY' | 'MM'
}
export interface CardExpiredDateProps {
  expiredDateRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
  }
}

export interface UseCardExpiredDateProps {
  handleChange({ value, yymm }: HandleExpiredDateProps): void
}

export type CardNumbersOrder = 'first' | 'second' | 'third' | 'fourth'

export interface HandleNumbersChangeProps {
  value: string
  order: CardNumbersOrder
}

export interface NumbersRef {
  first: RefObject<HTMLInputElement>
  second: RefObject<HTMLInputElement>
  third: RefObject<HTMLInputElement>
  fourth: RefObject<HTMLInputElement>
}

export interface CardNumbersProps {
  numbersRef: NumbersRef
  nextRef?: RefObject<HTMLInputElement>
  onFocusChange?: (order: CardNumbersOrder) => void
}

export type CardPasswordOrder = 'first' | 'second'

export interface HandlePasswordChangeProps {
  value: string
  order: CardPasswordOrder
}

export interface PasswordRef {
  first: RefObject<HTMLInputElement>
  second: RefObject<HTMLInputElement>
}
export interface CardPasswordProps {
  passwordRef: PasswordRef
  onFocusChange?: (order: CardPasswordOrder) => void
}

export interface UseCardPasswordProps {
  handleChange({ value, order }: HandlePasswordChangeProps): void
}

export interface HandleSecurityCodeChangeProps {
  value: string
}

export interface CardSecurityCodeProps {
  securityCodeRef: RefObject<HTMLInputElement>
  nextRef?: RefObject<HTMLInputElement>
}

export interface CardOwnerProps {
  ownerRef: RefObject<HTMLInputElement>
}
