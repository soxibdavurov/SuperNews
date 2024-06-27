'use client'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function SignInBtns() {
  return (
    <div className="text-center mt-8">
      <h1>Sign In</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn('github')}
          className="flex items-centerborder p-4 rounded-full gap-4 hover:bg-slate-300/25 transition"
        >
          <span>
            <Image
              src={'github-logo.svg'}
              alt="github"
              width={30}
              height={30}
            />
          </span>
          Sign In With Github
        </button>

        <button
          onClick={() => signIn('google')}
          className="flex items-centerborder p-4 rounded-full gap-4 hover:bg-slate-300/25 transition"
        >
          <span>
            <Image
              src={'google-logo.svg'}
              alt="google"
              width={30}
              height={30}
            />
          </span>
          Sign In With Google
        </button>
      </div>
    </div>
  )
}
