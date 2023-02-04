import React from "react";
import { Typography, Box, TextField, Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import CustomContainer from "../../components/container/CustomContainer";
import Page from "../../components/page/Page";
import { auth } from "../../firebase.config";
import CustomButton from "../../components/button/CustomButton";
import { Google } from "@mui/icons-material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "white",
  width: "100%",
  // padding: "5px 5px",

  //center placeholder
  "& .MuiInputBase-input": {
    fontSize: "1.3rem",
    fontFamily: theme.typography.subtitle1.fontFamily,
    "&::placeholder": {
      textAlign: "center",
    },
  },
}));

function LoginPage() {
  const theme = useTheme();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Page showSideBar={false}>
      <CustomContainer>
        <Box sx={{ padding: "50px 100px" }}>
          <Box sx={{ textAlign: "center", paddingBottom: "3rem"  }}>
            <Typography
              variant="title"
              sx={{ fontSize: "4.5em"}}
            >
              Multiplied By <Typography variant="caption">One</Typography>
            </Typography>
          </Box>

          <CustomContainer
            sx={{ backgroundColor: theme.palette.primary.background }}
          >
            <Box sx={{ textAlign: "center", padding: "3rem 0" }}>
              {/* <CustomContainer sx={{ border: "0" }}>
                <StyledTextField
                  variant="standard"
                  placeholder="Account Name"
                ></StyledTextField>
              </CustomContainer>
              <Box sx={{ height: "20px" }} />
              <CustomContainer sx={{ border: "0" }}>
                <StyledTextField
                  variant="standard"
                  placeholder="Password"
                ></StyledTextField>
              </CustomContainer>
              <Box sx={{ height: "40px" }} />
              <CustomButton>
                <Box sx={{ padding: "0 20px" }}> Sign in</Box>
              </CustomButton>
              <br />
              <Divider sx={{ margin: "20px 0" }}>or</Divider> */}
              <CustomButton
                onClick={() =>
                  signInWithGoogle([
                    "https://www.googleapis.com/auth/contacts.readonly",
                  ])
                }
                startIcon={<Google />}
              >
                <Box sx={{ padding: "0 20px" }}> Sign in with Google</Box>
              </CustomButton>
            </Box>
          </CustomContainer>
        </Box>
      </CustomContainer>
    </Page>
  );
}

export default LoginPage;
