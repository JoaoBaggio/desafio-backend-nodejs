import { MissingParamError } from '../../presentation/errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}

describe('RequiredFieldValidation', () => {
  it('Should return a MissingParamError if validation Fails', () => {
    const sut = makeSut()
    const error = sut.validate({ email: 'any_email' })
    expect(error).toEqual(new MissingParamError('field'))
  })
  it('Should not return if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_field' })
    expect(error).toBeFalsy()
  })
})
