import React, { useState } from "react";
import {
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const Course = ({ id, name, credit, grade, allCourses, setAllCourses }) => {
  const isSmScreen = useMediaQuery("(max-width:900px)");

  const onNameChange = (e) => {
    let newAllCourses = allCourses;
    newAllCourses = newAllCourses?.map((course) => {
      if (course.id == id) {
        let newCourse = course;
        newCourse.name = e.target.value;
        return newCourse;
      } else {
        return course;
      }
    });
    setAllCourses(newAllCourses);
  };
  const onCreditChange = (e) => {
    let newAllCourses = allCourses;
    newAllCourses = newAllCourses?.map((course) => {
      if (course.id == id) {
        let newCourse = course;
        newCourse.credit = e.target.value;
        return newCourse;
      } else {
        return course;
      }
    });
    console.log("credit change", newAllCourses);
    setAllCourses(newAllCourses);
  };
  const onGradeChange = (e) => {
    let newAllCourses = allCourses;
    newAllCourses = newAllCourses?.map((course) => {
      if (course.id == id) {
        let newCourse = course;
        newCourse.grade = e.target.value;
        return newCourse;
      } else {
        return course;
      }
    });
    setAllCourses(newAllCourses);
  };

  const deleteCourseItem = () => {
    const newCourses = allCourses?.filter((course) => course.id !== id);
    setAllCourses(newCourses);
  };

  return (
    <Grid container marginTop={2} className="opening-animation">
      <Grid item xs={3.66} md={3.66} paddingRight={2}>
        <TextField
          size="small"
          fullWidth
          value={name}
          onChange={(e) => onNameChange(e)}
        />
      </Grid>
      <Grid item xs={3.66} md={3.66} paddingRight={2}>
        <Select
          fullWidth
          size="small"
          //   defaultValue={3}
          value={credit}
          onChange={(e) => onCreditChange(e)}
        >
          <MenuItem value={0.5}>0.5</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={1.5}>1.5</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={2.5}>2.5</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={3.5}>3.5</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={4.5}>4.5</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={3.66} md={3.66} paddingRight={isSmScreen ? 0 : 2}>
        <Select
          fullWidth
          size="small"
          //   defaultValue={4}
          value={grade}
          onChange={(e) => onGradeChange(e)}
        >
          <MenuItem value={4}>AA</MenuItem>
          <MenuItem value={28 / 8}>BA</MenuItem>
          <MenuItem value={3}>BB</MenuItem>
          <MenuItem value={20 / 8}>CB</MenuItem>
          <MenuItem value={2}>CC</MenuItem>
          <MenuItem value={12 / 8}>DC</MenuItem>
          <MenuItem value={1}>DD</MenuItem>
          <MenuItem value={4 / 8}>FD</MenuItem>
          <MenuItem value={0}>FF</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={1} md={1}>
        <Tooltip title="Sil">
          <IconButton onClick={() => deleteCourseItem()}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Course;
