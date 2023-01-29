import { Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.background,
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `12px`,
  padding: `1em`,
  width: `15em`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const StyledProfilePicture = styled(Card)(({ theme }) => ({
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `12px`,
  width: "5em",
  height: "5em",
}));

const SystemMapProfileCard = ({ id, headline, gender, age }) => {
  return (
    <StyledCard key={id}>
      <div>
        <Typography as="h1" fontFamily={"Funky Olive"}>
          {headline}
        </Typography>
        <Typography
          as="h1"
          fontFamily={"Francois One"}
          sx={{ textTransform: "capitalize" }}
        >
          {gender}
        </Typography>
        <Typography as="h1" fontFamily={"Francois One"}>
          Age {age}
        </Typography>
      </div>
      <StyledProfilePicture>
        <img alt="profile-pic" src="" />
      </StyledProfilePicture>
    </StyledCard>
  );
};
SystemMapProfileCard.propTypes = {
  id: PropTypes.number,
  headline: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(["male", "female", "other"]), // @todo Confirm either a list of genders here or if this should be free form
  age: PropTypes.string,
};
export default SystemMapProfileCard;
