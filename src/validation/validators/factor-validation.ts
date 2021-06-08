import { Validation } from '../../presentation/protocols'
import { InvalidParamError } from '../../presentation/errors'
export class FactorValidation implements Validation {
  constructor (private readonly fieldName: string) {}
  validate (input: any): Error | null {
    const isValid = ['A', 'B', 'C'].includes(input[this.fieldName])
    if (!isValid) return new InvalidParamError(this.fieldName)
    return null
  }
}
