
import { storage } from "../../firebase.config";
import useAuthedUser from "./useAuthedUser";
import { useCallback } from "react";
import { useUploadFile } from 'react-firebase-hooks/storage';
import { ref as storageRef } from "firebase/storage";


export const useUserScopedUploadFile = () => {
  const [user, userLoading, userError] = useAuthedUser();
  const [uploadFile, uploading, snapshot, uploadError] = useUploadFile()
  
  const uploadUserScopedFile = useCallback(async (file, fileName, fileOptions = {}) => {
    // In theory a fileRef should always be available, but if it's not, we'll just return
    if (!user?.uid) return;
    const fileRef = storageRef(storage, "users/" + user.uid + "/" + fileName)
    console.log(fileRef)
    return await uploadFile(fileRef, file, fileOptions)
  }, [user])
    
  return {
    loading: userLoading,
    error: userError,
    uploadFile: uploadUserScopedFile,
    uploading,
    uploadError,
    snapshot
  };
};