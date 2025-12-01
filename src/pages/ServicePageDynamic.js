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
                      to right,
                      rgba(0, 0, 0, 0.89),
                      rgba(29, 29, 29, 0.64),
                      rgba(105, 103, 103, 0.14)
                    ), url(${data.heroImage})`,
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
              case "tiles":
                return (
                  <div key={idx} className="tiles-grid">
                    {block.items.map((item, i) => (
                      <div className="tile-card" key={i}>
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="tile-icon"
                          />
                        )}
                        <h3>{item.title}</h3>
                        <p style={item.style}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                );
              case "tiles-bullets":
                return (
                  <div key={idx}>
                    {block.title && (
                      <h2 className="block-section-title">{block.title}</h2>
                    )}

                    <div className="tiles-grid-bullet">
                      {block.tiles.map((tile, tIdx) => (
                        <div key={tIdx} className="tile-card-bullet">
                          <h3 className="tile-title">{tile.heading}</h3>
                          <ul className="tile-bullets">
                            {tile.bullets.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              case "tiles-advanced":
                return (
                  <div key={idx}>
                    {block.title && (
                      <h2 className="block-section-title">{block.title}</h2>
                    )}

                    <div className="tiles-grid-bullet">
                      {block.tiles.map((tile, tIdx) => (
                        <div key={tIdx} className="tile-card-bullet">
                          <h3 className="tile-title">{tile.heading}</h3>

                          {/* description paragraph */}
                          {tile.description && (
                            <p className="tile-description">
                              {tile.description}
                            </p>
                          )}

                          {/* bullet list */}
                          <ul className="tile-bullets">
                            {tile.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>

                          {/* footer paragraph */}
                          {tile.footer && (
                            <p className="tile-footer">{tile.footer}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
                case "comparison-table":
  return (
    <div key={idx} className="comparison-table-container">
      {block.title && <h2 className="block-section-title">{block.title}</h2>}

      <table className="comparison-table">
        <thead>
          <tr>
            {block.columns.map((col, cIdx) => (
              <th key={cIdx}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {block.rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
                      color: block.textColor,
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
