
import { LogPostgresRepository } from '../../../infra/db/postgresql/log/log-postgres-repository'
import { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorator/log-controller-decorator'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new (LogPostgresRepository)()
  return new LogControllerDecorator(controller, logMongoRepository)
}
