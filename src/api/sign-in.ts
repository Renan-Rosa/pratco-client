import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
}

// Autenticação
export async function signIn({ email }: SignInBody) {
  await api.post('/authenticate', { email })
}
