import { ProductModel } from '../../../domain/models/product'
import { AddProductModel } from '../../../domain/usecases/add-product'
import { AddProductRepository } from '../../protocols/db/product/product-repository'
import { DbAddProduct } from './db-add-product'

const makeAddProductRepository = (): AddProductRepository => {
  class AddProductRepositoryStub implements AddProductRepository {
    list: () => Promise<[ProductModel]>
    async add (product: AddProductModel): Promise <ProductModel> {
      return await new Promise(resolve => resolve(makeFakeProduct()))
    }
  }
  return new AddProductRepositoryStub()
}
const makeFakeProductData = (): AddProductModel => ({
  name: 'any_name',
  image: 'any_base64Image',
  description: 'any_description',
  factor: 'A'
})

const makeFakeProduct = (): ProductModel => ({
  id: 'any_id',
  name: 'any_name',
  image: 'any_base64Image',
  description: 'any_description',
  factor: 'A'
})

interface SutTypes{
  sut: DbAddProduct
  addProductRepositoryStub: AddProductRepository

}

const makeSut = (): SutTypes => {
  const addProductRepositoryStub = makeAddProductRepository()
  const sut = new DbAddProduct(addProductRepositoryStub)
  return { sut, addProductRepositoryStub }
}
describe('DbAddProduct', () => {
  it('Should call AddProductRepository with correct values', async () => {
    const { sut, addProductRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addProductRepositoryStub, 'add')
    await sut.add(makeFakeProductData())
    expect(addSpy).toHaveBeenCalledWith(makeFakeProductData())
  })

  it('Should throw if AddProductRepository throws', async () => {
    const { sut, addProductRepositoryStub } = makeSut()
    jest.spyOn(addProductRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.add(makeFakeProductData())
    await expect(promise).rejects.toThrow()
  })
})
