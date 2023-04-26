import { PageTitleProps } from './types'

const PageTitle = ({ title, addtionalClassName, buttonElement }: PageTitleProps) => {
  return (
    <h2 className={`page-title ${addtionalClassName}`}>
      {buttonElement}
      <span>{title}</span>
    </h2>
  )
}

export default PageTitle
