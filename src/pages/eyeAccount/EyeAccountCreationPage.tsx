import { Button, CircularProgress, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Page from "../../components/page/Page"
import * as yup from "yup"
import { FormikValues, useFormik } from "formik"
import useUserScopedCollection from "../../hooks/user/useUserScopesCollection"
import { addDoc } from "firebase/firestore"
import { ReactElement, useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import React from 'react'

const eyeAccountCreationSchema = yup.object({
  name: yup
    .string()
    .max(100, "Name must be less than 100 characters")
    .required("Name is a required field"),
  gender: yup
    .string()
    .oneOf(['male', 'female', 'other']),
  age: yup
    .number()
    .min(1, "Age must be greater than one")
})

const getFormikInputProps = (formik: FormikValues, fieldName: string): {
  value: any,
  //@todo is there a way we can make this expect the two event types?
  onChange: (event: any) => void
} => ({
  value: formik.values[fieldName],
  onChange: formik.handleChange
})

const EyeAccountCreationPage = (): ReactElement<any, any> => {
  const { targetCollection, userLoading } = useUserScopedCollection('eyeAccounts')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const navigate: NavigateFunction = useNavigate()
  const formik: FormikValues = useFormik({
    initialValues: {
      name: '',
      gender: 'other',
      age: ''
    },
    validationSchema: eyeAccountCreationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true)

      try {
        if (targetCollection) {
          await addDoc(targetCollection, values)
          navigate('/system-map')
        }
      } catch (e){
        console.error(e)
      } finally {
        setIsSubmitting(false)
      } 
    }
  })

  //@todo - Page.tsx child type
  return <Page title="Create Eye Account">
    { userLoading && <CircularProgress />}
    {targetCollection && <form onSubmit={formik.handleSubmit}>
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
      <Button color="primary" variant="contained" fullWidth type="submit" disabled={isSubmitting}>
        Submit {isSubmitting && <CircularProgress />}
      </Button>
    </form>}
  </Page>
}

export default EyeAccountCreationPage