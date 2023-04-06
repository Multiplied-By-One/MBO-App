import { collection } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import useAuthedUser from "./useAuthedUser"
import { FixMeLater } from "../../types/FixMeLater";

const useUserScopedCollection = (collectionPath: FixMeLater) => {
  const [user, userLoading, userError] = useAuthedUser()
  const targetCollection = user !== undefined
    ? collection(firestore, `users/${user!.uid}/${collectionPath}`) :
    null

  //@todo return type
  return [
    targetCollection,
    userLoading,
    userError
  ]
}

export default useUserScopedCollection