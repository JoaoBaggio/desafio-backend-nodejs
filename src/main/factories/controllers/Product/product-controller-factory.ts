
import { Controller } from '../../../../presentation/protocols'
import { makeAddProductValidation } from './product-validation-factory'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { AddProductController } from '../../../../presentation/controllers/product/add/add-product-controller'
import { ListProductController } from '../../../../presentation/controllers/product/list/list-product-controller'
import { makeDbAddProduct } from '../../usecases/db-add-product-factory'
import { makeDbListProducts } from '../../usecases/db-list-product-factory'

export const makeAddProductController = (): Controller => {
  return makeLogControllerDecorator(new AddProductController(makeDbAddProduct(), makeAddProductValidation()))
}

export const makeListProductController = (): Controller => {
  return makeLogControllerDecorator(new ListProductController(makeDbListProducts()))
}
