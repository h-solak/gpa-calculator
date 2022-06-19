import { useState, useEffect } from "react";
import Course from "./Course";
const CouresList = ({ allCourses, handleDelete }) => {
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
    //hide gpa when user adds a new course or deletes a course
    setGpa(-1);
  }, [allCourses]);

  return (
    <div className="courses">
      <div className="courses-table mt-3">
        {allCourses.map((course) => (
          <Course
            key={course.id}
            id={course.id}
            name={course.name}
            credit={course.credit}
            letterGrade={course.letterGrade}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <button className="mt-3 btn btn-dark" onClick={calculate}>
        Calculate
      </button>
      {gpa >= 0 ? (
        <span className="fs-1" title={gpa.toFixed(4)}>
          {gpa.toFixed(2)}
        </span>
      ) : null}
    </div>
  );
};

export default CouresList;
