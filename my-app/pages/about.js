import React from "react";
import variables from "../styles/variables.module.scss";
import NavBar from '@/components/NavBar'

const about = () => {
  return (
      <main>
        <h1 style={{ color: variables.testColor }}>About</h1>
        <NavBar />
      </main>
  );
};

export default about;