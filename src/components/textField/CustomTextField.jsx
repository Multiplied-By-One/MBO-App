import React from "react";
import { TextField } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import CustomContainer from "../../components/container/CustomContainer";


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

const getFormikInputProps = (formik, fieldName) => ({
  value: formik.values[fieldName],
  onChange: formik.handleChange,
});


const CustomTextField = ({ label, placeholder, type, formik, fieldName }) => {
  //const theme = useTheme();

  return (
    <CustomContainer>      
    <StyledTextField
     variant="standard"
     id="customTextField"
     name={fieldName}
      label={label}
      placeholder={placeholder}
      type={type}
      onChange={formik.handleChange}
      value={formik.values[fieldName]}
      // {...getFormikInputProps(formik,fieldName)}
    />
    </CustomContainer>
  );
}

CustomTextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  formik: PropTypes.object.isRequired,
  fieldName: PropTypes.string.isRequired,
};

export default CustomTextField;