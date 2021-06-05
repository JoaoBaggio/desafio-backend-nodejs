import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredFieldValidation', () => {
  it('Should return a MissingParamError if validation Fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ email: 'any_email' })
    expect(error).toEqual(new MissingParamError('field'))
  })
  it('', () => {

  })
})
