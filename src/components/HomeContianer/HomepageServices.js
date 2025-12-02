import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/HomepageServices.css";

import serviceImg from "../../assets/home/ERP Vendor Evaluation.jpg";

// ------------------------------------
// FULL SERVICE LIST (from your message)
// ------------------------------------
const servicesData = [
  {
    title: "ERP Vendor Evaluation",
    desc:
      "We help businesses select the right ERP vendor by assessing stability, implementation expertise, customer support, cost transparency and alignment with long-term goals. This ensures a reliable partnership with minimal risks.",
  },
  {
    title: "ERP Product Evaluation",
    desc:
      "Our ERP Product Evaluation service systematically analyzes ERP solutions to identify the best fit for your business. We assess features, scalability, usability, cost and vendor reliability for informed decision-making.",
  },
  {
    title: "Dynamics 365 Readiness Assessment",
    desc:
      "We evaluate your organization’s readiness for Dynamics 365 adoption by assessing technology landscape, people, change management and support services. Result is a tailored readiness dashboard and consulting report.",
  },
  {
    title: "Dynamics 365 Consulting Services",
    desc:
      "Our Dynamics 365 experts provide consulting across Finance, SCM, Sales, and more. We ensure scalability, security and tailored solutions to maximize ROI from ERP investments.",
  },
  {
    title: "Dynamics 365 Development Services",
    desc:
      "We provide custom development & extensions for D365, using Azure DevOps automation to ensure reliable delivery and maintainability.",
  },
  {
    title: "Dynamics 365 Implementation Services",
    desc:
      "From project initiation to deployment, we handle end-to-end D365 implementations including configuration, ISV integration, testing & training.",
  },
  {
    title: "Dynamics 365 Program & Project Management",
    desc:
      "We provide program & project management using Agile DevOps frameworks ensuring on-time delivery aligned with business goals.",
  },
  {
    title: "Microsoft Power Platform Development",
    desc:
      "We design PowerApps, Automations & PowerBI dashboards that streamline processes and enable data-driven decisions.",
  },
  {
    title: "Data Migration Services",
    desc:
      "We automate ETL processes ensuring accurate migration to Dynamics 365 with minimal downtime and maximum reliability.",
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
            <div
              key={index}
              className={`service-card ${position}`}
            >
              <img src={serviceImg} alt={service.title} className="service-img" />

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <button
                  className="service-btn"
                  onClick={() => navigate("/services")}
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
          We deliver intelligent, future-ready solutions designed to help businesses
          thrive in today's digital era.
        </p>

        <button
          className="services-btn"
          onClick={() => navigate("/services")}
        >
          View More
        </button>
      </div>
    </section>
  );
}

export default HomepageServices;
