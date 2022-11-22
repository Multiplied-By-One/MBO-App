import { CircularProgress, Grid, Snackbar } from "@mui/material";

import SystemMapProfileCard from "../../components/card/SystemMapProfileCard";
import Page from "../../components/page/Page";
import useUserScopedCollectionData from "../../hooks/user/useUserScopedCollectionData";

const SystemMapListingPage = () => {
  //The parameter of useUserScopedCollectionData needs to updated with correct collectionPath
  const [data, loading, error] = useUserScopedCollectionData("eyeAccounts");
  //Dummy Data for demo purposes
  const profileData= [
    {
        id: 1,
        name: "Maggie",
        gender: "female",
        age: "17"
    },
    {
        id: 2,  
        name: "Melissa",
        gender: "female",
        age: "LOL"
    },
    {
        id: 3,  
        name: "Katie",
        gender: "female",
        age: "2"
    },
    {
        id: 4,
        name: "Skittle",
        gender: "female",
        age: "4"
    },
    {
        id: 5,
        name: "John Q",
        gender: "male",
        age: "Unknown"
    },
  ]
  return (
    <Page title="SYSTEM MAP">
      {loading && <CircularProgress />}
      {error && <Snackbar severity="error">Failed to load headmates</Snackbar>}
      {profileData && (
        <Grid gap={2} container={true}>
          {profileData.map((item) => (
            <Grid  key={item.id} item sm={12} lg={4} xl={3} p={2} m={3}>
              <SystemMapProfileCard id={item.id} headline={item.name} age={item.age} gender={item.gender}/>
            </Grid>
          ))}
        </Grid>
      )}
    </Page>
  );
};

export default SystemMapListingPage;