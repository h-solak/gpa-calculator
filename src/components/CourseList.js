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

  return (
    <>
      {allCourses.map((course) => (
        <tr key={course.id}>
          <Course
            id={course.id}
            name={course.name}
            credit={course.credit}
            letterGrade={course.letterGrade}
            handleDelete={handleDelete}
          />
        </tr>
      ))}
    </>
  );
};

export default CouresList;
