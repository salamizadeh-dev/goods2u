import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.slug}`} className="product-card__image-link">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </Link>

      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>

        <Link to={`/products/${product.slug}`} className="product-card__title-link">
          <h3 className="product-card__title">{product.name}</h3>
        </Link>

        <p className="product-card__description">{product.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">${product.price}</span>
        </div>
      </div>
    </article>
  )
}