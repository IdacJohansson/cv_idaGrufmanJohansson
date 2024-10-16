import React from "react";
import variables from "../styles/variables.module.scss";
import "animate.css";

import NavBar from "@/components/NavBar";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/languages");
  const data = await res.json();

  return {
    props: {
      languages: data.languages,
    },
  };
}

const experience = ({ languages }) => {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="heading animate__animated animate__fadeIn">
        MY EXPERIENCE
      </h1>
      <NavBar />

      <ul className="list">
        {languages.map((language) => (
          <li className="list____languages" key={language.id}>
            {language.language}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default experience;
