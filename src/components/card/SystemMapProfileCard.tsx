import { Card, Typography } from "@mui/material";
import { Theme, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { FixMeLater } from "../../types/FixMeLater";
import { ReactElement } from "react";
import React from 'react'

const StyledCard = styled(Card)<TemplateStringsArray>(({ theme }: {
  theme: Theme
}): FixMeLater => ({
  //@todo
  backgroundColor: theme.palette.primary.background,
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `12px`,
  padding: `1em`,
  width: `15em`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const StyledProfilePicture = styled(Card)<TemplateStringsArray>(({ theme }: {
  theme: Theme
}): FixMeLater => ({
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `12px`,
  width: "5em",
  height: "5em",
}));

const SystemMapProfileCard = ({ id, headline, gender, age }: {
  id: number,
  headline: string,
  gender: "male" | "female" | "other",
  age: string
}): ReactElement<any, any> => {
  return (
    //@todo
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

//@todo - what to do with these, maybe keep altogether or replace with TS props?
SystemMapProfileCard.propTypes = {
  id: PropTypes.number,
  headline: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(["male", "female", "other"]), // @todo Confirm either a list of genders here or if this should be free form
  age: PropTypes.string,
};
export default SystemMapProfileCard;
