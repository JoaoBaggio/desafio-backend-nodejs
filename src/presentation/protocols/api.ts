import { AxiosResponse } from 'axios'

export interface Api {
  post: (payload: any) => Promise<AxiosResponse<any>>
}
