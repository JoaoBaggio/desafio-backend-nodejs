/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeAddProductController } from '../factories/controllers/addProduct/add-product-controller-factory'

export default (router: Router): void => {
  router.post('/addproduct', adaptRoute(makeAddProductController()))
}
