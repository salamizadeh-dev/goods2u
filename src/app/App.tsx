import { CartProvider } from '../context/CartContext'
import { AppRoutes } from './routes'

export function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}