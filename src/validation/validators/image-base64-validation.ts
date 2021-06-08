import { Validation } from '../../presentation/protocols'
import isBase64 from 'is-base64'
import { InvalidParamError } from '../../presentation/errors'
export class ImageBase64Validation implements Validation {
  validate (image: any): Error | null {
    const isValid = isBase64(image)
    if (!isValid) return new InvalidParamError('image')
    return null
  }
}
