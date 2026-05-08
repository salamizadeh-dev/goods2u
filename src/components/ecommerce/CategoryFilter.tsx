import type { ProductCategory } from '../../types/product'

type CategoryFilterValue = 'All' | ProductCategory

interface CategoryFilterProps {
  categories: CategoryFilterValue[]
  selectedCategory: CategoryFilterValue
  onSelect: (category: CategoryFilterValue) => void
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="category-filter" role="group" aria-label="Product categories">
      {categories.map((category) => {
        const isActive = selectedCategory === category

        return (
          <button
            key={category}
            type="button"
            className={
              isActive
                ? 'category-filter__button category-filter__button--active'
                : 'category-filter__button'
            }
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}