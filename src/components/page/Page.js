import { Container } from "@mui/material";
import Layout from "../layout/Layout";
import NavBar from "../nav/NavBar";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)({
  paddingTop: "30px",
  backgroundColor: "inherit",
});

const Page = ({ title, children }) => {
  return (
    <Layout>
      <NavBar
        title={title}
        content={<StyledContainer maxWidth="false" >{children}</StyledContainer>}
      />
    </Layout>
  );
};

Page.propTypes = {
  title: PropTypes.node,
};

export default Page;
