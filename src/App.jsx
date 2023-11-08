import { useEffect } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../theme";
import Calculator from "./components/Calculator/Calculator";
import Layout from "./layout/Layout";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    //if local storage has language item, choose it
    const crrLanguage = localStorage.getItem("gpa-calculator-hs-language");
    if (["en", "tr"].includes(`${crrLanguage}`)) {
      i18n.changeLanguage(`${crrLanguage}`);
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Calculator />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
