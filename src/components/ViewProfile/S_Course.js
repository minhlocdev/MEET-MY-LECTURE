import React, { useEffect, useState } from "react";
import axios from "../../Services/customizeAxios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useData } from "../../context/DataContext";
const S_Course = () => {
  const [subjectData, setSubjectData] = useState([]);
  const { loginUser } = useData();
  const studentId = loginUser.userId;

  useEffect(() => {
    axios
      .get(`/api/v1/students/${studentId}/subjects/lecturers`)
      .then((response) => {
        setSubjectData(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("API call failed:", error);
      });
  }, []);
  const handleDeleteSubject = (subjectId, lecturerId) => {
    const deleteSubject = {
      lecturerId: lecturerId,
      studentId: studentId,
      subjectId: subjectId,
    };

    axios
      .put(`/api/v1/students/profile/subject-deleting`, deleteSubject)
      .then(() => {
        setSubjectData((prevSubjects) =>
          prevSubjects.filter((subject) => subject.subjectId !== subjectId)
        );

        toast.success("Delete Subject Successfully");
      })
      .catch((error) => {
        console.error("Delete subject failed:", error);
        toast.error("Failed to delete subject");
      });
  };

  return (
    <div className="">
      <strong>Course:</strong>
      {subjectData.map((res) => (
        <p key={res.lecturerId}>
          <FontAwesomeIcon icon={faBriefcase} /> {res.subjectId} -{" "}
          {res.lecturerName}
          <FontAwesomeIcon
            className="mx-3"
            icon={faTrash}
            onClick={() => handleDeleteSubject(res.subjectId, res.lecturerId)}
          />
        </p>
      ))}
    </div>
  );
};

export default S_Course;