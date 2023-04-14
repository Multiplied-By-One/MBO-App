import { useState, Fragment, ReactElement } from "react";
import React from 'react'
import {
  Toolbar,
  Box,
  Typography,
  CssBaseline,
  Divider,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { Theme, styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MobileSideBar from "./MobileSideBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 190;

// navList
type NavRoute = {
  name: string,
  path: string
}

const navList: NavRoute[] = [
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

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  overflowY: "hidden",
  justifyContent: "flex-start",
});

const closedMixin = (theme: Theme) => ({
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

const DrawerHeader = styled("div")(({ theme }: {
  theme: Theme
}): {
  display: string,
  alignItems: string,
  justifyContent: string,
  padding: string | number,
  height: string | number
} => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  height: "40px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (open: string) => open !== "open",
})(({ theme, open }: {
  theme: Theme,
  open: boolean
}) => ({
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
  shouldForwardProp: (prop: string) => prop !== "open",
})(({ theme, open }: {
  theme: Theme,
  open?: boolean
}): any => ({
  width: drawerWidth,
  flexShrink: 0,

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NavBar = ({ title, content }: {
  title: string,
  content: ReactElement<any, any>
}): ReactElement<any, any> => {
  const theme = useTheme<Theme>();
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };
  
  const drawerContent: ReactElement<any, any> = (
    <div>
      <List>
        <>
          {navList.map((route: NavRoute, index: number): ReactElement<any, any> => (
            <Fragment key={index}>
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
                      backgroundColor: theme.palette.background.default,
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
                  backgroundColor: theme.palette.background.default,
                }}
              />
            </Fragment>
          ))}
          <ListItem sx={{ justifyContent: "center" }}>
            <Divider
              sx={{
                backgroundColor: theme.palette.background.default,
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
      <Box sx={{ display: "flex", padding: 0}}>
        <Box sx={{ display: { xs: "none", sm: "block" }, width: 0 }}>
          <CssBaseline />
          <AppBar theme={theme} position="fixed" open={open}>
            <Toolbar sx={theme.typography.h1}>
              {title ?? (
                <Typography component="title">
                  Multiplied By <Typography variant="caption">One</Typography>
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
                  edge={false}
                >
                  {open ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </DrawerHeader>
              <Divider
                style={{ backgroundColor: theme.palette.background.default }}
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

export default NavBar;
