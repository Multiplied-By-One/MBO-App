import { Container } from "@mui/material";
import Layout from "../layout/Layout";
import NavBar from "../nav/NavBar";
import PropTypes from "prop-types";
import React from 'react'

import { Theme, styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(({ theme }: {
  theme: Theme
}) => ({
  paddingTop: "30px",
  backgroundColor: "inherit",
  // Push right for drawer
  [theme.breakpoints.up('sm')]: {
    paddingLeft: "60px",
  }
}));

const Page = ({ title, children }: {
  title: string,
  children: any
}) => {
  return (
    <Layout>
      <NavBar
        title={title}
        content={<StyledContainer maxWidth="lg">{children}</StyledContainer>}
      />
    </Layout>
  );
};

export default Page;
