import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@test.com.br',
      phone: '9999-8888',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
