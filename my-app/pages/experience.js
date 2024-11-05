import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css";
import variables from "../styles/variables.module.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import Header from "@/components/Header";

import { fetchExperience } from "../utils/api";

export async function getServerSideProps() {
  try {
    const dataExperience = await fetchExperience();

    return {
      props: {
        experience: dataExperience,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        experience: null,
        error: "Data could not be fetched.",
      },
    };
  }
}

const ExperiencePage = ({ experience }) => {
  const levelProgressMap = {
    Advanced: 100,
    Intermediate: 50,
    Beginner: 30,
  };

  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Header title="Experience" />

      <Card className="container-fluid container-size card-style d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <Card.Body className="col-12 col-md-10">
          {/* Work experience */}
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Work experience
          </Card.Title>
          <Row className="justify-content-center align-items-center mb-3">
            <Col md={4} sm={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Title:</Card.Title>
              {experience.employment.map((item) => (
                <Card.Text className="card-text" key={item.id}>
                  {item.job_title}
                </Card.Text>
              ))}
            </Col>
            <Col md={4} sm={5} xs={5} className="mb-3">
              <Card.Title className="sub-title">Company:</Card.Title>
              {experience.employment.map((item) => (
                <Card.Text className="card-text" key={item.id}>
                  {item.company}
                </Card.Text>
              ))}
            </Col>
            <Col md={3} sm={3} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
              {experience.employment.map((item) => (
                <Card.Text className="card-text" key={item.id}>
                  {item.start_year}-{item.end_year}
                </Card.Text>
              ))}
            </Col>
          </Row>
        </Card.Body>
        <div className="title-underline"></div>
        {/* Development experience */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Development experience
          </Card.Title>
          <Row className="justify-content-center align-items-center ">
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Title:</Card.Title>
            </Col>
            <Col md={4} xs={5} className="mb-3">
              <Card.Title className="sub-title">Company:</Card.Title>
            </Col>
            <Col md={3} xs={4} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
            </Col>
          </Row>
          {experience.developmentExperience.map((item) => (
            <Row
              key={item.id}
              className="justify-content-center align-items-center mb-3 "
            >
              <Col md={4} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">{item.title}</Card.Text>
              </Col>
              <Col md={4} xs={5} className="mb-3">
                <Card.Text className="card-text-xs">{item.lia}</Card.Text>
              </Col>
              <Col md={3} xs={4} className="mb-3">
                <Card.Text className="card-text-xs">
                  {item.start_year}-{item.end_year}
                </Card.Text>
              </Col>
            </Row>
          ))}
        </Card.Body>
        <div className="title-underline"></div>
        {/* Technical Skills */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Technical skills
          </Card.Title>

          {experience.technicalSkills.map((item) => (
            <Row
              key={item.id}
              className="justify-content-center align-items-center mb-3"
            >
              <Col md={3} sm={4} xs={4} className="mb-3">
                <Card.Text className="card-text">{item.skill_type}</Card.Text>
              </Col>
              <Col md={4} sm={5} xs={5} className="mb-3">
                <Card.Text className="card-text">{item.skill_name}</Card.Text>
              </Col>
              <Col md={5} sm={6} xs={6} className="mb-3">
                <ProgressBar
                  now={levelProgressMap[item.level_of_experience] || 0}
                  style={{ width: "100%" }}
                  color={variables.backgroundColor}
                />
              </Col>
            </Row>
          ))}
        </Card.Body>

        <div className="title-underline"></div>
        {/* Education */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Education
          </Card.Title>
          <Row className="justify-content-center align-items-center ">
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Degree:</Card.Title>
            </Col>
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Institution:</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">City:</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
            </Col>
          </Row>
          {experience.education.map((item) => (
            <Row
              key={item.id}
              className="justify-content-center align-items-center mb-3 "
            >
              <Col md={4} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">{item.degree}</Card.Text>
              </Col>
              <Col md={4} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">
                  {item.institution}
                </Card.Text>
              </Col>
              <Col md={2} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">{item.city}</Card.Text>
              </Col>
              <Col md={2} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">
                  {item.start_year}-{item.end_year}
                </Card.Text>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>
    </main>
  );
};

export default ExperiencePage;
