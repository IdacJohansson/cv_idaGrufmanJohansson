import React from "react";
import variables from "../styles/variables.module.scss";
import NavBar from "@/components/NavBar";

const experience = ({ languages }) => {
  return (
    <main>
      <h1 style={{ color: variables.testColor }}>MY EXPERIENCE</h1>
      <NavBar />

      <ul style={{ color: variables.testColor }}>
        {languages.map((language) => (
          <li key={language.id}>{language.language}</li>
        ))}
      </ul>
    </main>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/languages");
  const data = await res.json();

  return {
    props: {
      languages: data.languages,
    },
  };
}

export default experience;
