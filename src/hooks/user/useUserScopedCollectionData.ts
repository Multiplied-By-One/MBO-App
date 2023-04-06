import { QuerySnapshot, collection } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from "../../firebase.config";
import useAuthedUser from "./useAuthedUser"
import { FixMeLater } from "../../types/FixMeLater";

type UserScopedCollectionData = {
  data: FixMeLater,
  loading: boolean,
  error: Error | undefined,
  snapshot: QuerySnapshot<any> | undefined
}
const useUserScopedCollectionData = (collectionPath: FixMeLater, query: FixMeLater, options: FixMeLater): UserScopedCollectionData  => {
  const [user, userLoading, userError] = useAuthedUser()
  const collectionQuery = user !== undefined
    ? collection(firestore, `users/${user.uid}/${collectionPath}`) :
    null
  const [data, collectionLoading, collectionError, snapshot] = useCollectionData(collectionQuery, options)

  //@todo
  return [
    data,
    userLoading || collectionLoading,
    userError ?? collectionError,
    snapshot
  ]
}

export default useUserScopedCollectionData