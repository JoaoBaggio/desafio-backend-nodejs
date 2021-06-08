import { RemoveProductToCart } from '../../../../../domain/usecases/remove-product-to-cart'
import { badRequest, ok, serverError } from '../../../../helpers/http/http-helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../../protocols'

export class RemoveProductToCartController implements Controller {
  constructor (
    private readonly removeProductToCart: RemoveProductToCart,
    private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const { accesstoken } = httpRequest.headers
      const error = this.validation.validate({ id, accesstoken })
      if (error) return badRequest(error)
      await this.removeProductToCart.remove(accesstoken, id)
      return ok({})
    } catch (error) {
      return serverError(error)
    }
  }
}
