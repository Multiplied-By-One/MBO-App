import { Container } from "@mui/material";
import Layout from "../layout/Layout";
import NavBar from "../nav/NavBar";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: "30px",
  backgroundColor: "inherit",
  // Full width minus the width of the drawer
  width: "calc(100vw - 190px)",
  [theme.breakpoints.up('sm')]: {
    paddingLeft: "60px",
  }
}));

const Page = ({ title, children }) => {
  return (
    <Layout>
      <NavBar
        title={title}
        content={<StyledContainer maxWidth="lg">{children}</StyledContainer>}
      />
    </Layout>
  );
};

Page.propTypes = {
  title: PropTypes.node,
};

export default Page;
