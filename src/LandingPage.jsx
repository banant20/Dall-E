import React from "react";
import "./LandingPage.css"
import Carousel from "./images/Carousel.jpeg";


export const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-page">
      <img src={Carousel} alt="Carousel Logo" className="logo" />
      <h1>Welcome to our image generator!</h1>
      <p>Click the button below to start selecting images.</p>
      <div className="button-container">
          <button className="btn-space space" onClick={onStart}> Start </button>
      </div>
    </div>
  );
};
