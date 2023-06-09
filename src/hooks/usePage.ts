import { useContext } from 'react'

import { PayssionContext, Page } from '@/contexts'

const usePage = () => {
  const { currentPage, changePage, goToPrevPage } = useContext(PayssionContext)

  const changeCurrentPage = (page: Page) => {
    changePage(page)
  }

  const goToPreviousPage = () => {
    goToPrevPage()
  }

  return { currentPage, changeCurrentPage, goToPreviousPage }
}
export default usePage
