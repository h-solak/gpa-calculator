import React from "react";
import { TiDelete } from "react-icons/ti";
const Course = ({ id, name, credit, letterGrade, handleDelete }) => {
  return (
    <>
      <td className="text-start">{name.length > 0 ? name : "Ders"}</td>
      <td className="text-center">{credit}</td>
      <td className="text-center">{letterGrade}</td>
      <td className="">
        <div className="w-100 d-flex justify-content-center">
          <TiDelete
            className="fs-2 pointer"
            onClick={() => handleDelete(id)}
            style={{ color: "#e74c3c" }}
          />
        </div>
      </td>
    </>
  );
};

export default Course;
