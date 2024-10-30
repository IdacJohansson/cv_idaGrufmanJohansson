import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css";
import Header from "@/components/Header";

const ContactPage = () => {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;

  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Header title="Contact" />

      <Card className="container-fluid container-size card-style d-flex flex-column justify-content-center align-items-center mt-5">
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mt-5">
            Contact me
          </Card.Title>
          <Row className="justify-content-center align-items-center text-center mb-5">
            <Col md={4} sm={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Phone:</Card.Title>
              <Card.Text className="card-text">{phone}</Card.Text>
            </Col>
            <Col md={4} sm={4} xs={4} className="mb-3 text-center">
              <Card.Title className="sub-title">Email:</Card.Title>
              <Card.Text className="card-text">{email}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </main>
  );
};

export default ContactPage;
