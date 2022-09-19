import {useState} from "react";
import PropTypes from "prop-types";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 190;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: `0 0 12px 12px`,
  maxWidth: theme.breakpoints.lg,
}));

const MobileSideBar = ({ title, drawer }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
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
          <Box as="div">
            {title ?? (
              <Typography as="h4" fontFamily={"Walter Turncoat"}>
                Multiplied By{" "}
                <Typography component="span" fontFamily={"Funky Olive"}>
                  One
                </Typography>
              </Typography>
            )}
          </Box>
          <Box as="div"></Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
          <Toolbar />
          <Divider />
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

MobileSideBar.propTypes = {
  title: PropTypes.string,
  drawer: PropTypes.element,
};

export default MobileSideBar;
