import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelect } from "@mui/base";
import { styled } from "@mui/system";
import CustomContainer from "../container/CustomContainer";
import {  Typography,Button } from "@mui/material";

const Root = styled("div")`
  position: relative;
  width: 100%;
  background-color: transparent;
  border: none;
  text-align: left;
`;

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: ${theme.typography.h6.fontFamily};
  font-size: 1rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  max-height: calc(10em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.primary.main};
  border: 1px solid ${theme.palette.secondary.main};
  color: ${theme.palette.text.primary};
  padding: 5px;
  margin: 5px 0 0 0;
  position: absolute;
  height: auto;
  width: 100%;
  overflow: auto;
  z-index: 1;
  outline: 0px;
  list-style: none;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s 0.5s ease, visibility 0.4s 0.5s step-end;
  }

  & > li {
    padding: 8px;
    border-radius: 0.45em;

    &:hover {
      background: ${theme.palette.primary.background};
    }

    &[aria-selected='true'] {
      background: ${theme.palette.primary.background};
    }
  }
  `
);
const StyledArrow = styled("span")(
  ({ theme }) => `
  padding-right: 25px;
  font-size: 2rem;
  font-weight: 500;
  line-height: .5;
  color: ${theme.palette.text.primary};
  font: ${theme.typography.title.fontFamily};

  
   `
);

function CustomSelect({ options, formik, fieldName }) {
  const listboxRef = useRef(null);
  const [listboxVisible, setListboxVisible] = useState(false);
  const { getButtonProps, getListboxProps, getOptionProps, value } = useSelect({
    listboxRef,
    options,
    onOpenChange: setListboxVisible,
    open: listboxVisible,
  });

  const renderSelectedValue = (value, options, formik) => {
    const selected = options.find((option) => option.value === value);
    
    if (selected) {
      formik.values[fieldName] = selected.value;
      
    }
    return selected ? selected.label : "";
  };

  useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <Root>
      <Button
        disableFocusRipple
        disableRipple
        disableTouchRipple
        fullWidth
        sx={{ padding: 0, ":hover": { backgroundColor: "transparent" } }}
        {...getButtonProps()}
      >
        <CustomContainer
          sx={{
            padding: "0px",
            display: "flex",
            justifyContent: "left",
            height: "40px",
          }}
        >
          <StyledArrow> {">"} </StyledArrow>
          <Typography as="span" variant="h6">
            {renderSelectedValue(value, options, formik)}
          </Typography>
        </CustomContainer>
      </Button>
      <Listbox
        {...getListboxProps()}
        aria-hidden={!listboxVisible}
        className={listboxVisible ? "" : "hidden"}
      >
        {options.map((option) => (
          <li
            key={option.value}
            {...getOptionProps(option)}
            //{...handleClicked(option)}
            //onClick={handleClicked}
          >
            {option.label}
          </li>
        ))}
      </Listbox>
    </Root>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.node,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  fieldName: PropTypes.string,
  formik: PropTypes.object.isRequired,
};

export default function UseSelect(props) {
  return (
    <CustomSelect
      options={props.options}
      formik={props.formik}
      fieldName={props.fieldName}
    />
  );
}
