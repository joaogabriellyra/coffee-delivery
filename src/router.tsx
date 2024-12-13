import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { OrderConfirmed } from './pages/order-confirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmed" element={<OrderConfirmed />} />
    </Routes>
  )
}
