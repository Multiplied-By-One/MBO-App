import { Card, Typography } from "@mui/material"
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles'


const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.background,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: `12px`,
}))
  

const EyeAccountCard = ({headline, gender, age}) => {
    return <StyledCard>
        <Typography as="h4" fontFamily={"Walter Turncoat"}>{headline}</Typography>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
    </StyledCard>
}

EyeAccountCard.propTypes = {
    headline: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(["Male", "Female"]), // @todo Confirm either a list of genders here or if this should be free form
    age: PropTypes.number
}

export default EyeAccountCard