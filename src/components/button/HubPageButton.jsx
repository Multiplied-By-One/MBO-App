import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
    color: theme.palette.text.primary,
    textAlign: "center",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
    lineHeight: "100px",
    borderRadius: "50px",
    textDecoration: "none",
    width: "300px",
    display: "block"
}))
  

const HubPageButton = ({link, text}) => {
    return <StyledLink to={link}>
        <Typography as="span" fontFamily={"Walter Turncoat"} fontSize={20}>{text}</Typography>
    </StyledLink>
}

HubPageButton.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default HubPageButton