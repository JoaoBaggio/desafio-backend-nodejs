/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeCheckoutController } from '../factories/controllers/checkout/checkout-controller-factory'

export default (router: Router): void => {
  router.post('/checkout', adaptRoute(makeCheckoutController()))
}
