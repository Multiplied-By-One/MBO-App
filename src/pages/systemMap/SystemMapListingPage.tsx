import { CircularProgress, Grid, Snackbar } from "@mui/material";

import SystemMapProfileCard from "../../components/card/SystemMapProfileCard";
import Page from "../../components/page/Page";
import useUserScopedCollectionData from "../../hooks/user/useUserScopedCollectionData";
import { ReactElement } from "react";
import React from 'react'
import { FixMeLater } from "../../types/FixMeLater";

//@todo
const SystemMapListingPage = (): ReactElement<any, any> => {
  const [profileData, loading, error] =
    useUserScopedCollectionData("eyeAccounts");
  return (
    <Page title="SYSTEM MAP">
      {loading && <CircularProgress />}
      {error && <Snackbar severity="error">Failed to load headmates</Snackbar>}
      {profileData && (
        <Grid gap={2} container={true}>
          {profileData.map((item: FixMeLater, index: number) => (
            <Grid key={index} item sm={12} lg={4} xl={3} p={2} m={3}>
              <SystemMapProfileCard
                key={index}
                id={index}
                headline={item.name}
                age={item.age}
                gender={item.gender}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Page>
  );
};

export default SystemMapListingPage;
