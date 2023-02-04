import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";



const StyledContainer = styled(Container)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    boxShadow: `5px 5px 3px -1px #131415`,//${theme.palette.primary.main}`,
    borderRadius: 12,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary,
}));

const CustomContainer = ({children, sx}) => {
    return (
        <StyledContainer sx={sx}>
            {children}
        </StyledContainer>
    )
}

CustomContainer.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object
}

export default CustomContainer;