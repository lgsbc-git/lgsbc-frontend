import React from "react";
import "../../styles/OurValues.css";

import valuesImg from "../../assets/home/Mission & Vision.webp";

function OurValues() {
  return (
    <section className="values-section">

      {/* ================= TOP BLUE STATS BAR ================= */}
      <div className="values-stats-bar">
        <div className="value-stat">
          <h2>30+</h2>
          <p>
            Microsoft-Certified Functional and Technical Consultants are just a call away to Help You Out, irrespective of the challenges of your Business applications.
          </p>
        </div>

        <div className="divider"></div>

        <div className="value-stat">
          <h2>100%</h2>
          <p>
            Customer Satisfaction is the Sole reason we have been working for 100+ Clients round the clock.
          </p>
        </div>

        <div className="divider"></div>

        <div className="value-stat">
          <h2>15</h2>
          <p>
            Years of Experience has Taught Us to Resolve Challenging Business Issues, in No Time with 100% Success Rate. 
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="values-content">

        {/* LEFT IMAGE */}
        <div className="values-left">
          <img src={valuesImg} alt="Our Values" className="values-main-img" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="values-right">

          <h2 className="values-heading">
            Driving Innovation Through <br />
            AI And New Technology, <br />
            Delivering Tailored Solution.
          </h2>

          {/* ⭐ UPDATED GRID — ONLY CARDS NOW */}
          <div className="ourvalues-grid">

            {/* Mission */}
            <div className="ourvalues-grid-card">
              <h3>Our Mission</h3>
              <p>
                Our focus is on empowering organizations to become more agile,
                data-driven, and future-ready.
              </p>
            </div>

            {/* Vision */}
            <div className="ourvalues-grid-card">
              <h3>Our Vision</h3>
              <p>
                Our goal is to continually push the boundaries of digital
                transformation by creating smarter, faster, and more connected
                business ecosystems.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OurValues;
