import { useMemo, useState } from 'react'
import { CategoryFilter } from '../../components/ecommerce/CategoryFilter'
import { ProductGrid } from '../../components/ecommerce/ProductGrid'
import { SortSelect } from '../../components/ecommerce/SortSelect'
import { EmptyState } from '../../components/ui/EmptyState'
import { PageSectionHeader } from '../../components/ui/PageSectionHeader'
import { products } from '../../data/products'
import type { ProductCategory } from '../../types/product'

type CategoryFilterValue = 'All' | ProductCategory
type SortValue = 'default' | 'price-asc' | 'price-desc'

const categories: CategoryFilterValue[] = [
  'All',
  'Keyboards',
  'Audio',
  'Desk Setup',
  'Accessories',
]

const sortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
]

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilterValue>('All')
  const [selectedSort, setSelectedSort] = useState<SortValue>('default')

  const filteredAndSortedProducts = useMemo(() => {
    const filtered =
      selectedCategory === 'All'
        ? products
        : products.filter((product) => product.category === selectedCategory)

    const sorted = [...filtered]

    if (selectedSort === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price)
    }

    if (selectedSort === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price)
    }

    return sorted
  }, [selectedCategory, selectedSort])

  return (
    <section className="page">
      <PageSectionHeader
        title="Products"
        description="Browse modern tech accessories and desk setup essentials."
      />

      <div className="products-toolbar">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <SortSelect
          value={selectedSort}
          options={sortOptions}
          onChange={(event) => setSelectedSort(event.target.value as SortValue)}
        />
      </div>

      {filteredAndSortedProducts.length > 0 ? (
        <ProductGrid products={filteredAndSortedProducts} />
      ) : (
        <EmptyState
          title="No products found"
          description="There are no products in this category right now. Try another category to explore more items."
          action={
            <button
              type="button"
              className="button button--secondary"
              onClick={() => {
                setSelectedCategory('All')
                setSelectedSort('default')
              }}
            >
              Reset filters
            </button>
          }
        />
      )}
    </section>
  )
}