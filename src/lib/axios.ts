import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // Permitir que o Back-End tenha acesso aos Cookies //
})
