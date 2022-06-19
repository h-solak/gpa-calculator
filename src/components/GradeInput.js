import { useState } from "react";
import { nanoid } from "nanoid";

const GradeInput = ({ allCourses, setAllCourses }) => {
  const [courseName, setCourseName] = useState("");

  const handleCourseNameChange = (e) => {
    if (e.target.value.length < 20) {
      setCourseName(e.target.value);
    }
  };

  const convertToDecimal = (letter) => {
    let converted;
    switch (letter) {
      case "FF":
        converted = 0;
        break;
      case "FD":
        converted = 4 / 8;
        break;
      case "DD":
        converted = 1;
        break;
      case "DC":
        converted = 12 / 8;
        break;
      case "CC":
        converted = 2;
        break;
      case "CB":
        converted = 20 / 8;
        break;
      case "BB":
        converted = 3;
        break;
      case "BA":
        converted = 28 / 8;
        break;
      case "AA":
        converted = 4;
        break;
      default:
        converted = 0;
    }
    return converted;
  };

  const addCourse = () => {
    let newCourse = {
      id: nanoid(),
      name: courseName,
      credit: document.getElementById("credit").value,
      letterGrade: document.getElementById("grade").value,
      decimalGrade: convertToDecimal(document.getElementById("grade").value),
    };
    let newAllCourses = [...allCourses, newCourse];
    setAllCourses(newAllCourses);

    //Reset only the name
    setCourseName("");
  };

  return (
    <div className="add-course d-flex align-items-center justify-content-between">
      <div>
        <input
          type="text"
          aria-label="Course Name"
          className="form-control p-2"
          placeholder="Ders adı..."
          onChange={handleCourseNameChange}
          value={courseName}
        />
      </div>
      <div>
        <select id="credit" className="form-control">
          <option value={0.5}>0.5</option>
          <option value={1}>1</option>
          <option value={1.5}>1.5</option>
          <option value={2}>2</option>
          <option value={2.5}>2.5</option>
          <option value={3} selected>
            3
          </option>
          <option value={3.5}>3.5</option>
          <option value={4}>4</option>
          <option value={4.5}>4.5</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <select id="grade" className="form-control">
          <option value={"AA"}>AA</option>
          <option value={"BA"}>BA</option>
          <option value={"BB"}>BB</option>
          <option value={"CB"}>CB</option>
          <option value={"CC"}>CC</option>
          <option value={"DC"}>DC</option>
          <option value={"DD"}>DD</option>
          <option value={"FD"}>FD</option>
          <option value={"FF"}>FF</option>
        </select>
      </div>

      <div>
        <button className="btn btn-dark" onClick={addCourse}>
          Ekle
        </button>
      </div>
    </div>
  );
};

export default GradeInput;
