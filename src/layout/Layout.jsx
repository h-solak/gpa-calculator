import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
  const { i18n, t } = useTranslation();

  const switchLanguage = () => {
    //if local storage has language item, choose it

    //  const crrLanguage = localStorage.getItem("gpa-calculator-hs-language");
    if (i18n.language == "en") {
      i18n.changeLanguage("tr");
      localStorage.setItem("gpa-calculator-hs-language", "tr");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("gpa-calculator-hs-language", "en");
    }
  };
  return (
    <Box>
      <AppBar position="static" sx={{ height: 64 }}>
        <Toolbar>
          <Typography
            fontFamily={"Montserrat"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {t("gpaCalculator")}
          </Typography>
          {/* <Button color="inherit">About</Button> */}
          <IconButton size="small" onClick={switchLanguage}>
            <Typography fontSize={14} color={"light.main"}>
              {i18n.language.toUpperCase()}
            </Typography>
          </IconButton>
          <Link href="https://github.com/h-solak" target="_blank">
            <IconButton>
              <GitHubIcon sx={{ color: "light.main" }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Box paddingX={2}>{children}</Box>
    </Box>
  );
};

export default Layout;
