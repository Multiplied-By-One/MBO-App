import { Button, CircularProgress, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from "@mui/material"
import Page from "../../components/page/Page"
import * as yup from "yup"
import { useFormik } from "formik"
import useUserScopedCollection from "../../hooks/user/useUserScopesCollection"
import { addDoc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Dropzone from "../../components/form/dropzone/Dropzone"
import { useUserScopedUploadFile } from "../../hooks/user/useUserScopedUploadFile"

const eyeAccountCreationSchema = yup.object({
  name: yup
    .string('Name must be a string')
    .max(100, "Name must be less than 100 characters")
    .required("Name is a required field"),
  gender: yup
    .string()
    .oneOf(['male', 'female', 'other']),
  age: yup
    .number("Age must be a a number")
    .min(1, "Age must be geater than one"),
  avatar: yup.mixed()
})

const getFormikInputProps = (formik, fieldName) => ({
  value: formik.values[fieldName],
  onChange: formik.handleChange
})

const EyeAccountCreationPage = () => {
  const [collection, loading, error] = useUserScopedCollection('eyeAccounts')
  const { uploadLoading, uploadFile } = useUserScopedUploadFile()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      gender: 'other',
      age: '',
      avatar: null
    },
    validationSchema: eyeAccountCreationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true)
      try {
        // Null out avatar so we don't try to save it to the database but set it later
        const docValues = {
          ...values,
          ...{ avatar: null }
        }
        const docRef = await addDoc(collection, docValues)
        
        if(values.avatar){
          const avatarRef = await uploadFile(values.avatar, `eyeAccounts/${docRef.id}/avatar`)
          await updateDoc(docRef, {
            avatar: avatarRef.ref.fullPath
          })
        }

        navigate('/system-map')
      } catch (e){
        console.error(e)
      } finally {
        setIsSubmitting(false)
      } 
    }
  })

  return <Page title="Create Eye Account">
    {loading && <CircularProgress />}
    {collection && <form onSubmit={formik.handleSubmit}>
      <FormControl
        fullWidth
        error={formik.touched.name && Boolean(formik.errors.name)}
      >
        <InputLabel htmlFor="name">Name*</InputLabel>
        <Input
          id="name"
          aria-describedby="name-text"
          {...getFormikInputProps(formik, 'name')}
        />
        <FormHelperText id="name-text">{formik.touched.name && formik.errors.name}</FormHelperText>
      </FormControl>
      <FormControl
        fullWidth
        error={formik.touched.gender && Boolean(formik.errors.gender)}
      >
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender"
          name="gender"
          label="Gender"
          aria-describedby="gender-text"
          {...getFormikInputProps(formik, 'gender')}
        >
          <MenuItem value='other'>Other</MenuItem>
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
        </Select>
        <FormHelperText id="gender-text">{formik.touched.gender && formik.errors.gender}</FormHelperText>
      </FormControl>
      <FormControl
        fullWidth
        error={formik.touched.age && Boolean(formik.errors.age)}
      >
        <InputLabel htmlFor="age">Age</InputLabel>
        <Input
          id="age"
          aria-describedby="age-text"
          {...getFormikInputProps(formik, 'age')}
        />
        <FormHelperText id="age-text">{formik.touched.age && formik.errors.age}</FormHelperText>
      </FormControl>
      {uploadLoading ?
        <CircularProgress /> :
        <Dropzone 
          {...getFormikInputProps(formik, 'avatar')}
          setFieldValue={(file) => formik.setFieldValue('avatar', file)}
        />
      }
      <Button color="primary" variant="contained" fullWidth type="submit" disabled={isSubmitting}>
        Submit {isSubmitting && <CircularProgress />}
      </Button>
    </form>}
  </Page>
}

export default EyeAccountCreationPage