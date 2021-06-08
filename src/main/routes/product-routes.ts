/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeAddProductController, makeAddProductToCartController, makeListProductController, makeListProductsFromCartController, makeRemoveProductToCartController } from '../factories/controllers/product/product-controller-factory'

export default (router: Router): void => {
  router.post('/addproduct', adaptRoute(makeAddProductController()))
  router.get('/listproduct', adaptRoute(makeListProductController()))
  router.post('/:id/addtocart', adaptRoute(makeAddProductToCartController()))
  router.delete('/:id/removefromcart', adaptRoute(makeRemoveProductToCartController()))
  router.get('/cart', adaptRoute(makeListProductsFromCartController()))
}
