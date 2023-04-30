import { ReactNode } from 'react'

import { PAGE_TITLES } from '@/contants'

type Title = (typeof PAGE_TITLES)[number]

export interface PageTitleProps {
  title: Title
  buttonElement?: ReactNode
}
