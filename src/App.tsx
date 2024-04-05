import './index.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
      <Helmet titleTemplate="%s | pizza.shop" />
    </HelmetProvider>
  )
}
