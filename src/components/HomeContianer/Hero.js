import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(/hero-section-background.webp)` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Empowering Businesses With Intelligent <br />
          Business Applications & Cloud Solutions
        </h1>

        <p className="hero-tagline">
          Transform The Way You Work with expert-led Power Platform and Dynamics
          365 Consulting & Implementation services, Seamless Data Migration,
          Scalable Azure Cloud and AI Solutions — All Tailored to Your Growth.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <h2>100%</h2>
            <p>Successful deployments</p>
          </div>

          <div className="stat">
            <h2>5</h2>
            <p>Star in Customer satisfaction </p>
          </div>

          <div className="stat">
            <h2>15</h2>
            <p>Years in Business and thriving </p>
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
