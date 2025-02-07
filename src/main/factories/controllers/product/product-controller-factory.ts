
import { Controller } from '../../../../presentation/protocols'
import { makeAddProductValidation, makeAlterProductToCartValidation, makeListProductsFromCartValidation } from './product-validation-factory'
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
import { KsRemoveProductToCart } from '../../../../data/usecases/rm-product-to-cart/rm-product-to-cart'
import { RemoveProductToCartController } from '../../../../presentation/controllers/product/cart/remove/remove-to-cart-controller'

export const makeAddProductController = (): Controller => {
  return makeLogControllerDecorator(new AddProductController(makeDbAddProduct(), makeAddProductValidation()))
}

export const makeListProductController = (): Controller => {
  return makeLogControllerDecorator(new ListProductController(makeDbListProducts()))
}

export const makeAddProductToCartController = (): Controller => {
  const keyServiceRepository = new RedisRepository()
  const ksAddProductToCart = new KsAddProductToCart(keyServiceRepository)
  return makeLogControllerDecorator(new AddProductToCartController(ksAddProductToCart, makeAlterProductToCartValidation()))
}

export const makeRemoveProductToCartController = (): Controller => {
  const keyServiceRepository = new RedisRepository()
  const ksRemoveProductToCart = new KsRemoveProductToCart(keyServiceRepository)
  return makeLogControllerDecorator(new RemoveProductToCartController(ksRemoveProductToCart, makeAlterProductToCartValidation()))
}

export const makeListProductsFromCartController = (): Controller => {
  const keyServiceRepository = new RedisRepository()
  const ksListProductsFromCart = new KsListProductCart(keyServiceRepository)
  return makeLogControllerDecorator(new ListProductsFromCartController(ksListProductsFromCart, makeListProductsFromCartValidation()))
}
