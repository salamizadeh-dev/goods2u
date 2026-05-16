import type { CartItem } from '../../types/cart'
import { QuantityControl } from './QuantityControl'

interface CartItemCardProps {
  item: CartItem
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}

export function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemCardProps) {
  const lineTotal = item.product.price * item.quantity

  return (
    <article className="cart-item-card">
      <div className="cart-item-card__media">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="cart-item-card__image"
        />
      </div>

      <div className="cart-item-card__content">
        <div className="cart-item-card__top">
          <div className="cart-item-card__info">
            <p className="cart-item-card__category">{item.product.category}</p>
            <h3 className="cart-item-card__title">{item.product.name}</h3>
            <p className="cart-item-card__unit-price">
              Unit price: ${item.product.price.toFixed(2)}
            </p>
          </div>

          <button
            type="button"
            className="cart-item-card__remove"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>

        <p className="cart-item-card__description">{item.product.summary}</p>

        <div className="cart-item-card__bottom">
          <QuantityControl
            quantity={item.quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />

          <div className="cart-item-card__line-total">
            <span>Total</span>
            <strong>${lineTotal.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </article>
  )
}