
import { RequiredFieldValidation, ValidationComposite, ImageBase64Validation } from '../../../../validation/validators'
import { Validation } from '../../../../presentation/protocols/validation'
import { FactorValidation } from '../../../../validation/validators/factor-validation'

export const makeAddProductValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'description', 'image', 'factor']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new ImageBase64Validation('image'))
  validations.push(new FactorValidation('factor'))

  return new ValidationComposite(validations)
}
