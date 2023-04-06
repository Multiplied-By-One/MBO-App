import { auth } from '../../firebase.config';
import { AuthStateHook, useAuthState } from 'react-firebase-hooks/auth'

const useAuthedUser = (): AuthStateHook => {
    return useAuthState(auth)
}

export default useAuthedUser