import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F4858",
    },
    secondary: {
      main: "#33658A",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#D9D9D9",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
