export class UnautorizedError extends Error {
  constructor () {
    super('Unauthorized')
    this.name = 'UnautorizedError'
  }
}
