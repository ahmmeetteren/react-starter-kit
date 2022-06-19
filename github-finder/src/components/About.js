import React from "react";
import github from "../github.svg";
import "../App.css";

function About() {
  return (
    <div className="container d-flex justify-content-center align-items-center aboutContainer">
      <img src={github} alt="github" className="github text-primary" />
      <p className="mt-4 fw-bold">Coded and published by Ahmet Eren Yilmaz</p>
      <div className="d-flex justify-content-around">
        <a href="https://github.com/ahmmeetteren">
          <i className="fa-brands fa-github fs-1 mx-2"></i>
        </a>
        <a href="https://www.linkedin.com/in/ahmmeetteren/">
          <i className="fa-brands fa-linkedin-in fs-1 mx-2"></i>
        </a>
        <a href="https://www.instagram.com/ahmmeetteren/">
          <i className="fa-brands fa-instagram fs-1 mx-2"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
