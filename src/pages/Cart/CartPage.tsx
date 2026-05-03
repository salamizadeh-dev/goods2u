import { PageSectionHeader } from '../../components/ui/PageSectionHeader'

export function CartPage() {
  return (
    <section className="page">
      <PageSectionHeader
        title="Cart"
        description="Review selected items and manage quantities."
      />

      <div className="placeholder-card">
        <p>This is the cart page.</p>
      </div>
    </section>
  )
}