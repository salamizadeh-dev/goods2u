import { PageSectionHeader } from '../../components/ui/PageSectionHeader'

export function ProductsPage() {
  return (
    <section className="page">
      <PageSectionHeader
        title="Products"
        description="Browse modern tech accessories and desk setup essentials."
      />

      <div className="placeholder-card">
        <p>This is the products page.</p>
      </div>
    </section>
  )
}