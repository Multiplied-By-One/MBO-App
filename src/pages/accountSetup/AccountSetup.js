import Page from "../../components/page/Page";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

const StyledContainer = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    boxShadow: `5px 5px 3px -1px #131415`,//${theme.palette.primary.main}`,
    borderRadius: 12,
    padding: 0,
    maxWidth: 'none',

    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary,
    height: '95%',
    width: '98%',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    
    //zIndex : -1,
}));
const StyledImg = styled('img')(() => ({
    position: 'absolute',
    top: '1%',
    left: '1%',
    width: '100px',
    height: '100px',
    zIndex: 10000,
}));


const AccountSetup = () => {

    return (
        <>
        
        <Page>
        <StyledContainer fluid />
        </Page>
        <StyledImg src="/MBOne_Icon_2.png" alt="logo" />
        </>
    )
}

export default AccountSetup;
