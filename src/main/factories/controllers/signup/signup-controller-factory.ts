
import { SignUpController } from '../../../../presentation/controllers/signup/signup-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { makeDbAddAccout } from '../../usecases/db-add-account-factory'
import { makeDbAuthentication } from '../../usecases/db-authentication-factory'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUpController = (): Controller => {
  return makeLogControllerDecorator(new SignUpController(makeDbAddAccout(), makeSignUpValidation(), makeDbAuthentication()))
}
