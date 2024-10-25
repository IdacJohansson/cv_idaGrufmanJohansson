import React from "react";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "animate.css";
import Card from "react-bootstrap/Card";

import NavBar from "@/components/NavBar";
import ImageIda from "@/components/ImageIda";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.DEVELOPMENT_API_URL}/api/ida`);
  const data = await res.json();

  return {
    props: {
      ida: data.ida,
      frontendEducation: data.frontendEducation,
    },
  };
}

const index = (ida, frontendEducation) => {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-start">
          <ImageIda />
        </div>
        <header className="text-container d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-row justify-content-end w-100 ">
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin p-2"></i>
            </a>
          </div>
          <div className="mb-4 text-center">
            <h1 className="heading animate__animated animate__fadeIn word-wrap">
              <span className="heading-lg text-right">Hi,</span>{" "}
              <div className="heading">I'm Ida</div>
            </h1>
          </div>
          <div className="d-flex justify-content-center">
            <NavBar />
          </div>
        </header>
      </div>

      {/* Ta in data från ida_table */}

      {/* Card */}
      <Card className="container container-size card-style mt-5 mb-5">
        <Card.Body>
          <div className="row">
            <div className="col d-flex flex-column">
              {/* Första kolumnen */}
              <Card.Title className="title-about-me">About me</Card.Title>
              <Card.Text>
                My name is Ida Johansson, I'm 34 years old, and I live in
                Kungsängen, Stockholm. I'm originally from a small village in
                northern Västmanland called Skinnskatteberg, but I have been
                living in Stockholm since 2013.
              </Card.Text>
              <Card.Text>
                I enjoy being outdoors, exercising, and finding fun activities
                to do, such as going to concerts and socializing with friends.
              </Card.Text>
              <Card.Text>
                I would describe myself as a creative and solution-oriented
                person; I enjoy thinking outside the box. I am detail-oriented
                and good at planning.
              </Card.Text>
              <Card.Text>
                The majority of my career has been in project management within
                the festival and entertainment industry. Working for a smaller
                company, I had a wide range of responsibilities, with my main
                focus being project planning, concept development, area
                planning, and some personnel management. I also have a
                background in graphic design, where I’ve created layouts for a
                variety of branding projects.
              </Card.Text>
            </div>
            <div className="col-md-6">
              {/* Andra kolumnen */}
              <Card.Title className="title-previous-experience">
                Today
              </Card.Title>
              <Card.Text>
                In 2022, I made the decision to pursue a new career path. With a
                longstanding interest in both IT and design, I chose to
                specialize in backend development. In May 2024, I completed my
                studies at Nackademin and graduated as a Java developer.
              </Card.Text>
              <Card.Text>
                I previously completed an 8-month internship (LIA) at Spendrups
                Bryggeri, where I worked on a full-stack application as my final
                project. The backend was built using Node.js, and the frontend
                was developed with React Native.
              </Card.Text>
              <Card.Text>
                I’m eager to learn new things to expand my knowledge. Given the
                rapid pace of IT development, I believe it’s even more crucial
                not to limit oneself. I consider myself adaptable, and my
                journey in IT is still in its early stages; prior to my current
                education, I had no experience in the industry. My background as
                a project manager has accustomed me to working in teams, which I
                also enjoy very much, and I see myself as a team player.
              </Card.Text>
              <Card.Link
                className="icon-link icon-link-hover"
                href="/experience"
              >
                Learn more about my experiences here
                <i class="bi bi-arrow-right"></i>
              </Card.Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </main>
  );
};

export default index;
