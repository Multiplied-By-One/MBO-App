import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase.config'

function LoginPage() {
  const [
    signInWithGoogle,
    user,
    loading,
    error
  ] = useSignInWithGoogle(auth)
  
  return (
    <>
      <div>LoginPage</div>
      <button onClick={() => signInWithGoogle(
        ['https://www.googleapis.com/auth/contacts.readonly']
      )}>Sign In with Google</button>
    </>
  )
}

export default LoginPage