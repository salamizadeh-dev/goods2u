import { Button } from '../ui/Button'
import type { Product } from '../../types/product'

interface ProductDetailsCardProps {
  product: Product
  onAddToCart: () => void
}

export function ProductDetailsCard({
  product,
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
        <p className="product-details-card__price">${product.price}</p>
        <p className="product-details-card__description">{product.description}</p>

        <Button onClick={onAddToCart}>Add to Cart</Button>
      </div>
    </article>
  )
}