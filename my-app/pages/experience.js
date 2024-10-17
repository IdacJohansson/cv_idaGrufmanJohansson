import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css";

import NavBar from "@/components/NavBar";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/experience");
  const data = await res.json();

  return {
    props: {
      languages: data.languages,
      education: data.education,
    },
  };
}

const experience = ({ languages, education }) => {
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

      {/* Card */}
      <Card className="container container-size card-style d-flex flex-column justify-content-center align-items-center mt-5">
        <Card.Body>
          <Card.Title className="titel-experience">Work experience</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        {/*  */}
        <Card.Body>
          <Card.Title className="titel-experience">
            Development experience
          </Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <ul className="list">
            {education.map((education) => (
              <li key={education.id}>{education.degree}</li>
            ))}
          </ul>
        </Card.Body>
        {/*  */}
        <Card.Body className="body-size">
          <Card.Title className="titel-experience">Education</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Row>
            <Col md={2} className="mb-3">
              <Card.Title>Degree</Card.Title>
              {education.map((item) => (
                <Card.Text key={item.id}>{item.degree}</Card.Text>
              ))}
            </Col>
            <Col md={2} className="mb-3">
              <Card.Title>Institution</Card.Title>
              {education.map((item) => (
                <Card.Text key={item.id}>{item.institution}</Card.Text>
              ))}
            </Col>
            <Col md={2} className="mb-3">
              <Card.Title>City</Card.Title>
              {education.map((item) => (
                <Card.Text key={item.id}>{item.city}</Card.Text>
              ))}
            </Col>
            <Col md={2} className="mb-3">
              <Card.Title>Start Year</Card.Title>
              {education.map((item) => (
                <Card.Text key={item.id}>{item.start_year}</Card.Text>
              ))}
            </Col>
            <Col md={2} className="mb-3">
              <Card.Title>End Year</Card.Title>
              {education.map((item) => (
                <Card.Text key={item.id}>{item.end_year}</Card.Text>
              ))}
            </Col>
          </Row>
        </Card.Body>
        {/*  */}
        <Card.Body>
          <Card.Title className="titel-experience">Technical skills</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <ul className="list">
            {education.map((education) => (
              <li key={education.id}>{education.degree}</li>
            ))}
          </ul>
        </Card.Body>
        {/*  */}
        <Card.Body>
          <Card.Title className="titel-experience">Other</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <ul className="list">
            {education.map((education) => (
              <li key={education.id}>{education.degree}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </main>
  );
};

export default experience;
