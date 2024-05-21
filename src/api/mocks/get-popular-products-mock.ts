import { http, HttpResponse } from 'msw'

import { getPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  getPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { amount: 1, product: 'Pizza 01' },
    { amount: 2, product: 'Pizza 02' },
    { amount: 3, product: 'Pizza 03' },
    { amount: 10, product: 'Pizza 04' },
  ])
})
