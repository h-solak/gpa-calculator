import { useEffect, useState } from "react";
import GradeInput from "./GradeInput";
import CourseList from "./CourseList";
import {
  Button,
  Table,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Tooltip,
} from "reactstrap";
import { RiDeleteBin7Line } from "react-icons/ri";
import toast from "react-hot-toast";
const Calculator = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [totalCredits, setTotalCredits] = useState(-1);
  const [gpa, setGpa] = useState(-1);

  const calculate = () => {
    let total_Credits = 0;
    let totalNumerator = 0;

    for (let i = 0; i < allCourses.length; i++) {
      parseFloat(totalCredits);
      total_Credits += parseFloat(allCourses[i].credit);
      console.log(totalCredits + " LOOOOP");
      totalNumerator +=
        parseFloat(allCourses[i].decimalGrade) *
        parseFloat(allCourses[i].credit);
    }

    console.log(totalNumerator + " NUMERATOR");
    console.log(totalCredits + " CREDITS");

    let newGpa = totalNumerator / total_Credits;
    setTotalCredits(total_Credits);
    setGpa(newGpa);
    toast.success("Ortalamanız hesaplandı!");
  };

  useEffect(() => {
    //hides gpa when user adds a new course or deletes a course
    setGpa(-1);
  }, [allCourses]);

  const handleDelete = (id) => {
    const newCourses = allCourses.filter((course) => course.id !== id);
    setAllCourses(newCourses);
  };

  return (
    <Row className="d-flex justify-content-center p-0 m-0 fade-in">
      <Col sm="12" md="6" className="mb-5">
        <p className="text-center fs-4 m-0 mb-5" style={{ fontWeight: "600" }}>
          GPA Hesaplayıcı
        </p>
        <Table striped hover className="p-0 m-0">
          <GradeInput allCourses={allCourses} setAllCourses={setAllCourses} />
          <tbody>
            {allCourses.length > 0 ? (
              <CourseList allCourses={allCourses} handleDelete={handleDelete} />
            ) : null}
          </tbody>
        </Table>
        {allCourses.length > 0 ? (
          <Row
            className="w-100 p-0 m-0 p-2"
            style={{
              background: "rgba(255,255,255,0.4)",
            }}
          >
            <Col
              xs="3"
              sm="3"
              md="2"
              className="mx-auto mx-md-0 d-flex align-items-center"
            >
              <Button
                className=""
                onClick={calculate}
                style={{ background: "#2980b9", border: "0px" }}
              >
                Hesapla
              </Button>
            </Col>
            <Col
              xs="3"
              sm="3"
              md="2"
              className="mx-auto mx-md-0 d-flex align-items-center"
            >
              <Button
                className="d-flex align-items-center"
                onClick={() => {
                  setAllCourses([]);
                  toast.success("Başarıyla sıfırlandı!");
                }}
                style={{ background: "#e74c3c", border: "0px" }}
              >
                Sıfırla
              </Button>
            </Col>
            {gpa >= 0 ? (
              <Col
                xs="12"
                sm="6"
                md="8"
                className="d-flex align-items-baseline gap-3 justify-content-center justify-content-md-end"
              >
                <div className="created d-flex align-items-baseline gap-4 px-2">
                  <span className="text-center" style={{ fontWeight: "500" }}>
                    Toplam Kredi: {totalCredits}
                  </span>
                  <span
                    className="fs-4 h-100 text-center"
                    title={gpa.toFixed(4)}
                    style={{ fontWeight: "600" }}
                  >
                    GPA: {gpa.toFixed(2)}
                  </span>
                </div>
              </Col>
            ) : null}
          </Row>
        ) : null}
      </Col>
    </Row>
  );
};

export default Calculator;
