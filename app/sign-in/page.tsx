import SignInBtns from '@/components/SignInBtns'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'

export default async function SignInPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/dashboard')
  }

  return <SignInBtns />
}
