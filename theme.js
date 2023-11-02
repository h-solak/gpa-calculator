import { createTheme } from "@mui/material/styles";

/*
Theme:

https://colorhunt.co/palette/4a55a27895cba0bfe0c5dff8

*/
const theme = createTheme({
  palette: {
    primary: {
      main: "#145374",
      light: "#5588A3",
    },
    secondary: {
      //grey(ish)
      main: "#999999",
    },
    highlight: {
      //accent color - call to action (cta)
      main: "#008080",
    },
    light: {
      main: "#fffbe9",
    },
  },
  typography: {
    fontFamily: ["Arial", "sans-serif", "Montserrat"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

export default theme;
