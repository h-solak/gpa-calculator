import {
  MdOutlineLanguage,
} from "react-icons/md";
import { Row, Col } from "reactstrap";
import { FiGithub } from "react-icons/fi"
const Header = () => {

  return (
    <Row>
      <Col sm="12">
        <header className="d-flex align-items-center justify-content-between px-5">
          <h2 className="fs-2">GPA CALCULATOR</h2>
          <a
            className="d-flex align-items-center rounded-circle icon-hvr p-1"
            href="https://github.com/h-solak"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="fs-4 pointer" />
          </a>
      </header>
      </Col>
    </Row>
  );
};

export default Header;
