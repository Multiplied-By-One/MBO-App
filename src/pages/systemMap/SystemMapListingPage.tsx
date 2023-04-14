import { Alert, CircularProgress, Grid, Snackbar, Typography } from "@mui/material";

import SystemMapProfileCard from "../../components/card/SystemMapProfileCard";
import Page from "../../components/page/Page";
import useUserScopedCollectionData from "../../hooks/user/useUserScopedCollectionData";
import { ReactElement } from "react";
import React from 'react'
import { DocumentData } from "firebase/firestore";

const SystemMapListingPage = (): ReactElement<any, any> => {
  const {data, loading, error} =
    useUserScopedCollectionData("eyeAccounts");
  return (
    <Page title="SYSTEM MAP">
      {loading && <CircularProgress />}
      {error && <Snackbar>
          <Alert severity="error">
            <Typography>Failed to load headmates</Typography>
          </Alert>
        </Snackbar>}
      {data && (
        <Grid gap={2} container={true}>
          {data.map((item: DocumentData, index: number) => (
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
