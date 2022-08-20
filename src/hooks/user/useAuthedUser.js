import { auth } from './../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore';

const useAuthedUser = () => {
    const [user, loading, error] = useAuthState(auth)
    
    


    return [
        user,
        loading,
        error
    ]
    
}

export default useAuthedUser