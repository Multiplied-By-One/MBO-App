import { CircularProgress, Grid, Snackbar } from "@mui/material";

import SystemMapProfileCard from "../../components/card/SystemMapProfileCard";
import Page from "../../components/page/Page";
import useUserScopedCollectionData from "../../hooks/user/useUserScopedCollectionData";

const SystemMapListingPage = () => {
  //The parameter of useUserScopedCollectionData needs to updated with correct collectionPath
  const [profileData, loading, error] = useUserScopedCollectionData("eyeAccounts");

  return (
    <Page title="SYSTEM MAP">
      {loading && <CircularProgress />}
      {error && <Snackbar severity="error">Failed to load headmates</Snackbar>}
      {profileData && (
        <Grid gap={2} container={true}>
          {profileData.map((item) => (
            <Grid key={item.id} item sm={12} lg={4} xl={3} p={2} m={3}>
              <SystemMapProfileCard id={item.id} headline={item.name} age={item.age} gender={item.gender}/>
            </Grid>
          ))}
        </Grid>
      )}
    </Page>
  );
};

export default SystemMapListingPage;