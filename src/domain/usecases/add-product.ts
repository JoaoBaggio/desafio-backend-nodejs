import { ProductModel } from '../models/product'

export interface AddProductModel {
  name: string
  description: string
  image: string
  factor: string
}

export interface AddProduct {
  add: (product: AddProductModel) => Promise <ProductModel | null>
}
