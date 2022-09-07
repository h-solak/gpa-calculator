import { useState } from "react";
import { nanoid } from "nanoid";
import { Button, Input } from "reactstrap";

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
    console.log(courseName);
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
    <>
      <thead>
        <th className="text-center" style={{ fontWeight: "500" }}>
          Ders Adı
        </th>
        <th className="text-center" style={{ fontWeight: "500" }}>
          <p className="m-0 p-0">
            <span>Kredi</span>
            <span className="text-danger">*</span>
          </p>
        </th>
        <th className="text-center" style={{ fontWeight: "500" }}>
          <p className="m-0 p-0">
            <span>Not</span>
            <span className="text-danger">*</span>
          </p>
        </th>
        <th className="text-center" style={{ fontWeight: "500" }}></th>
      </thead>
      <thead
        className=""
        style={{
          borderTop: "0.2px solid rgba(255,255,255,0.5)",
        }}
      >
        <th>
          <Input
            type="text"
            aria-label="Course Name"
            className="form-control"
            placeholder="Mikroekonomi..."
            onChange={handleCourseNameChange}
            value={courseName}
            style={{
              border: "0px",
              borderRadius: "0%",
            }}
          />
        </th>
        <th>
          <Input
            type="select"
            id="credit"
            className="form-control text-center"
            style={{
              border: "0px",
              borderRadius: "0%",
            }}
          >
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
          </Input>
        </th>
        <th>
          <Input
            type="select"
            id="grade"
            className="form-control text-center"
            style={{
              border: "0px",
              borderRadius: "0%",
            }}
          >
            <option value={"AA"}>AA</option>
            <option value={"BA"}>BA</option>
            <option value={"BB"}>BB</option>
            <option value={"CB"}>CB</option>
            <option value={"CC"}>CC</option>
            <option value={"DC"}>DC</option>
            <option value={"DD"}>DD</option>
            <option value={"FD"}>FD</option>
            <option value={"FF"}>FF</option>
          </Input>
        </th>

        <th className="">
          <Button
            color="dark"
            className="w-100"
            onClick={addCourse}
            style={{
              background: "#2980b9",
              border: "0px",
              borderRadius: "0px",
            }}
          >
            Ekle
          </Button>
        </th>
      </thead>
    </>
  );
};

export default GradeInput;
