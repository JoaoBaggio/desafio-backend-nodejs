import { AddProductRepository } from '../../../../data/protocols/db/product/add-product-repository'
import { ProductModel } from '../../../../domain/models/product'
import { AddProductModel } from '../../../../domain/usecases/add-product'
import { Product } from '../../../../domain/models/product/product'


export class ProductPostgresRepository implements AddProductRepository {
    async add(product: AddProductModel): Promise<ProductModel> {
        return await Product.query().insert(product)
    }
}
