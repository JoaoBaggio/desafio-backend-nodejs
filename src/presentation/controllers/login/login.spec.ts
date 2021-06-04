import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helpers'
import { LoginController } from './login'

describe('Login Controller', () => {
  it('Should Return 400 if no email is provided', async () => {
    const sut = new LoginController()
    const httpResquest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpResquest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })

  it('Should Return 400 if no password is provided', async () => {
    const sut = new LoginController()
    const httpResquest = {
      body: {
        email: 'any_email'
      }
    }
    const httpResponse = await sut.handle(httpResquest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })
})
