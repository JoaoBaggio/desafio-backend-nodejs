import { ProductModel } from '../../../../domain/models/product'
import { ListProduct } from '../../../../domain/usecases/list-product'
import { ServerError } from '../../../errors'
import { serverError } from '../../../helpers/http/http-helpers'
import { HttpRequest } from '../../../protocols'
import { ListProductController } from './list-product-controller'

const makeListProduct = (): ListProduct => {
  class ListProductStub implements ListProduct {
    async list (): Promise<ProductModel[]> {
      return await new Promise(resolve => resolve([makeFakeProduct()]))
    }
  }
  return new ListProductStub()
}

const makeFakeProduct = (): ProductModel => ({
  id: 'any_id',
  name: 'any_name',
  description: 'any_description',
  image: 'any_password',
  factor: 'any_factor'
})

const makeFakeRequest = (): HttpRequest => ({
  body: {}
})

interface SutTypes{
  sut: ListProductController
  listProductStub: ListProduct
}

const makeSut = (): SutTypes => {
  const listProductStub = makeListProduct()
  const sut = new ListProductController(listProductStub)

  return {
    sut,
    listProductStub
  }
}

describe('SignUp Controller', () => {
  it('Should call ListProduct with correct values', async () => {
    const { sut, listProductStub } = makeSut()
    const listSpy = jest.spyOn(listProductStub, 'list')
    await sut.handle(makeFakeRequest())
    expect(listSpy).toHaveBeenCalledTimes(1)
  })

  it('Should return 500 if ListProduct throws', async () => {
    const { sut, listProductStub } = makeSut()
    jest.spyOn(listProductStub, 'list').mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => reject(new Error()))
    })
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new ServerError()))
  })
})
