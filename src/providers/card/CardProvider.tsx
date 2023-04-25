import { useReducer, PropsWithChildren } from 'react'

import { INITIAL_CARD_STATE } from '@/contants'
import { CardStateContext, CardDispatchContext } from '@/contexts/card'
import { CardInfomation, cardReducer } from '@/domain'

function CardProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cardReducer, INITIAL_CARD_STATE as CardInfomation)
  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>{children}</CardDispatchContext.Provider>
    </CardStateContext.Provider>
  )
}

export default CardProvider
