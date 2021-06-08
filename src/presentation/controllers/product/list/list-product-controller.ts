import { ListProduct } from '../../../../domain/usecases/list-product'
import { ok, serverError } from '../../../helpers/http/http-helpers'
import { Controller, HttpRequest, HttpResponse } from './list-product-controller-protocols'

export class ListProductController implements Controller {
  constructor (
    private readonly listProduct: ListProduct) {}

  async handle (_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const products = await this.listProduct.list()
      return ok({ products })
    } catch (error) {
      return serverError(error)
    }
  }
}
