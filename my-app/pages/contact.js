import React from "react";
import "animate.css";

import Card from "react-bootstrap/Card";
import NavBar from "@/components/NavBar";

const contact = () => {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="text-container d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-end w-100 ">
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="">
            <i className="bi bi-linkedin p-2"></i>
          </a>
        </div>
        <div className="mb-4 text-center">
          <h1 className="second-heading animate__animated animate__fadeIn word-wrap">
            Contact me
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <NavBar />
        </div>
      </div>

      {/* Card */}
      <Card className="content-container card-style d-flex flex-column justify-content-center align-items-center mt-5">
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </main>
  );
};

export default contact;
