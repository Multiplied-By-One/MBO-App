import { auth } from "./../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

const useAuthedUser = () => {
  return useAuthState(auth);
};

export default useAuthedUser;
