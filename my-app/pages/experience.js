import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css";
import NavBar from "@/components/NavBar";

import { fetchExperience, fetchEducationById } from "../utils/api";

export async function getServerSideProps() {
  try {
    const dataExperience = await fetchExperience();
    const dataEducation = await fetchEducationById(1);

    return {
      props: {
        experience: dataExperience,
        educationById: dataEducation,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        experience: null,
        educationById: null,
        error: "Data could not be fetched.",
      },
    };
  }
}

const ExperiencePage = ({ experience, educationById }) => {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="text-container d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-end w-100 ">
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="">
            <i className="bi bi-linkedin p-3"></i>
          </a>
        </div>
        <div className="mb-3 text-center">
          <h1 className="second-heading animate__animated animate__fadeIn word-wrap">
            Experience
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <NavBar />
        </div>
      </div>

      <Card className="container-fluid container-size card-style d-flex flex-column justify-content-center align-items-center mt-5">
        <Card.Body className="w-100">
          {/* Work experience */}
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center">
            Work experience
          </Card.Title>
          <Row className="justify-content-center align-items-center mb-3">
            <Col md={3} sm={6} className="mb-3">
              <Card.Title>Title:</Card.Title>
              {experience.employment.map((item) => (
                <Card.Text key={item.id}>{item.job_title}</Card.Text>
              ))}
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card.Title>Company:</Card.Title>
              {experience.employment.map((item) => (
                <Card.Text key={item.id}>{item.company}</Card.Text>
              ))}
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card.Title>Period:</Card.Title>
              {experience.employment.map((item) => (
                <Card.Text key={item.id}>
                  {item.start_year}-{item.end_year}
                </Card.Text>
              ))}
            </Col>
          </Row>
        </Card.Body>

        {/* Education */}
        <Card.Body className="w-100">
          <Card.Title className="titel-experience">Education</Card.Title>
          <Row className="justify-content-center align-items-center mb-3">
            <Col md={3} sm={6} className="mb-3">
              <Card.Title className="">Degree:</Card.Title>
              {experience.education.map((item) => (
                <Card.Text key={item.id}>{item.degree}</Card.Text>
              ))}
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card.Title>Institution:</Card.Title>
              {experience.education.map((item) => (
                <Card.Text key={item.id}>{item.institution}</Card.Text>
              ))}
            </Col>
            <Col md={2} sm={6} className="mb-3">
              <Card.Title>City:</Card.Title>
              {experience.education.map((item) => (
                <Card.Text key={item.id}>{item.city}</Card.Text>
              ))}
            </Col>
            <Col md={2} sm={6} className="mb-3">
              <Card.Title>Period:</Card.Title>
              {experience.education.map((item) => (
                <Card.Text key={item.id}>
                  {item.start_year}-{item.end_year}
                </Card.Text>
              ))}
            </Col>
          </Row>
        </Card.Body>

        <Card.Body className="w-100">
          <Card.Title className="titel-experience">
            Development experience
          </Card.Title>
          <Row className="mb-3">
            <Col md={3} sm={6} className="mb-3">
              <Card.Title className="">Company:</Card.Title>
              {experience.developmentExperience.map((item) => (
                <Card.Text key={item.id}>{item.lia}</Card.Text>
              ))}
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card.Title>Title:</Card.Title>
              {experience.developmentExperience.map((item) => (
                <Card.Text key={item.id}>{item.title}</Card.Text>
              ))}
            </Col>
            <Col md={2} sm={6} className="mb-3">
              <Card.Title>Period:</Card.Title>
              {experience.developmentExperience.map((item) => (
                <Card.Text key={item.id}>
                  {item.start_year}-{item.end_year}
                </Card.Text>
              ))}
            </Col>
          </Row>
        </Card.Body>

        {/* Technical Skills */}
        <Card.Body className="w-100">
          <Card.Title className="titel-experience">Technical skills</Card.Title>
          <Row className="d-flex">
            <Col md={3} sm={6} className="mb-3">
              <Card.Title className="sub-title">Type:</Card.Title>
              {experience.technicalSkills.map((item) => (
                <Card.Text key={item.id}>{item.skill_type}</Card.Text>
              ))}
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card.Title>Name:</Card.Title>
              {experience.technicalSkills.map((item) => (
                <Card.Text key={item.id}>{item.skill_name}</Card.Text>
              ))}
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card.Title>Level of Experience:</Card.Title>
              {experience.technicalSkills.map((item) => (
                <Card.Text key={item.id}>{item.level_of_experience}</Card.Text>
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </main>
  );
};

export default ExperiencePage;
