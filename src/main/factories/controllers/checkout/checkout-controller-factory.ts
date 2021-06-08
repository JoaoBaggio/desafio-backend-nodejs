import { KsDeleteCart } from '../../../../data/usecases/delete-cart/delete-cart'
import { KsListProductCart } from '../../../../data/usecases/list-products-cart/list-products-cart'
import { RedisRepository } from '../../../../infra/db/redis/redis'
import { CheckOutController } from '../../../../presentation/controllers/checkout/checkout-controller'
import { Controller } from '../../../../presentation/protocols'
import { PagarMe } from '../../../../utils/api/pagar.me'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { makeListProductsFromCartValidation } from '../product/product-validation-factory'

export const makeCheckoutController = (): Controller => {
  const keyServiceRepository = new RedisRepository()
  const ksListProductsFromCart = new KsListProductCart(keyServiceRepository)
  const ksListDeleteCart = new KsDeleteCart(keyServiceRepository)
  const pagarMeApi = new PagarMe()
  return makeLogControllerDecorator(new CheckOutController(ksListProductsFromCart, ksListDeleteCart, makeListProductsFromCartValidation(), pagarMeApi))
}
