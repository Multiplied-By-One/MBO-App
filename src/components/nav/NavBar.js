import * as React from "react";
import {
  Toolbar,
  Box,
  Container,
  Grid,
  Typography,
  CssBaseline,
  Divider,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MobileSideBar from "./MobileSideBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// const SyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.background,
//   border: `2px solid ${theme.palette.secondary.main}`,
//   borderRadius: `0 0 12px 12px`,
//   maxWidth: theme.breakpoints.lg,
// }));

const drawerWidth = 190;

// navList1
const navList = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  { name: "The Eye", path: "/eyeAccount" },
  { name: "Headmate Meeting Space", path: "/headmate-meeting-space" },
  { name: "System Map", path: "/system-map" },
  { name: "Expressway", path: "/expressway" },
  { name: "Reminders", path: "/reminders" },
  { name: "System Rules", path: "/system-rules" },
  { name: "Appreciation Station", path: "/appreciation-station" },
  { name: "Treatment Hub", path: "/treatment-hub" },
  { name: "Resources", path: "/resources" },
  { name: "Guide", path: "/guide" },
  { name: "Settings", path: "/settings" },
  { name: "Leave A Review", path: "/leave-a-review" },
  { name: "Sign Out", path: "/sign-out" },
];

//
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.sharp,
  }),
  overflowX: "hidden",
  overflowY: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  alignItems: "center",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  //zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth + 5}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - ${4.3}rem)`,
  }),

  backgroundColor: theme.palette.primary.main,
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `0 0 12px 12px`,
  maxWidth: theme.breakpoints.lg,
  display: "flex",
  alignItems: "center",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  // whiteSpace: "nowrap",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NavBar = ({ title, content }, props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerContent = (
    <div>
      <List>
        <>
          {navList.map((route, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                style={{ textAlign: "center", padding: "0 10px" }}
              >
                <ListItemText>
                  <Link
                    to={route.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography variant="h6"> {route.name}</Typography>
                  </Link>
                </ListItemText>
              </ListItem>

              {route.path === "/resources" && (
                <>
                  <Divider
                    sx={{
                      backgroundColor: theme.palette.primary.background,
                    }}
                  />
                  <Box
                    sx={{
                      mb: "25rem",
                      display: { xs: "none", md: "block" },
                    }}
                  />
                </>
              )}
              <Divider
                style={{
                  backgroundColor: theme.palette.primary.background,
                }}
              />
            </React.Fragment>
          ))}
          <ListItem sx={{ justifyContent: "center", alignSelf: "flex-end" }}>
            <Divider
              sx={{
                backgroundColor: theme.palette.primary.background,
              }}
            />
            <img
              alt="logo"
              src="/MBOne_Icon_2.png"
              style={{ height: "110px", width: "110px" }}
            />
          </ListItem>
        </>
      </List>
    </div>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              {title ?? (
                <Typography as="h4" fontFamily={"Walter Turncoat"}>
                  Multiplied By{" "}
                  <Typography component="span" fontFamily={"Funky Olive"}>
                    One
                  </Typography>
                </Typography>
              )}
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="sidebar navigation"
          >
            <Drawer
              variant="permanent"
              //anchor="left"
              open={open}
              PaperProps={{
                sx: {
                  boxSizing: "border-box",
                  backgroundColor: theme.palette.primary.main,
                  borderWidth: 3,
                  borderStyle: "solid",
                  borderColor: theme.palette.secondary.main,
                  boxShadow: `5px 5px 3px -1px ${theme.palette.primary.main}`,
                  borderRadius: 0,
                  overflowX: "hidden",
                },
              }}
            >
              <DrawerHeader>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={!open ? handleDrawerOpen : handleDrawerClose}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </DrawerHeader>
              <Divider
                style={{ backgroundColor: theme.palette.primary.background }}
              />

              {open && drawerContent}
            </Drawer>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <MobileSideBar title={title} drawer={drawerContent} />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {content}
        </Box>
      </Box>
    </>
  );
};

NavBar.propTypes = {
  title: PropTypes.node,
};

export default NavBar;
