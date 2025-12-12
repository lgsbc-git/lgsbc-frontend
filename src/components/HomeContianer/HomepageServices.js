import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/HomepageServices.css";

// 👉 IMPORT SEPARATE IMAGES FOR EACH SERVICE
import consultingImg from "../../assets/home/6183625.jpg";
import powerPlatformImg from "../../assets/home/22246.jpg";
import dataMigrationImg from "../../assets/home/Wavy_Tech-28_Single-07.jpg";

// ------------------------------------
// UPDATED SERVICE LIST (ONLY 3 SERVICES)
// EACH WITH SEPARATE IMAGE + LINK
// ------------------------------------
const servicesData = [
  {
    title: "Microsoft Dynamics 365 Consulting Services",
    desc:
      "Our Dynamics 365 experts provide consulting across Finance, SCM, Sales, and more. We ensure scalability, security and tailored solutions to maximize ROI from ERP investments.",
    img: consultingImg,
    link: "/services/dynamics365-consulting",
  },
  {
    title: "Microsoft Power Platform Development & Training",
    desc:
      "We design and implement PowerApps, Automations, and PowerBI dashboards that help businesses streamline processes and make data-driven decisions. Training ensures your teams can maximize platform potential.",
    img: powerPlatformImg,
    link: "/services/power-platform",
  },
  {
    title: "Data Migration Services",
    desc:
      "Our data migration services automate ETL processes, ensuring smooth transfer of data to Dynamics 365. With strategies for accuracy, consistency, and scalability, we reduce downtime and risks in migration projects.",
    img: dataMigrationImg,
    link: "/services/data-migration",
  },
];

function HomepageServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-section">

      {/* STACKED CARDS */}
      <div className="services-cards-wrapper">
        {servicesData.map((service, index) => {
          let position = "inactive";

          if (index === activeIndex) position = "active";
          else if (index === (activeIndex + 1) % servicesData.length)
            position = "right";
          else if (
            index ===
            (activeIndex - 1 + servicesData.length) % servicesData.length
          )
            position = "left";

          return (
            <div key={index} className={`service-card ${position}`}>
              
              {/* Dynamic Image */}
              <img src={service.img} alt={service.title} className="service-img" />

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                {/* Dynamic Button Link */}
                <button
                  className="service-btn"
                  onClick={() => navigate(service.link)}
                >
                  View More
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT TEXT AREA */}
      <div className="services-text">
        <p className="services-subtitle">Our Services</p>

        <h2 className="services-title">
          Transforming Businesses with <br />
          End-To-End <br />
          <span>Technology Solutions</span>
        </h2>

        <p className="services-desc">
          We deliver intelligent, future-ready solutions designed to help businesses thrive in today's digital and AI era.
        </p>

        <button className="services-btn" onClick={() => navigate("/services")}>
          View More
        </button>
      </div>
    </section>
  );
}

export default HomepageServices;
