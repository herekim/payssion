import { PropsWithChildren } from 'react'

import { BottomSheetContainer as StyledBottomSheetContainer } from '@/styles/modal.stitches'

const BottomSheetContainer = ({ children }: PropsWithChildren) => {
  return <StyledBottomSheetContainer>{children}</StyledBottomSheetContainer>
}
export default BottomSheetContainer
