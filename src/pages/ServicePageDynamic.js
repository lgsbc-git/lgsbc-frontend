import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ServiceDetail.css";
import { serviceData } from "../data/serviceData";
import ServiceSidebar from "../components/ServiceSidebar";

const ServicePageDynamic = () => {
  const { slug } = useParams();
  const data = serviceData[slug];

  if (!data) {
    return <div className="not-found">Service Not Found</div>;
  }

  return (
    <div className="service-detail-container">
      <h1 className="service-detail-title">{data.title}</h1>

      <div className="service-detail-content-wrapper">
        <ServiceSidebar active={data.sidebarActive} />

        <div className="service-detail-main">

          {data.blocks.map((block, idx) => {
            switch (block.type) {
              case "hero":
                return (
                  <div
                    key={idx}
                    className="block-hero-banner"
                    style={{
                      backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(37, 38, 41, 0.7)
        ), url(${data.heroImage})`
                    }}
                  >
                    <h2>{block.heading}</h2>
                    <p>{block.subheading}</p>
                    {block.button && (
                      <a href={block.link} className="cta-button">
                        {block.button}
                      </a>
                    )}
                  </div>
                );


              case "section-title":
                return (
                  <h2 key={idx} className="block-section-title">
                    {block.title}
                  </h2>
                );

              case "paragraph":
                return (
                  <p key={idx} className="block-paragraph">
                    {block.text}
                  </p>
                );

              case "bullets":
                return (
                  <ul key={idx} className="block-bullets">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              case "steps":
                return (
                  <ol key={idx} className="block-steps">
                    {block.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                );

              case "highlight":
                return (
                  <div
                    key={idx}
                    className="block-highlight"
                    style={{
                      background: block.bg,
                      color: block.textColor
                    }}
                  >
                    {block.text}
                  </div>
                );

              case "cta":
                return (
                  <div key={idx} className="block-cta">
                    <h3>{block.text}</h3>
                    <a href={block.link} className="cta-button">
                      {block.button}
                    </a>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicePageDynamic;
