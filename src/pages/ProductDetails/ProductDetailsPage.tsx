import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDetailsCard } from '../../components/ecommerce/ProductDetailsCard'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'

export function ProductDetailsPage() {
  const { slug } = useParams()
  const { addToCart } = useCart()

  const product = useMemo(() => {
    return products.find((item) => item.slug === slug)
  }, [slug])

  if (!product) {
    return (
      <section className="page">
        <PageSectionHeader
          title="Product Details"
          description="View item details before adding to cart."
        />

        <EmptyState
          title="Product not found"
          description="The product you are looking for does not exist."
        />
      </section>
    )
  }

  return (
    <section className="page">
      <PageSectionHeader
        title="Product Details"
        description="View item details before adding to cart."
      />

      <ProductDetailsCard
        product={product}
        onAddToCart={() => addToCart(product)}
      />
    </section>
  )
}