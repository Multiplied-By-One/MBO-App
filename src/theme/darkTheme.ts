import { createTheme } from "@mui/material/styles";
import baseTheme from "./baseTheme";

export default createTheme(baseTheme, {
  themeName: "MBO Dark",
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#5f1c17",
    },
    inputBorderColor: {
      color: "#FFFFFF",
      disabledColor: "#757575",
    },
    background: {
      default: '#333333', //primary
      paper: '#242220' //secondary
    }
  },
});
