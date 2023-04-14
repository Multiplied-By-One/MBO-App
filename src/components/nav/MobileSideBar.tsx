import { ReactElement, useState } from "react";
import PropTypes from "prop-types";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Theme, styled, useTheme } from "@mui/material/styles";
import React from 'react'

const drawerWidth: number = 190;

const AppBar = styled(MuiAppBar)(({ theme }: {
  theme: Theme
}) => ({
  backgroundColor: theme.palette.primary.main,
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `0 0 12px 12px`,
  maxWidth: theme.breakpoints.values.lg,
}));

const MobileSideBar = ({ title, drawer }: {
  title: string,
  drawer: ReactElement<any, any>
}): ReactElement<any, any> => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const theme: Theme = useTheme();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Toolbar sx={[theme.typography.h1, { fontSize: "1.2rem" }]}>
            {title ?? (
              <Typography component="title" sx={{ fontSize: "inherit" }}>
                Multiplied By <Typography variant="caption">One</Typography>
              </Typography>
            )}
          </Toolbar>
          <Box component="div"></Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
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
          <IconButton
            color="inherit"
            aria-label="close drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, justifyContent: "flex-end", p: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <Divider />
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default MobileSideBar;
