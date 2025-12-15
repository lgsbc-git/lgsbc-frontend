import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/AboutLGS.css";

import aboutMain from "../../assets/home/About Section 1.jpg";
import aboutTeam from "../../assets/home/About Section 2.jpg";

function AboutLGS() {
  const navigate = useNavigate();
  return (
    <section className="aboutlgs-section">
      <div className="about-left">
        <p className="aboutlgs-subtitle">About LGS</p>

        <h2 className="aboutlgs-title">
          Empowering Businesses through <br />
          Intelligent Technology <br />
          Solutions
        </h2>

        <p className="aboutlgs-desc">
          At LGS, We Believe Technology Should Simplify Complexity and Drive
          Growth, Not Slow It Down.
        </p>
        <button className="about-btn" onClick={() => navigate("/about")}>
          Read More
        </button>

        <img src={aboutMain} alt="About" className="about-main-img" />
      </div>

      <div className="about-right">
        <img src={aboutTeam} alt="Team" className="about-team-img" />

        <div className="about-stats-card">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Solution deployments completed</p>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <h3>30+</h3>
            <p>Microsoft stack & AI technology experts</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutLGS;
