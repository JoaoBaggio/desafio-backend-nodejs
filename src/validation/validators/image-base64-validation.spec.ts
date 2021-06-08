import { InvalidParamError } from '../../presentation/errors'
import { ImageBase64Validation } from './image-base64-validation'
const makeSut = (): ImageBase64Validation => {
  return new ImageBase64Validation('image')
}

describe('CompareFieldValidation', () => {
  it('Should return a InvalidParamError if validation Fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      image: 'invalidbase64Image'
    })
    expect(error).toEqual(new InvalidParamError('image'))
  })
  it('Should return null if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      image: 'aGVsbG8gd29ybGQ='
    })
    expect(error).toBeNull()
  })
})
