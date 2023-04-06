import { Card, Typography } from "@mui/material"
import { Theme, styled } from '@mui/material/styles'
import { ReactElement } from "react";
import { FixMeLater } from "../../types/FixMeLater";


const StyledCard = styled(Card)<TemplateStringsArray>(({ theme }: {
    theme: Theme
}): FixMeLater  => ({
    //@todo
    backgroundColor: theme.palette.primary.background,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: `12px`,
}))
  

const EyeAccountCard = ({headline, gender, age}: {
    headline: string,
    //@todo make this be list of specific strings, male, female, other
    gender: string,
    age: string
}): ReactElement<any, any> => {
    return (
        <StyledCard>
            <Typography as="h4" fontFamily={"Walter Turncoat"}>{headline}</Typography>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
        </StyledCard>
    )
}

export default EyeAccountCard