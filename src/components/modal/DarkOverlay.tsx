import { PropsWithChildren } from 'react'

import { DarkOverlay as StyledDardOverlay } from '@/styles/modal.stitches'

const DarkOverlay = ({ children }: PropsWithChildren) => {
  return <StyledDardOverlay>{children}</StyledDardOverlay>
}

export default DarkOverlay
