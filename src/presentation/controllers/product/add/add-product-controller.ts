import { AddProduct } from '../../../../domain/usecases/add-product'
import { badRequest, ok, serverError } from '../../../helpers/http/http-helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from './add-product-controller-protocols'

export class AddProductController implements Controller {
  constructor (
    private readonly addProduct: AddProduct,
    private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) return badRequest(error)
      const product = await this.addProduct.add(httpRequest.body)
      return ok({ product })
    } catch (error) {
      return serverError(error)
    }
  }
}
