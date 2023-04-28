import { usePage } from '@/hooks'

const BackButton = () => {
  const { goToPreviousPage } = usePage()
  return <button onClick={goToPreviousPage}>&#60;</button>
}

export default BackButton
