/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { KeyServiceRepository } from '../../protocols/key-service/key-service'
import { DeleteCart } from '../../../domain/usecases/delete-cart'

export class KsDeleteCart implements DeleteCart {
  constructor (
    private readonly keyServiceRepository: KeyServiceRepository) {}

  async delete (accesstoken: string): Promise<Object> {
    return await this.keyServiceRepository.delete(accesstoken)
  }
}
