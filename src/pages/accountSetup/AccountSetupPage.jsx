import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  styled,
  Box,
  Checkbox,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import FirestoreDocumentData from "../../hooks/user/useUserScopeDocument";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/page/Page";
import { updateDoc } from "firebase/firestore";
import CustomContainer from "../../components/container/CustomContainer";
import CustomSelect from "../../components/customSelect/CustomSelect";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomTextField from "../../components/textField/CustomTextField";

// Validation schema, update where necessary.
const accountSetupSchema = yup.object({
  headingsFont: yup.string().required("Please select a heading font"),
  headingPointSize: yup
    .number()
    .required("Please select a heading point size")
    .min(10, "Please select a heading point size from 10 to 30")
    .max(30, "Please select a heading point size from 10 to 30"),
  mainTextFont: yup.string().required("Please select a main text font"),
  mainTextPointSize: yup
    .number()
    .required("Please select a main text point size")
    .min(10, "Please select a main text point size from 10 to 30")
    .max(30, "Please select a main text point size from 10 to 30"),
  systemName: yup.string().required("Please enter a system name"),
});

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: `white`,
  "&.Mui-checked": {
    color: `white`,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "2rem",
  },
}));

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  color: `${theme.palette.error.main}`,
  fontFamily: `${theme.typography.body1.fontFamily}`,
  fontSize: "1.2rem",
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderWidth: 3,
  borderStyle: "solid",
  borderColor: theme.palette.secondary.main,
  boxShadow: `5px 5px 3px -1px #131415`, //${theme.palette.primary.main}`,
  borderRadius: 12,
  padding: 0,
  maxWidth: "none",

  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.primary,
  height: "95%",
  width: "98%",
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",

}));
const StyledImg = styled("img")(() => ({
  position: "absolute",
  top: "1%",
  left: "1%",
  width: "100px",
  height: "100px",
  zIndex: 10000,
}));

const AccountSetupPage = () => {
  const [docRef, loading, error] = FirestoreDocumentData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // remove next line after test
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const formik = useFormik({
    initialValues: {
      headingsFont: "",
      headingPointSize: "",
      mainTextFont: "",
      mainTextPointSize: "",
      systemName: "",
      twoFactAuth: false,
    },
    validationSchema: accountSetupSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await updateDoc(docRef,{ userPreferences: values });
        navigate("/");
      } catch (e) {
        console.error(e);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  //Define options to pass to custom select component
  const headerOptions = [
    { value: 1, label: "Heading 1" },
    { value: 2, label: "Heading 2" },
    { value: 3, label: "Heading 3" },
    { value: 4, label: "Heading 4" },
  ];
  const mainTextOptions = [
    { value: 1, label: "Text font 1" },
    { value: 2, label: "Text font 2" },
    { value: 3, label: "Text font 3" },
    { value: 4, label: "Text font 4" },
  ];
  let range = [];
  for (let i = 10; i <= 30; i++) {
    range.push(i);
  }
  const pointSizeOptions = range.map((item) => {
    return { value: item, label: `Point size ${item}` };
  });

  return (
    <>
      <Page showSideBar={false}>
        <StyledContainer>
          {loading && <CircularProgress />}
          {docRef && (
            <>
              <CustomContainer
                sx={{
                  color: "white",
                  padding: "sm:3rem",
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Box sx={{ textAlign: "center", paddingTop: 3 }}>
                  <Typography sx={{fontSize:"2.5rem"}} variant="title">Set Up Your Account </Typography>
                </Box>
                <form
                  onSubmit={formik.handleSubmit}
                  style={{ color: "white", padding: "4rem 4rem" }}
                >
                  <Grid container spacing={2} rowGap={2} sx={{ flexGrow: 1 }}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                        Select the headings font
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl
                        fullWidth
                        error={
                          formik.touched.headingsFont &&
                          Boolean(formik.errors.headingsFont)
                        }
                      >
                        <CustomSelect
                          options={headerOptions}
                          aria-describedby="headers-font-helper-text"
                          id="headers-font-helper-text"
                          formik={formik}
                          fieldName="headingsFont"
                          helperText={
                            <StyledFormHelperText id="headers-font-helper-text">
                              {formik.touched.headingsFont &&
                                formik.errors.headingsFont}
                            </StyledFormHelperText>
                          }
                        />
                        <StyledFormHelperText id="headers-font-helper-text">
                          {formik.touched.headingsFont &&
                            formik.errors.headingsFont}
                        </StyledFormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                        Set heading point size
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl
                        fullWidth
                        error={
                          formik.touched.headingPointSize &&
                          Boolean(formik.errors.headingPointSize)
                        }
                      >
                        <CustomSelect
                          options={pointSizeOptions}
                          aria-describedby="headers-font-helper-text"
                          id="headers-font-helper-text"
                          formik={formik}
                          fieldName="headingPointSize"
                        />
                      </FormControl>
                      <StyledFormHelperText id="heading-point-size-helper-text">
                        {formik.touched.headingPointSize &&
                          formik.errors.headingPointSize}
                      </StyledFormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                        Select the main text font
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomSelect
                        options={mainTextOptions}
                        aria-describedby="main-text-font-text"
                        id="main-text-helper-text"
                        formik={formik}
                        fieldName="mainTextFont"
                        helperText={
                          <StyledFormHelperText id="main-text-font-helper-text">
                            {formik.touched.mainTextFont &&
                              formik.errors.mainTextFont}
                          </StyledFormHelperText>
                        }
                      />
                      {/* <StyledFormHelperText id="main-font-helper-text">
                          {formik.touched.mainTextFont &&
                            formik.errors.mainTextFont}
                        </StyledFormHelperText> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                        Set main text point size
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomSelect
                        options={pointSizeOptions}
                        aria-describedby="main-text-point-size-helper-text"
                        id="main-text-point-size-helper-text"
                        formik={formik}
                        fieldName="mainTextPointSize"
                        helperText={
                          <StyledFormHelperText id="main-text-font-helper-text">
                            {formik.touched.mainTextPointSize &&
                              formik.errors.mainTextPointSize}
                          </StyledFormHelperText>
                        }
                      />
                      {/* <StyledFormHelperText id="main-text-point-helper-text">
                          {formik.touched.mainTextPointSize &&
                            formik.errors.mainTextPointSize}
                        </StyledFormHelperText> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                        Your System Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl
                        fullWidth
                        error={
                          formik.touched.systemName &&
                          Boolean(formik.errors.systemName)
                        }
                      >
                        <CustomTextField
                          placeholder="Enter"
                          aria-describedby="system-name-helper-text"
                          fieldName={"systemName"}
                          formik={formik}
                        ></CustomTextField>

                        <StyledFormHelperText id="system-name-helper-text">
                          {formik.touched.systemName &&
                            formik.errors.systemName}
                        </StyledFormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                        Two-Factor Authentication
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledCheckbox
                        name="twoFactAuth"
                        // do not remove double negation or else your see an uncontrolled to controlled switchBase error
                        // refer to https://stackoverflow.com/questions/69259429/material-ui-a-component-is-changing-the-uncontrolled-checked-state-of-switchbas
                        checked={!!formik.values.twoFactAuth}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Box height={30} />
                  <Box
                    sx={{
                      display: "flex",
                      float: "right",
                      justifyContent: "space-between",
                      width: "30%",
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      type="reset"
                      sx={{
                        padding: 0,
                        ":hover": { backgroundColor: "transparent" },
                      }}
                      disabled={isSubmitting}
                    >
                      <CustomContainer
                        sx={{
                          padding: "0px",
                          display: "flex",
                          justifyContent: "left",
                          height: "40px",
                        }}
                      >
                        <Typography variant="h6">
                          {isSubmitting ? <CircularProgress color="white" />: "Return"}
                        </Typography>
                      </CustomContainer>
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      sx={{
                        padding: 0,
                        ":hover": { backgroundColor: "transparent" },
                      }}
                      disabled={isSubmitting}
                    >
                      <CustomContainer
                        sx={{
                          padding: "0px",
                          display: "flex",
                          justifyContent: "left",
                          height: "40px",
                        }}
                      >
                        <Typography variant="h6">
                          {isSubmitting ? <CircularProgress color="white" />: "Save"}
                        </Typography>
                      </CustomContainer>
                    </Button>
                  </Box>
                </form>
              </CustomContainer>
            </>
          )}
        </StyledContainer>
      </Page>
      <StyledImg src="/MBOne_Icon_2.png" alt="logo" />
    </>
  );
};

export default AccountSetupPage;
