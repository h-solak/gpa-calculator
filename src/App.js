import { useEffect, useState } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import { Row, Col } from "reactstrap";
function App() {
  // const [isDark, setIsDark] = useState(true);
  // useEffect(() => {
  //   //get the user's theme preference when the website is first opened
  //   const first = localStorage.getItem("gpa-calculator-isDark");
  //   if (first) {
  //     setIsDark(first);
  //     if (!isDark) {
  //       document.querySelector("body").style.backgroundImage =
  //         "linear-gradient(to right, #2b5876, #4e4376)";
  //     } else {
  //       document.querySelector("body").style.backgroundImage =
  //         "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)";
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("0" + localStorage.getItem("gpa-calculator-isDark"));
  //   localStorage.setItem("gpa-calculator-isDark", isDark);
  //   console.log("1" + localStorage.getItem("gpa-calculator-isDark"));
  // }, [isDark]);
  return (
    <Row className="w-100 p-0 m-0" id="main-bg">
      <Header />
      <Col sm="12">
        <Calculator />
      </Col>
    </Row>
  );
}

export default App;
