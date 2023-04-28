import { NavigationButton } from '@/components/button'
import { Toast } from '@/components/toast'
import { Page } from '@/contexts'

interface NavigationButtonWithValidationProps {
  additionalClassNames?: string
  text: string
  to: Page
  openValidToast?: boolean
  setOpenValidToast?: React.Dispatch<React.SetStateAction<boolean>>
  onBeforeNavigate?: () => void
  isNavigationEnabled?: () => boolean
}

const NavigationButtonWithValidation = (props: NavigationButtonWithValidationProps) => {
  const { openValidToast, setOpenValidToast } = props

  return (
    <>
      {openValidToast && setOpenValidToast && (
        <Toast open={openValidToast} onOpenChange={setOpenValidToast} title="입력정보가 올바른지 확인해주세요❗️" />
      )}
      <NavigationButton {...props} />
    </>
  )
}

export default NavigationButtonWithValidation
