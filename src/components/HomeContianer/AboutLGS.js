import React from "react";
import "../../styles/AboutLGS.css";

import aboutMain from "../../assets/home/About Section 1.jpg";
import aboutTeam from "../../assets/home/About Section 2.jpg";

function AboutLGS() {
  return (
    <section className="aboutlgs-section">

      <div className="about-left">

        <p className="aboutlgs-subtitle">About LSGTech</p>

        <h2 className="aboutlgs-title">
          Empowering Businesses through <br />
          Intelligent Technology <br />
          Solutions
        </h2>

        <p className="aboutlgs-desc">
          At LSGTech, We Believe Technology Should Simplify Complexity and Drive Growth, Not Slow It Down. 
        </p>

        <button className="about-btn">Read More</button>

        <img src={aboutMain} alt="About" className="about-main-img" />
      </div>

      <div className="about-right">

        <img src={aboutTeam} alt="Team" className="about-team-img" />

        <div className="about-stats-card">
          <div className="stat-item">
            <h3>42k</h3>
            <p>Completed Work</p>
          </div>
          <div className="divider"></div>
          <div className="stat-item">
            <h3>58+</h3>
            <p>Expert Team</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default AboutLGS;
