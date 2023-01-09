import { Container, Grid } from "@mui/material";
import Page from "../components/page/Page";
import HubPageButton from "../components/button/HubPageButton";

// Move routes into buttons variable on the line below
const buttons = [
  {
    link: "/dashboard",
    text: "Dashboard",
  },
  {
    link: "/headmate-meeting-space",
    text: "Headmate Meeting Space",
  },
  {
    link: "/system-map",
    text: "System Map",
  },
  {
    link: "/expressway",
    text: "Expressway",
  },
  {
    link: "/reminders",
    text: "Reminders",
  },
  {
    link: "/system-rules",
    text: "System Rules",
  },
  {
    link: "/appreciation-station",
    text: "Appreciation Station",
  },
  {
    link: "/treatment-hub",
    text: "Treatment Hub",
  },
  {
    link: "/resources",
    text: "Resources",
  },
  {
    link: "/guide",
    text: "Guide",
  },
  {
    link: "/settings",
    text: "Settings",
  },
  {
    link: "/leave-a-review",
    text: "Leave a Review",
  },
];


const HubPage = () => {
  return (
    <Page>
      <Grid container spacing={4}>
        {buttons.map((button) => (
          <Grid item l={4} key={button.link}><HubPageButton key={button.link} link={button.link} text={button.text} /> </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default HubPage;
