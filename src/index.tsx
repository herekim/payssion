export { default as Payssion } from '@/Payssion'
export { usePayssion } from '@/hooks'
export { PayssionProvider } from '@/providers'

import React from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/Payssion'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
