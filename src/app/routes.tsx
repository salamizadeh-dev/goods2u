import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { StoreLayout } from '../components/layout/StoreLayout'
import { ProductsPage } from '../pages/Products/ProductsPage'
import { ProductDetailsPage } from '../pages/ProductDetails/ProductDetailsPage'
import { CartPage } from '../pages/Cart/CartPage'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}