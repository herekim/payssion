import { PageTitle as StyledPageTitle } from '@/styles/layout.stitches'
import { styled } from '@/styles/stitches.config'

import { PageTitleProps } from './types'
const PageTitle = ({ title, buttonElement }: PageTitleProps) => {
  return (
    <CustomPageTitle>
      {buttonElement}
      <span>{title}</span>
    </CustomPageTitle>
  )
}

const CustomPageTitle = styled(StyledPageTitle, {
  marginBottom: ' 1rem;',
})

export default PageTitle
