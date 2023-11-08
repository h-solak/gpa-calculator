import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Course from "./Course";
import { randomIdGenerator } from "../../utils/randomIdGenerator";
import GradesSvg from "../../assets/undrawgrades.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
const Calculator = () => {
  const { t } = useTranslation();
  const [allCourses, setAllCourses] = useState([]);
  const [gpa, setGpa] = useState(-1);
  const courseContainerRef = useRef(null);

  const isSmScreen = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    const savedCourses = JSON.parse(
      localStorage.getItem("gpa-calculator-hs-courses")
    );
    if (savedCourses?.length > 0) {
      console.log("yes", savedCourses);
      setAllCourses(savedCourses);
    }
  }, []);

  const calculate = () => {
    let totalCredits = 0;
    let totalNumerator = 0;

    allCourses?.map((course) => {
      parseFloat(totalCredits);
      totalCredits += parseFloat(course.credit);
      console.log(totalCredits + " LOOOOP");
      totalNumerator += parseFloat(course.grade) * parseFloat(course.credit);
    });

    // for (let i = 0; i < allCourses.length; i++) {
    //   parseFloat(totalCredits);
    //   total_Credits += parseFloat(allCourses[i].credit);
    //   console.log(totalCredits + " LOOOOP");
    //   totalNumerator +=
    //     parseFloat(allCourses[i].decimalGrade) *
    //     parseFloat(allCourses[i].credit);
    // }

    console.log(totalNumerator + " NUMERATOR");
    console.log(totalCredits + " CREDITS");

    let newGpa = totalNumerator / totalCredits;
    console.log("end", newGpa);
    setGpa(newGpa);
  };

  useEffect(() => {
    //hides gpa when user adds a new course or deletes a course
    setGpa(-1);
    const newAllCourses = allCourses;
    localStorage.setItem(
      "gpa-calculator-hs-courses",
      JSON.stringify(newAllCourses)
    );
  }, [allCourses]);

  const createNewCourse = () => {
    const newCourse = {
      id: randomIdGenerator(),
      name: "",
      credit: 3,
      grade: 4,
    };
    const newAllCourses = [...allCourses, newCourse];
    setAllCourses(newAllCourses);
    //scroll to the bottom
    setTimeout(() => {
      courseContainerRef.current.scrollTop =
        courseContainerRef.current.scrollHeight;
    }, 50);
  };
  return (
    <Box>
      {/* {!allCourses.length > 0 ? (
        
      ) : null} */}

      {allCourses?.length > 0 ? (
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container marginTop={2}>
              <Grid item xs={3.66} md={3.66}>
                <Typography>{t("courseName")}</Typography>
              </Grid>
              <Grid item xs={3.66} md={3.66}>
                <Typography>{t("credit")}</Typography>
              </Grid>
              <Grid item xs={3.66} md={3.66}>
                <Typography>{t("letterGrade")}</Typography>
              </Grid>
            </Grid>
            <Box
              ref={courseContainerRef}
              sx={{
                overflowY: "auto",
                maxHeight: isSmScreen
                  ? "calc(100vh - 200px)"
                  : "calc(100vh - 200px)",
              }}
            >
              {allCourses?.map((course) => (
                <Course
                  key={course.id}
                  id={course.id}
                  name={course.name}
                  credit={course.credit}
                  grade={course.grade}
                  allCourses={allCourses}
                  setAllCourses={setAllCourses}
                />
              ))}
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={2} marginTop={2}>
              <Button
                variant="contained"
                color="highlight"
                startIcon={<AddIcon />}
                onClick={createNewCourse}
                sx={{ textTransform: "none", height: 36, color: "white" }}
              >
                {t(`${isSmScreen ? "course" : "addNewCourse"}`)}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  calculate();
                  window.scrollTo(0, document.body.scrollHeight);
                }}
                sx={{
                  height: 36,
                }}
              >
                {t("calculate")}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => setAllCourses([])}
                sx={{
                  height: 36,
                }}
              >
                {t("reset")}
              </Button>
            </Box>
          </Grid>
          {/* Mobile Gpa Result Display */}
          {gpa >= 0 && isSmScreen ? (
            <Box
              className="card"
              height={"60px"}
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              justifyContent={"center"}
              sx={{
                backgroundColor: "highlight.main",
                position: "absolute",
                bottom: 150,
                right: "0%",
                paddingX: 4,
                paddingY: 2,
                width: 150,
                borderRadius: 1,
              }}
            >
              <Typography fontSize={24} color={"light.main"} marginBottom={-1}>
                GPA
              </Typography>
              <Typography
                fontSize={36}
                color={"light.main"}
                fontWeight={700}
                marginTop={-1}
              >
                {gpa.toFixed(2)}
              </Typography>

              <Box
                position={"absolute"}
                right={5}
                top={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  backgroundColor: "light.main",
                  padding: 0.2,
                  borderRadius: 1,
                }}
                onClick={() => setGpa(-1)}
              >
                <CloseIcon />
              </Box>
            </Box>
          ) : null}
          {/* Pc GPA result display */}
          {gpa >= 0 && !isSmScreen ? (
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                height: "calc(100vh - 100px)",
              }}
            >
              <Box
                className="opening-animation"
                textAlign={"center"}
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: 4,
                }}
                padding={4}
              >
                <Typography
                  fontSize={54}
                  color={"light.main"}
                  marginBottom={-3}
                >
                  GPA
                </Typography>
                <Typography
                  fontSize={102}
                  color={"light.main"}
                  fontWeight={700}
                  marginTop={-3}
                >
                  {gpa.toFixed(2)}
                </Typography>
              </Box>
            </Grid>
          ) : null}
        </Grid>
      ) : (
        <Box
          textAlign={"center"}
          sx={{ height: "calc(100vh - 100px)" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            src={GradesSvg}
            alt="calculate img"
            width={400}
            className="fade-in-ltr"
          />
          <Typography
            marginTop={2}
            color={"secondary.main"}
            className="fade-in-rtl"
          >
            {t("startCalculatingText")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={createNewCourse}
            sx={{ marginTop: 2, textTransform: "none" }}
            className="fade-in-ltr"
          >
            {t("startCalculatingBtn")}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Calculator;
