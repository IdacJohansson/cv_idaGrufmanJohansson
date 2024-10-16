import React from "react";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "animate.css";

import NavBar from "@/components/NavBar";
import ImageIda from "@/components/ImageIda";

const index = () => {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <header className="d-flex flex-row justify-content-end w-100 g-2">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-linkedin"></i>
      </header>

      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-start">
          <ImageIda />
        </div>
        <div className="d-flex flex-column">
          <div className="text-center">
            <h1 className="heading animate__animated animate__fadeIn text-center">
              IDA GRUFMAN JOHANSSON
            </h1>
          </div>
          <div className="d-flex justify-content-center">
            <NavBar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
