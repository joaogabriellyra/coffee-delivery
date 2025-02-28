import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from './contexts/cart-context.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <App />
        </CartProvider>
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>
)
