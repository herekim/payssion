import { Page } from '@/contexts'
import { usePage } from '@/hooks'

export interface NavigationButtonProps {
  additionalClassNames?: string
  text: string
  onBeforeNavigate?: () => void
  to: Page
  isNavigationEnabled?: () => boolean
}

const NavigationButton = ({
  additionalClassNames = '',
  text,
  onBeforeNavigate,
  to,
  isNavigationEnabled = () => true,
}: NavigationButtonProps) => {
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
    <div className={`button-box ${additionalClassNames}`}>
      <button onClick={() => goToSpecifiedPage(to)} className="button-text">
        {text}
      </button>
    </div>
  )
}

export default NavigationButton
