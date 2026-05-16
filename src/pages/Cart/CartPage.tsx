import { Link } from 'react-router-dom'
import { CartItemCard } from '../../components/ecommerce/CartItemCard'
import { CartSummary } from '../../components/ecommerce/CartSummary'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'
import { useCart } from '../../context/CartContext'

export function CartPage() {
  const {
    cartItems,
    cartCount,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart()

  return (
    <section className="page">
      <PageSectionHeader
        title="Cart"
        description="Review selected items and manage your order before checkout."
      />

      {cartItems.length > 0 ? (
        <>
          <p className="cart-page__meta">
            {cartCount} item{cartCount > 1 ? 's' : ''} currently in your cart
          </p>

          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.product.id}
                  item={item}
                  onIncrease={() => increaseQuantity(item.product.id)}
                  onDecrease={() => decreaseQuantity(item.product.id)}
                  onRemove={() => removeFromCart(item.product.id)}
                />
              ))}
            </div>

            <CartSummary subtotal={subtotal} />
          </div>

          <div className="cart-page__footer">
            <Link to="/" className="cart-page__continue-link">
              Continue shopping
            </Link>
          </div>
        </>
      ) : (
        <div className="cart-page__empty">
          <EmptyState
            title="Your cart is empty"
            description="Browse products and add items to start building your order."
          />

          <Link to="/" className="cart-page__continue-link cart-page__continue-link--centered">
            Explore products
          </Link>
        </div>
      )}
    </section>
  )
}