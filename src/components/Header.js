import { MdOutlineLanguage } from "react-icons/md";
import { Row, Col } from "reactstrap";
import { FiGithub } from "react-icons/fi";
const Header = () => {
  return (
    <Row
      className="m-0 p-0"
      // style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
    >
      <Col sm="12">
        <header
          className="d-flex align-items-center justify-content-center justify-content-sm-end px-4"
          title="Github hesabıma göz atın..."
        >
          <a
            className="d-flex align-items-center gap-1 p-1 text-decoration-none fs-4"
            href="https://github.com/h-solak"
            target="_blank"
            rel="noreferrer"
            style={{ fontWeight: "700", fontFamily: "'Caveat'" }}
          >
            <FiGithub className="fs-4 pointer" /> Hasan Solak
          </a>
        </header>
      </Col>
    </Row>
  );
};

export default Header;
