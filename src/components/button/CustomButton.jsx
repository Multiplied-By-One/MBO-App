import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    boxShadow: `5px 5px 3px -1px ${theme.palette.primary.main}`,
    borderRadius: 12,
    padding: '6px 12px',
    textTransform: 'capitalize',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.body1.fontFamily,
    fontSize: "1.2rem",
    lineHeight: 1.5,
}));

const CustomButton = ({ children, onClick, startIcon,endIcon,sx, disabled=false }) => {
    return (
        <StyledButton disabled={disabled} onClick={onClick} startIcon={startIcon} endIcon={endIcon} sx={sx}>
            {children}
        </StyledButton>
    )
}

CustomButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    sx: PropTypes.object,
    disabled: PropTypes.bool
}

export default CustomButton;


