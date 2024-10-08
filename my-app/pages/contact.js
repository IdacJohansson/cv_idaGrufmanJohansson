import React from "react";
import variables from "../styles/variables.module.scss";
import NavBar from '@/components/NavBar'

const contact = () => {
  return (
      <main>
        <h1 style={{ color: variables.testColor }}>CONTACT ME</h1>
        <NavBar />
      </main>
  );
};

export default contact;
