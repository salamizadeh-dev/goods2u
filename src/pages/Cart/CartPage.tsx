import { CartItemCard } from '../../components/ecommerce/CartItemCard'
import { CartSummary } from '../../components/ecommerce/CartSummary'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'
import { useCart } from '../../context/CartContext'

export function CartPage() {
  const {
    cartItems,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart()

  return (
    <section className="page">
      <PageSectionHeader
        title="Cart"
        description="Review selected items and manage quantities."
      />

      {cartItems.length > 0 ? (
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
      ) : (
        <EmptyState
          title="Your cart is empty"
          description="Add a product to your cart to see it here."
        />
      )}
    </section>
  )
}