import { Button } from '../ui/Button'
import { QuantityControl } from './QuantityControl'
import type { Product } from '../../types/product'

interface ProductDetailsCardProps {
  product: Product
  quantity: number
  onDecreaseQuantity: () => void
  onIncreaseQuantity: () => void
  onAddToCart: () => void
}

export function ProductDetailsCard({
  product,
  quantity,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onAddToCart,
}: ProductDetailsCardProps) {
  return (
    <article className="product-details-card">
      <div className="product-details-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-details-card__image"
        />
      </div>

      <div className="product-details-card__content">
        <p className="product-details-card__category">{product.category}</p>

        <h2 className="product-details-card__title">{product.name}</h2>

        <p className="product-details-card__summary">{product.summary}</p>

        <p className="product-details-card__price">${product.price}</p>

        <div className="product-details-card__meta">
          <p className="product-details-card__availability">In stock • Ready to ship</p>
          <p className="product-details-card__shipping">Free shipping on orders over $100</p>
          <p className="product-details-card__returns">30-day returns on all eligible items</p>
        </div>

        <p className="product-details-card__description">{product.description}</p>

        <div className="product-details-card__actions">
          <QuantityControl
            quantity={quantity}
            onDecrease={onDecreaseQuantity}
            onIncrease={onIncreaseQuantity}
          />

          <Button onClick={onAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </article>
  )
}