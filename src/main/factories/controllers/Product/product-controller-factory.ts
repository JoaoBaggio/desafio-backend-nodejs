
import { Controller } from '../../../../presentation/protocols'
import { makeAddProductToCartValidation, makeAddProductValidation, makeListProductsFromCartValidation } from './product-validation-factory'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { AddProductController } from '../../../../presentation/controllers/product/add/add-product-controller'
import { ListProductController } from '../../../../presentation/controllers/product/list/list-product-controller'
import { makeDbAddProduct } from '../../usecases/db-add-product-factory'
import { makeDbListProducts } from '../../usecases/db-list-product-factory'
import { AddProductToCartController } from '../../../../presentation/controllers/product/cart/add/add-to-cart-controller'
import { KsAddProductToCart } from '../../../../data/usecases/add-product-to-cart/add-product-to-cart'
import { RedisRepository } from '../../../../infra/db/redis/redis'
import { KsListProductCart } from '../../../../data/usecases/list-products-cart/list-products-cart'
import { ListProductsFromCartController } from '../../../../presentation/controllers/product/cart/list/list-from-cart-controller'

export const makeAddProductController = (): Controller => {
  return makeLogControllerDecorator(new AddProductController(makeDbAddProduct(), makeAddProductValidation()))
}

export const makeListProductController = (): Controller => {
  return makeLogControllerDecorator(new ListProductController(makeDbListProducts()))
}

export const makeAddProductToCartController = (): Controller => {
  const keyServiceRepository = new RedisRepository()
  const ksAddProductToCart = new KsAddProductToCart(keyServiceRepository)
  return makeLogControllerDecorator(new AddProductToCartController(ksAddProductToCart, makeAddProductToCartValidation()))
}

export const makeListProductsFromCartController = (): Controller => {
  const keyServiceRepository = new RedisRepository()
  const ksListProductsFromCart = new KsListProductCart(keyServiceRepository)
  return makeLogControllerDecorator(new ListProductsFromCartController(ksListProductsFromCart, makeListProductsFromCartValidation()))
}
