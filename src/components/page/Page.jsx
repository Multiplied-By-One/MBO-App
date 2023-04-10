import { Container } from "@mui/material";
import Layout from "../layout/Layout";
import NavBar from "../nav/NavBar";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: "30px",
  backgroundColor: "inherit",
  // Push right for drawer
  [theme.breakpoints.up('sm')]: {
    paddingLeft: "60px",
  }
}));

const Page = ({ title, children, showSideBar }) => {
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar
        title={title}
        showSideBar = {showSideBar}
        content={<StyledContainer maxWidth="false" >{children}</StyledContainer>}
      />
    </Layout>
  );
};

Page.propTypes = {
  title: PropTypes.node,
};

export default Page;
