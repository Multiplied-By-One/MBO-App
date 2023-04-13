import { Theme, styled } from '@mui/material/styles'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import React from 'react'

const StyledLink = styled(Link)(({ theme }: {
    theme: Theme
}) => ({
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.text.primary,
    textAlign: "center",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
    lineHeight: "25px",
    borderRadius: "5px",
    textDecoration: "none",
    width: "200px",
    display: "block",
    [theme.breakpoints.up('sm')]: {
        width: "300px",
        borderRadius: "50px",
        lineHeight: "100px",
    }
}))
  

//@todo
const HubPageButton = ({link, text}: {
    link: string, 
    text: string
}): ReactElement<any, any> => {
    return <StyledLink to={link}>
        <Typography fontFamily={"Walter Turncoat"} fontSize={20} component="span">{text}</Typography>
    </StyledLink>
}

export default HubPageButton