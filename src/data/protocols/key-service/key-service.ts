export interface KeyServiceRepository {
  get: (key: string) => Promise <any[] | null>
  set: (key: string, data: string) => Promise <boolean | null>
  delete: (key: string) => Promise <boolean>
}
