/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeAddProductController, makeAddProductToCartController, makeListProductController } from '../factories/controllers/Product/product-controller-factory'

export default (router: Router): void => {
  router.post('/addproduct', adaptRoute(makeAddProductController()))
  router.get('/listproduct', adaptRoute(makeListProductController()))
  router.post('/:id/addtocart', adaptRoute(makeAddProductToCartController()))
}
