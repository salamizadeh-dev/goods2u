export type ProductCategory =
  | 'Keyboards'
  | 'Audio'
  | 'Desk Setup'
  | 'Accessories'

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  price: number
  image: string
  summary: string
  description: string
}