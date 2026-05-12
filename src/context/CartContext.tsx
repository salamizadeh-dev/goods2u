import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '../types/product'
import type { CartItem } from '../types/cart'

interface CartContextValue {
  cartItems: CartItem[]
  cartCount: number
  subtotal: number
  addToCart: (product: Product) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
  removeFromCart: (productId: string) => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { product, quantity: 1 }]
    })
  }

  function increaseQuantity(productId: string) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function decreaseQuantity(productId: string) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function removeFromCart(productId: string) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    )
  }

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }, [cartItems])

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    )
  }, [cartItems])

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      subtotal,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
    }),
    [cartItems, cartCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}