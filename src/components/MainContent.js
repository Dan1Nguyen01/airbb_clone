import React from "react";
// import heroImage from "../images/hero-img.jpg";
export default function MainContent() {
  return (
    <nav className="hero-nav">
      <div className="hero-main">
        <img src="../images/hero-img.jpg" className="hero-img" />
      </div>

      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </nav>
  );
}
