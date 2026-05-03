import { PageSectionHeader } from '../../components/ui/PageSectionHeader'

export function ProductDetailsPage() {
  return (
    <section className="page">
      <PageSectionHeader
        title="Product Details"
        description="View item details before adding to cart."
      />

      <div className="placeholder-card">
        <p>This is the product details page.</p>
      </div>
    </section>
  )
}