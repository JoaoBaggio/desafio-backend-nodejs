import { Router } from 'express'
import { makeSignUpController } from '../factories'
import { adaptRoute } from '../adapters'
export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/signup', adaptRoute(makeSignUpController()))
}
