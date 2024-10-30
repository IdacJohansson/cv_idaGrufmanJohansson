import React from "react";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "animate.css";
import Card from "react-bootstrap/Card";
import ImageIda from "@/components/ImageIda";
import Header from "@/components/Header";


import { fetchAbout, fetchToday } from "../utils/api";

export async function getServerSideProps() {
  try {
    const dataAbout = await fetchAbout();
    const dataTody = await fetchToday();

    return {
      props: {
        about: dataAbout,
        today: dataTody,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        about: null,
        today: null,
        error: "Data could not be fetched.",
      },
    };
  }
}

const Index = ({ about, today }) => {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-start">
          <ImageIda />
        </div>
        <Header titleLarge = "Hi" title="I'm Ida" />
      </div>

      {/* Card */}
      <Card className="container container-size card-style mt-5 mb-5">
        <Card.Body>
          <div className="row">
            <div className="col d-flex flex-column">
              <Card.Title className="title-previous-experience">
                About me
              </Card.Title>
              {about.aboutMe.map((item) => (
                <div key={item.id}>
                  <Card.Text>{item.first_content}</Card.Text>
                  <Card.Text>{item.second_content}</Card.Text>
                  <Card.Text>{item.third_content}</Card.Text>
                  <Card.Text>{item.fourth_content}</Card.Text>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              <Card.Title className="title-previous-experience">
                Today
              </Card.Title>
              {today.today.map((item) => (
                <div key={item.id}>
                  <Card.Text>{item.first_content}</Card.Text>
                  <Card.Text>{item.second_content}</Card.Text>
                  <Card.Text>{item.third_content}</Card.Text>
                  <Card.Text>{item.fourth_content}</Card.Text>
                </div>
              ))}
              <Card.Link
                className="icon-link icon-link-hover mt-2"
                href="/experience"
              >
                Learn more about my experiences here
                <i className="bi bi-arrow-right"></i>
              </Card.Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </main>
  );
};

export default Index;
