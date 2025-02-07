import { Validation } from '../../presentation/protocols'
import isBase64 from 'is-base64'
import { InvalidParamError } from '../../presentation/errors'
export class ImageBase64Validation implements Validation {
  constructor (private readonly fieldName: string) {}
  validate (input: any): Error | null {
    const isValid = isBase64(input[this.fieldName])
    if (!isValid) return new InvalidParamError(this.fieldName)
    return null
  }
}
