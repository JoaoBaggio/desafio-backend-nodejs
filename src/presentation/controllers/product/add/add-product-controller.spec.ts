import { ProductModel } from '../../../../domain/models/product'
import { AddProduct, AddProductModel } from '../../../../domain/usecases/add-product'
import { MissingParamError, ServerError } from '../../../errors'
import { badRequest, serverError } from '../../../helpers/http/http-helpers'
import { HttpRequest } from '../../../protocols'
import { AddProductController } from './add-product-controller'
import { Validation } from './add-product-controller-protocols'

const makeAddProduct = (): AddProduct => {
  class AddProductStub implements AddProduct {
    async add (account: AddProductModel): Promise<ProductModel> {
      return await new Promise(resolve => resolve(makeFakeProduct()))
    }
  }
  return new AddProductStub()
}

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error | null {
      return null
    }
  }
  return new ValidationStub()
}

const makeFakeProduct = (): ProductModel => ({
  id: 'any_id',
  name: 'any_name',
  description: 'any_description',
  image: 'any_password',
  value: 50,
  factor: 'any_factor'
})

const makeFakeRequest = (): HttpRequest => ({
  body: {
    name: 'any_name',
    description: 'any_description',
    image: 'any_password',
    value: 50,
    factor: 'any_factor'
  }
})

interface SutTypes{
  sut: AddProductController
  addProductStub: AddProduct
  validationStub: Validation
}

const makeSut = (): SutTypes => {
  const addProductStub = makeAddProduct()
  const validationStub = makeValidation()
  const sut = new AddProductController(addProductStub, validationStub)

  return {
    sut,
    addProductStub,
    validationStub
  }
}

describe('SignUp Controller', () => {
  it('Should call Validation with correct value', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    await sut.handle(makeFakeRequest())
    expect(validateSpy).toHaveBeenCalledWith(makeFakeRequest().body)
  })

  it('Should return 400 if validation returns an error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  })

  it('Should call AddProduct with correct values', async () => {
    const { sut, addProductStub } = makeSut()
    const addSpy = jest.spyOn(addProductStub, 'add')
    await sut.handle(makeFakeRequest())
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      description: 'any_description',
      image: 'any_password',
      value: 50,
      factor: 'any_factor'
    })
  })

  it('Should return 500 if AddProduct throws', async () => {
    const { sut, addProductStub } = makeSut()
    jest.spyOn(addProductStub, 'add').mockImplementationOnce(async () => {
      return await new Promise((resolve, reject) => reject(new Error()))
    })
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual(serverError(new ServerError()))
  })
})
