export interface RemoveProductToCart {
  remove: (accesstoken: string, id: string) => Promise <any>
}
