import { http, HttpResponse } from 'msw'

export const signInMock = http.post('/authenticate', () => {
  const response = new HttpResponse(null, { status: 401 })

  console.log(response)

  return response
})
