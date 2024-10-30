import React from "react";

import "animate.css";
import NavBar from "@/components/NavBar";

export default function Header({ title, titleLarge }) {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-start"></div>
      <header className="text-container d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-end w-100 ">
          <a href="https://www.facebook.com/profile.php?id=735198102" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://se.linkedin.com/in/ida-grufman-johansson-45ab60b6" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin p-2"></i>
          </a>
        </div>
        <div className="mb-4 text-center">
          <h1 className="heading animate__animated animate__fadeIn word-wrap">
            <span className="heading-lg text-right">{titleLarge}</span>{" "}
            <div className="heading">{title}</div>
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <NavBar />
        </div>
      </header>
    </div>
  );
}
