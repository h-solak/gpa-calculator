import { useEffect, useState } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import { Row, Col, Button } from "reactstrap";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <div className="w-100 p-0 m-0" id="main-bg">
      <Toaster />
      <Header />
      {/* {isDisplayed ? (
        <Calculator />
      ) : (
        <button className="display-btn" onClick={() => setIsDisplayed(true)}>
          Hesaplamaya başla
        </button>
      )} */}
      <Calculator />
    </div>
  );
}

export default App;
