// src/pages/ServicePageDynamic.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ServiceDetail.css";
import { serviceData } from "../data/serviceData";
import ServiceSidebar from "../components/ServiceSidebar";

const ServicePageDynamic = () => {
  const { slug } = useParams();
  const data = serviceData[slug];

  if (!data) {
    return (
      <div style={{ padding: 120, textAlign: "center" }}>
        <h2>Service not found</h2>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      <h1 className="service-detail-title">{data.title}</h1>

      <div className="service-detail-content-wrapper">
        <ServiceSidebar active={data.sidebarActive} />

        <div className="service-detail-main">
          <img src={data.heroImage} alt={data.title} className="service-hero-img" />

          <h2 className="service-heading">{data.heading}</h2>

          {data.sections.map((sec, idx) => (
            <div key={idx} className="service-section">
              <h3>{sec.subheading}</h3>
              {Array.isArray(sec.text) ? (
                <ul>
                  {sec.text.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{sec.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePageDynamic;
