import React from "react";
import Routes from "./Routes";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

//base style
import "./styles/_base.scss";

//create material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#f2aa26",
      dark: "#f09c01",
    },
    secondary: {
      main: "#11cb5f",
    },
    text: {
      primary: "#373585",
      secondary: "#a4a6b3",
    },
    background: {
      default: "#fffff",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans- serif",
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
