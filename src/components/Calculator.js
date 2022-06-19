import { useEffect, useState } from "react";
import GradeInput from "./GradeInput";
import CourseList from "./CourseList";
const Calculator = () => {
  const [allCourses, setAllCourses] = useState([]);
  // const handleChange = (e) => {
  //   if (e.target.value >= 0 && e.target.value < 10) {
  //     setCourseNum(e.target.value);
  //   }
  // };

  useEffect(() => {
    console.log(allCourses);
  }, [allCourses]);

  const handleDelete = (id) => {
    const newCourses = allCourses.filter((course) => course.id !== id);
    setAllCourses(newCourses);
  };

  return (
    <div className="calculator d-flex flex-column gap-4">
      <div className="d-flex align-items-center flex-column mt-5">
        <GradeInput allCourses={allCourses} setAllCourses={setAllCourses} />
        <div className="grades">
          {allCourses.length > 0 ? (
            <CourseList allCourses={allCourses} handleDelete={handleDelete} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
