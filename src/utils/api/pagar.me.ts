import axios, { AxiosResponse } from 'axios'

import env from '../../main/config/env'

const { pagarmeURL, pagarmeToken } = env

const pagarMe = axios.create({
  baseURL: pagarmeURL,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json'
  }
})

export class PagarMe {
  async post (payload: any): Promise<AxiosResponse<any>> {
    const { cart, metrics } = payload
    const parsedCart = this.parseCartItens(cart)
    const body = {
      api_key: pagarmeToken,
      amount: metrics.total * 100,
      card_number: '4111111111111111',
      card_cvv: '123',
      card_expiration_date: '0922',
      card_holder_name: 'João das Neves',
      customer: {
        external_id: '#3311',
        name: 'João das Neves Braulio',
        type: 'individual',
        country: 'br',
        email: 'joaodasneves@got.com',
        documents: [
          {
            type: 'cpf',
            number: '00000000000'
          }
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1965-01-01'
      },
      billing: {
        name: 'João das Neves',
        address: {
          country: 'br',
          state: 'sp',
          city: 'Cotia',
          neighborhood: 'Rio Cotia',
          street: 'Rua Matrix',
          street_number: '9999',
          zipcode: '06714360'
        }
      },
      shipping: {
        name: 'Neo Reeves',
        fee: 1000,
        delivery_date: '2000-12-21',
        expedited: true,
        address: {
          country: 'br',
          state: 'sp',
          city: 'Cotia',
          neighborhood: 'Rio Cotia',
          street: 'Rua Matrix',
          street_number: '9999',
          zipcode: '06714360'
        }
      },
      items: parsedCart
    }
    const resp = await pagarMe.post('', JSON.stringify(body))
    return resp
  }

  parseCartItens = (cart: any[]): Object[] => {
    const parsedCart: Object[] = []
    for (const item of cart) {
      parsedCart.push({
        id: String(item.id),
        title: item.name,
        unit_price: item.value,
        quantity: item.amount,
        tangible: true
      })
    }
    return parsedCart
  }
}
