import { LogErrorRepository } from '../../../../data/protocols/db/log/log-error-repository'
import { Log } from '../../../../domain/models/log/log'

export class LogPostgresRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    await Log.query().insertGraph({stack})
  }
}
