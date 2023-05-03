import { CircleLoader } from '@/components/spinner'
import { styled } from '@/styles/stitches.config'

import DarkOverlay from './DarkOverlay'

const CircleLoaderModal = () => {
  return (
    <DarkOverlay>
      <CircleLoaderContainer>
        <CircleLoader size="small" />
      </CircleLoaderContainer>
    </DarkOverlay>
  )
}

export default CircleLoaderModal

const CircleLoaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})
