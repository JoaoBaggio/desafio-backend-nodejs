import { DeleteCart } from '../../../domain/usecases/delete-cart'
import { ListProductFromCart } from '../../../domain/usecases/list-product-from-cart'
import { badRequest, ok, serverError } from '../../helpers/http/http-helpers'
import { Api } from '../../protocols/api'
import { Controller, HttpRequest, HttpResponse, Validation } from './checkout-controller-protocols'

export class CheckOutController implements Controller {
  constructor (
    private readonly listProductFromCart: ListProductFromCart,
    private readonly deleteCart: DeleteCart,
    private readonly validation: Validation,
    private readonly api: Api) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.headers)
      if (error) return badRequest(error)
      const { accesstoken } = httpRequest.headers
      const products = await this.listProductFromCart.list(accesstoken)
      const apiResponse = await this.api.post(products)
      if (apiResponse.status === 200) {
        await this.deleteCart.delete(accesstoken)
      }
      return ok(apiResponse.statusText)
    } catch (error) {
      return serverError(error)
    }
  }
}
