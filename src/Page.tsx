import { Page as PageType } from '@/contexts'
import { usePage } from '@/hooks'
import { CardAdd, CardCompleted, CardList, CardUpdate } from '@/pages'

const pageComponents = {
  CardAdd: <CardAdd />,
  CardCompleted: <CardCompleted />,
  CardList: <CardList />,
  CardUpdate: <CardUpdate />,
}

const createPage = (page: PageType) => {
  return pageComponents[page]
}

const Page = () => {
  const { currentPage } = usePage()
  return createPage(currentPage)
}

export default Page
