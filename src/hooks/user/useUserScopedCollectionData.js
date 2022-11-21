import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../firebase.config";
import useAuthedUser from "./useAuthedUser";

/**
 * Automatically scopes a collection to the currently authed user
 * @param {*} collectionPath
 * @param {*} query
 * @param {*} options
 * @returns
 */
const useUserScopedCollectionData = (collectionPath, query, options) => {
  const [user, userLoading, userError] = useAuthedUser();
  const collectionQuery =
    user !== undefined
      ? collection(firestore, `users/${user.uid}/${collectionPath}`)
      : null;
  const [data, collectionLoading, collectionError, snapshot] =
    useCollectionData(collectionQuery, options);

  return [
    data,
    userLoading || collectionLoading,
    userError ?? collectionError,
    snapshot,
  ];
};

export default useUserScopedCollectionData;
