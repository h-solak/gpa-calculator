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

const Layout = ({ children }) => {
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
            GPA Calculator
          </Typography>
          {/* <Button color="inherit">About</Button> */}
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
