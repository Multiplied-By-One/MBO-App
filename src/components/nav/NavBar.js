import { AppBar, Box, Container, Grid, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

const SyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.background,
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `0 0 12px 12px`,
  maxWidth: theme.breakpoints.lg
}))

//const navStyle = {
//  backgroundColor: "#222222",
//  position: "sticky",
//  top: "0px",
//  display: "flex",
//  flexDirection: "row-reverse",
//  borderRadius: "0",
//  zIndex: "10",
//};
//const ulStyle = {
//  marginRight: "10px",
//};
//const liStyle = {
//  display: "inline",
//  margin: "0 10px",
//};
//const navBarLogo = {
//  width: "100px",
//  position: "absolute",
//  left: "5px",
//  top: "5px",
//};


const NavBar = ({ title }) => {
  return (<>
    <SyledAppBar>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Box></Box>
        <Box>
          {title ?? (
            <Typography as="h4" fontFamily={"Walter Turncoat"}>
              Multiplied By <Typography component="span" fontFamily={"Funky Olive"}>One</Typography>
            </Typography>
          )}
        </Box>
        <Box></Box>
      </Grid>
    </SyledAppBar>
    {/*<nav style={navStyle} className={darkCard}>
        <Link to="/">
            <img alt="multiplied by one logo"src={Icon} style={navBarLogo} />
        </Link>
        <ul style={ulStyle}>
            <li style={liStyle}>
            <Link className={linkStyle} to="/faq">
                FAQ
            </Link>
            </li>
            <li style={liStyle}>
            <Link className={linkStyle} to="/blog">
                Blog
            </Link>
            </li>
        </ul>
    </nav>*/}
  </>

  );
};

NavBar.propTypes = {
  title: PropTypes.node
}

export default NavBar
