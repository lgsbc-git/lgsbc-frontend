import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Hero.css";
import heroBg from "../../assets/home/hero-section-background.webp";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1 className="hero-title">
          Empowering Businesses With Intelligent <br />
          Business Applications & Cloud Solutions
        </h1>

        <p className="hero-tagline">
          Transform The Way You Work with Expert-Led Dynamics 365 Consulting,
          Seamless Data Migration, And Scalable Azure Cloud Solutions — All
          Tailored to Your Growth.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <h2>99%</h2>
            <p>Strategic Insights</p>
          </div>

          <div className="stat">
            <h2>4.8</h2>
            <p>Customer Rating</p>
          </div>

          <div className="stat">
            <h2>2.5M</h2>
            <p>People Reached</p>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Let’s Connect
          </button>

          <button className="btn-outline" onClick={() => navigate("/services")}>
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
