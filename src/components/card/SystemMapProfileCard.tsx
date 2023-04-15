import { Card, Typography } from "@mui/material";
import { Theme, styled } from "@mui/material/styles";
import { ReactElement } from "react";
import React from 'react'

const StyledCard = styled(Card)(({ theme }: {
  theme: Theme
}) => ({
  backgroundColor: theme.palette.background.default,
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `12px`,
  padding: `1em`,
  width: `15em`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const StyledProfilePicture = styled(Card)(({ theme }: {
  theme: Theme
}) => ({
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
    <StyledCard key={id}>
      <div>
        <Typography component="h1" fontFamily={"Funky Olive"}>
          {headline}
        </Typography>
        <Typography
          component="h1"
          fontFamily={"Francois One"}
          sx={{ textTransform: "capitalize" }}
        >
          {gender}
        </Typography>
        <Typography component="h1" fontFamily={"Francois One"}>
          Age {age}
        </Typography>
      </div>
      <StyledProfilePicture>
        <img alt="profile-pic" src="" />
      </StyledProfilePicture>
    </StyledCard>
  );
};

export default SystemMapProfileCard;
