import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Page from '../../components/page/Page'
import { auth } from '../../firebase.config'

function LoginPage() {
  const [
    signInWithGoogle,
  ] = useSignInWithGoogle(auth)
  
  return (
    <Page title='Login'>
      <div>LoginPage</div>
      <button onClick={() => signInWithGoogle(
        ['https://www.googleapis.com/auth/contacts.readonly']
      )}>Sign In with Google</button>
    </Page>
  )
}

export default LoginPage