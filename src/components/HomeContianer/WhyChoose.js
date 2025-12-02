import React from "react";
import "../../styles/WhyChoose.css";

import centerImg from "../../assets/home/Why Choose Us.jpeg";
import icon1 from "../../assets/home/1.svg";
import icon2 from "../../assets/home/2.svg";
import icon3 from "../../assets/home/3.svg";
import icon4 from "../../assets/home/4.svg";

function WhyChoose() {
  return (
    <section className="why-section">

      {/* ===== TOP TEXT ===== */}
      <p className="why-subtitle">Why Choose LGSTech?</p>

      <h2 className="why-title">
        Your Trusted Partner In Digital <br />Transformation
      </h2>

      <p className="why-description">
        In a world where technology evolves faster than ever, choosing the right partner makes all the difference. At LSGTech, we go beyond delivering solutions — we deliver success. Our approach blends innovation, expertise, and integrity to help your business stay ahead in a competitive landscape.
      </p>

      {/* ===== MAIN CONTENT WRAPPER ===== */}
      <div className="why-wrapper">

        {/* LEFT FEATURES */}
        <div className="why-left">
          <div className="why-card">
            <div className="why-icon">
              <img src={icon1} alt="Expertise" />
            </div>
            <div className="why-info">
              <h3>Proven Expertise</h3>
              <p>
                Leveraging deep expertise in Dynamics 365, Azure cloud, application development, data migration, and enterprise integrations, we deliver strategic insight and technical excellence—helping you build, optimize, and scale your business with confidence. 
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={icon2} alt="Tailored Solutions" />
            </div>
            <div className="why-info">
              <h3>Tailored Solutions</h3>
              <p>
                We recognize that every business operates differently. Our solutions are purpose-built around your goals, workflows, and growth ambitions—not constrained by one-size-fits-all templates. 
              </p>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="why-center">
          <img src={centerImg} alt="Team Meeting" className="why-center-img" />
        </div>

        {/* RIGHT FEATURES */}
        <div className="why-right">
          <div className="why-card">
            <div className="why-icon">
              <img src={icon3} alt="Support" />
            </div>
            <div className="why-info">
              <h3>End-To-End Support</h3>
              <p>
                From strategic advisory and implementation to training and continuous optimization, we provide end-to-end support that elevates every stage of your digital transformation journey. 
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={icon4} alt="Innovation" />
            </div>
            <div className="why-info">
              <h3>Innovation At The Core</h3>
              <p>
                We lead with innovation—continuously enhancing our strategies and adopting advanced technologies to ensure your business stays modern, agile, and future-ready. 
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM TAGLINE */}
      <p className="why-bottom-tagline">
        Choose Innovation. Choose Reliability. Choose LGSTech.
      </p>

    </section>
  );
}

export default WhyChoose;
