
import { Controller } from '../../../../presentation/protocols'
import { makeAddProductValidation } from './add-product-validation-factory'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { AddProductController } from '../../../../presentation/controllers/product/add-product-controller'
import { makeDbAddProduct } from '../../usecases/db-add-product-factory'

export const makeAddProductController = (): Controller => {
  return makeLogControllerDecorator(new AddProductController(makeDbAddProduct(), makeAddProductValidation()))
}
