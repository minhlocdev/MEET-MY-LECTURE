import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import S_Layout from "../../Layouts/S_Layout";
import S_ViewTeacherAboutme from "../../components/ViewTeacherProfile/S_ViewTeacherAboutme";
import GlobalContext from "../../context/GlobalContext";
import axios from "../../Services/customizeAxios";
import Breadcrumbs from "../../components/BreadcrumpCus";

const S_ViewTeacherProfile = () => {
  const { setSelectedLecturer, selectedLecturer } = useContext(GlobalContext);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { lecturerId } = useParams();
  const path = [
    {
      route: "/student",
      text: "Home",
    },
    {
      route: `/student/lecturer/profile/${lecturerId}`,
      text: `Lecturer's profile`,
    },
  ];

  useEffect(async () => {
    if (lecturerId != null) {
      await axios
        .get(`/api/v1/user/profile/${lecturerId}`)
        .then((response) => {
          setSelectedLecturer(response);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log("Error at Week.js " + error);
        });
    }
  }, []);
  useEffect(() => {
    axios
      .get(`/api/v1/students/subjects/lecturer/${lecturerId}`)
      .then((response) => {
        setSubjects(response);
        // console.log(response);
      })
      .catch((error) => {
        console.error("API call failed:", error);
      });
  }, []);
  return (
    <S_Layout>
      <Container>
        <Breadcrumbs items={path} />
        <Row>
          <Col md={12}>
            <Card className="my-4 ">
              <Card.Body className="py-2 ">
                <Row>
                  <Col md={6} className="py-1 text-center my-5 ">
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      selectedLecturer && (
                        <>
                          <h5>Lecturer ID:</h5>
                          <p>{selectedLecturer.userId}</p>
                          <h5>Name:</h5>
                          <p>{selectedLecturer.userName}</p>
                          <h5>Email Address:</h5>
                          <p>{selectedLecturer.email}</p>
                        </>
                      )
                    )}
                  </Col>

                  <Col md={6}>
                    <S_ViewTeacherAboutme
                      subjects={subjects}
                      setSubjects={setSubjects}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </S_Layout>
  );
};

export default S_ViewTeacherProfile;