import { collection } from "firebase/firestore";
import { firestore } from "../../firebase.config";
import useAuthedUser from "./useAuthedUser";

/**
 * Automatically scopes a collection to the currently authed user
 * @param {*} collectionPath
 * @param {*} query
 * @param {*} options
 * @returns
 */
const useUserScopedCollection = (collectionPath) => {
  const [user, userLoading, userError] = useAuthedUser();
  const targetCollection =
    user !== undefined
      ? collection(firestore, `users/${user.uid}/${collectionPath}`)
      : null;

  return [targetCollection, userLoading, userError];
};

export default useUserScopedCollection;
