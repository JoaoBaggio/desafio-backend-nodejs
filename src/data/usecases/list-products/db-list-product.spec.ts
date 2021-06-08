import { ProductModel } from '../../../domain/models/product'
import { ListProductRepository } from '../../protocols/db/product/product-repository'
import { DbListProduct } from './db-list-product'

const makeListProductRepository = (): ListProductRepository => {
  class ListProductRepositoryStub implements ListProductRepository {
    async list (): Promise <[ProductModel]> {
      return await new Promise(resolve => resolve([makeFakeProduct()]))
    }
  }
  return new ListProductRepositoryStub()
}

const makeFakeProduct = (): ProductModel => ({
  id: 'any_id',
  name: 'any_name',
  image: 'any_base64Image',
  description: 'any_description',
  value: 50,
  factor: 'A'
})

interface SutTypes{
  sut: DbListProduct
  listProductRepositoryStub: ListProductRepository

}

const makeSut = (): SutTypes => {
  const listProductRepositoryStub = makeListProductRepository()
  const sut = new DbListProduct(listProductRepositoryStub)
  return { sut, listProductRepositoryStub }
}
describe('DbAddProduct', () => {
  it('Should call ListProductRepository once', async () => {
    const { sut, listProductRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(listProductRepositoryStub, 'list')
    await sut.list()
    expect(addSpy).toHaveBeenCalledTimes(1)
  })

  it('Should throw if ListProductRepository throws', async () => {
    const { sut, listProductRepositoryStub } = makeSut()
    jest.spyOn(listProductRepositoryStub, 'list').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.list()
    await expect(promise).rejects.toThrow()
  })
})
