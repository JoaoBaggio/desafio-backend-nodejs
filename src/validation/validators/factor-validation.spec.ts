import { InvalidParamError } from '../../presentation/errors'
import { FactorValidation } from './factor-validation'
const makeSut = (): FactorValidation => {
  return new FactorValidation('factor')
}

describe('CompareFieldValidation', () => {
  it('Should return a InvalidParamError if validation Fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      factor: 'D'
    })
    expect(error).toEqual(new InvalidParamError('factor'))
  })
  it('Should return null if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      factor: 'A'
    })
    expect(error).toBeNull()
  })
})
