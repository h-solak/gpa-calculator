import { useEffect, useState } from "react";
import GradeInput from "./GradeInput";
import CourseList from "./CourseList";
import { Button, Table, Row, Col, Card, CardTitle, CardBody, Tooltip } from 'reactstrap';
const Calculator = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [gpa, setGpa] = useState(-1);

  const calculate = () => {
    let totalCredits = 0;
    let totalNumerator = 0;

    for (let i = 0; i < allCourses.length; i++) {
      parseFloat(totalCredits);
      totalCredits += parseFloat(allCourses[i].credit);
      console.log(totalCredits + " LOOOOP");
      totalNumerator +=
        parseFloat(allCourses[i].decimalGrade) *
        parseFloat(allCourses[i].credit);
    }

    console.log(totalNumerator + " NUMERATOR");
    console.log(totalCredits + " CREDITS");

    let newGpa = totalNumerator / totalCredits;
    setGpa(newGpa);
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
    <Row className="d-flex justify-content-center">
      <Col sm="12" md="6" className="">
        <Table striped  className="">
          <GradeInput allCourses={allCourses} setAllCourses={setAllCourses} />
          <tbody>
              {allCourses.length > 0 ? (
                <CourseList allCourses={allCourses} handleDelete={handleDelete} />
              ) : null}

              {allCourses.length > 0 ?
          (<tr className="">
            <td>
              <Button className="mt-3 btn btn-dark" onClick={calculate}>
                Calculate
              </Button>
            </td>
            <td className="" style={{opacity: "0"}}>a</td>
            <td className="" style={{opacity: "0"}}>a</td>
            {gpa >= 0 ? (
              <td title={gpa.toFixed(4)}>
                <span className="fs-3">{gpa.toFixed(2)}</span>
              </td>
          ) : null}
          </tr>) : null }
              
          </tbody>
          <tfoot className="d-flex align-items-center">
          
            
          </tfoot>
        </Table>
      </Col>
          
    </Row>
  );
};

export default Calculator;
