import { useMemo, useState } from 'react'
import { CategoryFilter } from '../../components/ecommerce/CategoryFilter'
import { ProductGrid } from '../../components/ecommerce/ProductGrid'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'
import { products } from '../../data/products'
import type { ProductCategory } from '../../types/product'

type CategoryFilterValue = 'All' | ProductCategory

const categories: CategoryFilterValue[] = [
  'All',
  'Keyboards',
  'Audio',
  'Desk Setup',
  'Accessories',
]

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilterValue>('All')

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="page">
      <PageSectionHeader
        title="Products"
        description="Browse modern tech accessories and desk setup essentials."
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <EmptyState
          title="No products found"
          description="There are no products in this category right now. Try another category to explore more items."
          action={
            <button
              type="button"
              className="button button--secondary"
              onClick={() => setSelectedCategory('All')}
            >
              View all products
            </button>
          }
        />
      )}
    </section>
  )
}