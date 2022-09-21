import { CircularProgress, Grid, Snackbar } from "@mui/material";
import EyeAccountCard from "../../components/card/EyeAccountCard";
import Page from "../../components/page/Page";
import useUserScopedCollectionData from "../../hooks/user/useUserScopedCollectionData";

const EyeAccountListingPage = () => {
  const [data, loading, error] = useUserScopedCollectionData("eyeAccounts");
  return (
    <Page title="Eye Accounts">
      {loading && <CircularProgress />}
      {error && <Snackbar severity="error">Failed to load headmates</Snackbar>}
      {data && (
        <Grid>
          {data.map((item) => (
            <Grid key={item.id} item sm="12" lg="4" xl="3">
              <EyeAccountCard headline={item.name} age={item.age} />
            </Grid>
          ))}
        </Grid>
      )}
    </Page>
  );
};

export default EyeAccountListingPage;
