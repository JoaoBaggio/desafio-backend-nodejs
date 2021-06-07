import { badRequest, ok, serverError } from '../../helpers/http/http-helpers'
import { AddAccount, Authentication, Controller, HttpRequest, HttpResponse, Validation } from './signup-controller-protocols'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authenticaiton: Authentication) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email, password } = httpRequest.body
      await this.addAccount.add({ name, email, password })
      const accessToken = await this.authenticaiton.auth({
        email,
        password
      })
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
