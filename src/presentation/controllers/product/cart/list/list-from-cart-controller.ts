import { ListProductFromCart } from '../../../../../domain/usecases/list-product-from-cart'
import { badRequest, ok, serverError } from '../../../../helpers/http/http-helpers'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../../protocols'

export class ListProductsFromCartController implements Controller {
  constructor (
    private readonly listProductFromCart: ListProductFromCart,
    private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.headers)
      if (error) return badRequest(error)
      const { accesstoken } = httpRequest.headers
      const product = await this.listProductFromCart.list(accesstoken)
      return ok({ product })
    } catch (error) {
      return serverError(error)
    }
  }
}
