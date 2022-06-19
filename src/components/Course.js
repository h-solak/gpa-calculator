import React from "react";
import { TiDelete } from "react-icons/ti";
const Course = ({ id, name, credit, letterGrade, handleDelete }) => {
  return (
    <div className="d-flex align-items-center justify-content-around">
      <span className="">{name.lengspan > 0 ? name : "Course"}</span>
      <span className="">{credit}</span>
      <span className="">{letterGrade}</span>
      <TiDelete className="fs-2 pointer red" onClick={() => handleDelete(id)} />
    </div>
  );
};

export default Course;
