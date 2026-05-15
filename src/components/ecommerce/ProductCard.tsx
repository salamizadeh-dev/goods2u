import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-card__media">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </Link>

      <div className="product-card__content">
        <p className="product-card__category">{product.category}</p>

        <Link
          to={`/products/${product.slug}`}
          className="product-card__title-link"
        >
          <h3 className="product-card__title">{product.name}</h3>
        </Link>

        <p className="product-card__description">{product.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">${product.price}</span>
          <span className="product-card__cta">View details</span>
        </div>
      </div>
    </article>
  )
}