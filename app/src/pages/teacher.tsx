import React, { FunctionComponent, useEffect, useState } from "react";
import NavbarElement from "../components/Navbar";
import axios from "axios";
import { useDataContext } from "../contexts/data";
import { useNavigate } from "react-router-dom";
import { StudentsContainer } from "./styles";
interface TeacherProps {}

const grades: any = {
  "12_ADV-B": "Grade 12 Advanced - Boys",
  "12_ADV-G": "Grade 12 Advanced - Girls",
};

const Teacher: FunctionComponent<TeacherProps> = () => {
  const { data } = useDataContext();
  const queryParams = new URLSearchParams(window.location.search);
  const grade: any = queryParams.get("grade");
  const [students, setStudents] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data?.user) return;
    else if (data?.user.role !== "teacher") return navigate("/");
    setStudents([]);
    axios
      .get(`http://192.168.0.195/user/teacher/${grade}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        setStudents(data || []);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, grade]);

  return (
    <>
      <NavbarElement />
      <StudentsContainer>
        <h1>{grades[grade]}</h1>
        <table>
          <tr>
            <th>Student</th>
            <th>Grade</th>
            <th>Mathematics</th>
            <th>Physics</th>
            <th>Biology</th>
            <th>English</th>
            <th>Arabic</th>
            <th>Chemistry</th>
            <th>Arts</th>
            <th>Computer Science</th>
          </tr>
          {students.map((student: any) => (
            <tr>
              <td>{student.name}</td>
              <td>{grades[grade]}</td>
              <td>{student.marks.Mathematics}%</td>
              <td>{student.marks.Physics}%</td>
              <td>{student.marks.Biology}%</td>
              <td>{student.marks.English}%</td>
              <td>{student.marks.Arabic}%</td>
              <td>{student.marks.Chemistry}%</td>
              <td>{student.marks.Arts}%</td>
              <td>{student.marks["Computer Science"]}%</td>
            </tr>
          ))}
        </table>
      </StudentsContainer>
    </>
  );
};

export default Teacher;
