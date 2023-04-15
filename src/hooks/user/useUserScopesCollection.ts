import { CollectionReference, DocumentData, collection } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import useAuthedUser from "./useAuthedUser"

type UserScopedCollection = {
  targetCollection: CollectionReference<DocumentData> | null,
  userLoading: boolean,
  userError: Error | undefined
}

const useUserScopedCollection = (collectionPath: string): UserScopedCollection => {
  const [ user, userLoading, userError ] = useAuthedUser()
  const targetCollection = user !== undefined
    ? collection(firestore, `users/${user!.uid}/${collectionPath}`) :
    null

  return {
    targetCollection: targetCollection,
    userLoading: userLoading,
    userError: userError
  }
}

export default useUserScopedCollection