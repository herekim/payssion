import { ReactComponent as BackButtonIcon } from '@/assets/back-button.svg'
import { usePage } from '@/hooks'
import { styled } from '@/styles/stitches.config'

const BackButton = () => {
  const { goToPreviousPage } = usePage()
  return (
    <Button onClick={goToPreviousPage}>
      <BackButtonIcon width={20} height={20} />
    </Button>
  )
}

const Button = styled('button', {
  padding: 0,
})

export default BackButton
