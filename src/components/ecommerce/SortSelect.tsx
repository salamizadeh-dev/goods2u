import type { ChangeEvent } from 'react'

interface SortOption {
  label: string
  value: string
}

interface SortSelectProps {
  value: string
  options: SortOption[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function SortSelect({ value, options, onChange }: SortSelectProps) {
  return (
    <label className="sort-select">
      <span className="sort-select__label">Sort by</span>
      <select
        className="sort-select__control"
        value={value}
        onChange={onChange}
        aria-label="Sort products"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}