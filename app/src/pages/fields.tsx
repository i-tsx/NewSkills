import React, { FunctionComponent, useState, useEffect } from "react";
import { useDataContext } from "../contexts/data";
import { useNavigate } from "react-router-dom";
import NavbarElement from "../components/Navbar";
import { FieldsContainer } from "./styles";

const fieldsOfStudy: any = {
  Engineering: ["Mathematics", "Physics"],
  Sciences: ["Chemistry", "Mathematics"],
  Medicine: ["Chemistry", "Biology"],
  "Social Sciences": ["English", "Arabic"],
  "Arts and Humanities": ["English", "Arabic", "Arts"],
  "Technology and Computer Science": ["Mathematics", "Computer Science"],
  "Business and Management": ["English", "Arabic", "Mathematics"],
};

const imagesOfFields: any = {
  Engineering: "/assets/engineers.svg",
  Sciences: "/assets/science.svg",
  Medicine: "/assets/medicine.svg",
  "Social Sciences": "/assets/social.svg",
  "Arts and Humanities": "/assets/arts.svg",
  "Technology and Computer Science": "/assets/software_engineer.svg",
  "Business and Management": "/assets/businessman.svg",
};

function selectFieldOfStudy(marks: any) {
  let bestField = null;
  let highestAverage = -1;

  for (const field in fieldsOfStudy) {
    const subjects = fieldsOfStudy[field];
    const subjectMarks = subjects.map((subject: any) => marks[subject] || 0);
    const averageMark =
      subjectMarks.reduce((total: any, mark: any) => total + mark, 0) /
      subjects.length;

    if (averageMark > highestAverage) {
      highestAverage = averageMark;
      bestField = field;
    }
  }

  return bestField;
}

interface FieldsProps {}

const Fields: FunctionComponent<FieldsProps> = () => {
  const { data } = useDataContext();
  const navigate = useNavigate();
  const [skill, setSkill] = useState<any>(null!);
  useEffect(() => {
    if (data.loading) return;
    if (!data?.user?.email) return navigate("/");
    else setSkill(selectFieldOfStudy(data?.user?.marks));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  if (!data?.user) return <></>;
  return (
    <>
      <NavbarElement />
      <FieldsContainer>
        <br />
        <h1>{data?.user.name}'s Marks</h1>
        <table>
          <tr>
            <th>Subject</th>
            <th>Mark</th>
          </tr>
          {data?.user.marks ? (
            Object.entries(data?.user.marks).map(([key, value]: any) => (
              <tr>
                <td>{key}</td>
                <td>{value}%</td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </table>
        <br />
        <h1>
          We recommend you to study <span>{skill}</span>
        </h1>
        <h1>
          Because you got high grades in{" "}
          {skill ? fieldsOfStudy[skill].join(", ") : ""}
        </h1>
        <img alt="asd" src={imagesOfFields[skill]} />
      </FieldsContainer>
    </>
  );
};

export default Fields;
