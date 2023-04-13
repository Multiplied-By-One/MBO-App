import { DocumentData, QuerySnapshot, collection } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from "../../firebase.config";
import useAuthedUser from "./useAuthedUser"

type AccountType = {
  name: string,
  gender: 'male' | 'female' | 'other',
  age: string
} 

type UserScopedCollectionData = {
  data: DocumentData[] | undefined,
  loading: boolean,
  error: Error | undefined,
  snapshot: QuerySnapshot<any> | undefined
}

const useUserScopedCollectionData = (collectionPath: string): UserScopedCollectionData  => {
  const [user, userLoading, userError] = useAuthedUser()
  const collectionQuery = user !== undefined
    ? collection(firestore, `users/${user!.uid}/${collectionPath}`) :
    null
  const [data, collectionLoading, collectionError, snapshot] = useCollectionData(collectionQuery)

  //@todo
  return {
   data: data,
   loading: userLoading || collectionLoading,
   error: userError ?? collectionError,
   snapshot: snapshot
  }
}

export default useUserScopedCollectionData