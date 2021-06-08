import redis from 'redis'
import { KeyServiceRepository } from '../../../data/protocols/key-service/key-service'
import env from '../../../main/config/env'

export class RedisRepository implements KeyServiceRepository {
  private readonly client = redis.createClient(Number(env.redisPort), env.redisHost)
  async get (key: string): Promise<any | null> {
    return await new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err ?? reply === null) {
          resolve(null)
        } else {
          resolve(JSON.parse(reply))
        }
      })
    })
  }

  async set (key: string, data: string): Promise<boolean | null> {
    return await new Promise((resolve, reject) => {
      this.client.set(key, data, (err, reply) => {
        if (err ?? reply === null) {
          resolve(null)
        } else {
          resolve(true)
        }
      })
    })
  }

  async delete (key: string): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      this.client.del(key, (err, reply) => {
        if (err ?? reply === null) {
          resolve(false)
        } else {
          resolve(true)
        }
      })
    })
  }
}
