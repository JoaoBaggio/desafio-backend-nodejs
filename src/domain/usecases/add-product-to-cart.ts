export interface AddProductToCart {
  add: (accesstoken: string, id: string) => Promise <any>
}
