import { LogErrorRepository } from '../../data/protocols/log-error-repository'
import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  private readonly constroller: Controller
  private readonly logErrorRepository: LogErrorRepository
  constructor (controller: Controller, logErrorRepository: LogErrorRepository) {
    this.constroller = controller
    this.logErrorRepository = logErrorRepository
  }

  async handle (httpRequest: HttpRequest): Promise <HttpResponse> {
    const httpResponse = await this.constroller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError(httpResponse.body.stack)
    }
    return httpResponse
  }
}
