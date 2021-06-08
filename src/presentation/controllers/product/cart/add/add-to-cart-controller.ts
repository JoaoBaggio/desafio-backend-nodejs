import { AddProductToCart } from '../../../../../domain/usecases/add-product-to-cart'
import { badRequest, ok, serverError } from '../../../../helpers/http/http-helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../../protocols'

export class AddProductToCartController implements Controller {
  constructor (
    private readonly addProductToCart: AddProductToCart,
    private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(httpRequest)
      const { id } = httpRequest.params
      const { accesstoken } = httpRequest.headers
      const error = this.validation.validate({ id, accesstoken })
      if (error) return badRequest(error)
      const product = await this.addProductToCart.add(accesstoken, id)
      return ok({ product })
    } catch (error) {
      return serverError(error)
    }
  }
}
