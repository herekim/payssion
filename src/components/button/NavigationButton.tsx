import { Page } from '@/contexts'
import { usePage } from '@/hooks'
import { ButtonBox, ButtonText } from '@/styles/button.stitches'

export interface NavigationButtonProps {
  additionalClassNames?: string
  text: string
  onBeforeNavigate?: () => void
  to: Page
  isNavigationEnabled?: () => boolean
}

const NavigationButton = ({ text, onBeforeNavigate, to, isNavigationEnabled = () => true }: NavigationButtonProps) => {
  const { changeCurrentPage } = usePage()

  const goToSpecifiedPage = async (to: Page) => {
    if (onBeforeNavigate) {
      await Promise.resolve(onBeforeNavigate())
    }
    if (isNavigationEnabled()) {
      changeCurrentPage(to)
    }
  }

  return (
    <ButtonBox>
      <ButtonText onClick={() => goToSpecifiedPage(to)}>{text}</ButtonText>
    </ButtonBox>
  )
}

export default NavigationButton
