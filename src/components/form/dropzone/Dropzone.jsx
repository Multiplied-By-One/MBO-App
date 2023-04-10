import { useDropzone } from "react-dropzone"
import CustomContainer from "../../container/CustomContainer"
import CustomButton from "../../button/CustomButton"
import { useUserScopedUploadFile } from "../../../hooks/user/useUserScopedUploadFile"
import { CircularProgress } from "@mui/material"
import { useEffect } from "react"
/**
 * React Dropzone component
 * @param {} param0 
 * @returns 
 */
const Dropzone = ({setFieldValue}) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: {'image/*': []},
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFieldValue(acceptedFiles[0])
    }
  })

  const hasAcceptedFiles = acceptedFiles.length > 0

  // @todo can we begin migrating this towards React 18 Suspense?
  //if(loading) return <CircularProgress style={{margin: "auto"}}></CircularProgress>

  return (
    
    <CustomContainer>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {hasAcceptedFiles && <p>Files: {acceptedFiles.map((file) => file.name).join(", ")}</p>}
        {!hasAcceptedFiles && <p>{isDragActive ? "Drop the files here ..." : "Drag 'n' drop some files here, or click to select files"}</p>}
       
      </div>
    </CustomContainer>
  )
}

export default Dropzone