import { doc, updateDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { firestore } from "../../firebase.config";
import useAuthedUser from "./useAuthedUser";

const FirestoreDocumentData = () => {
  const [user, userLoading, userError] = useAuthedUser();
  const docRef = user !== undefined ? doc(firestore, "users", user.uid) : undefined;
  const [value, loading, error] = useDocument(docRef);
  //TODO: remove this AFTER TESTING
  console.log("data", value?.data())

  return [docRef, value, loading || userLoading, error || userError];
};

export default FirestoreDocumentData;