import { Card, Typography } from "@mui/material"
import { Theme, styled } from '@mui/material/styles'
import React, { ReactElement } from "react";

const StyledCard = styled(Card)(({ theme }: {
    theme: Theme
})  => ({
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: `12px`,
}))
  

const EyeAccountCard = ({headline, gender, age}: {
    headline: string,
    gender: 'male' | 'female' | 'other',
    age: string
}): ReactElement<any, any> => {
    return (
        <StyledCard>
            <Typography component="h4" fontFamily={"Walter Turncoat"}>{headline}</Typography>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
        </StyledCard>
    )
}

export default EyeAccountCard