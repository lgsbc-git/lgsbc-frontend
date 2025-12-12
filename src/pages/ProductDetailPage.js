import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import "../styles/ProductDetail.css";
import { productsData } from "../data/ProductsData";
import ProductSidebar from "../components/ProductSidebar";
import * as FaIcons from "react-icons/fa";

// Icon mapping
const iconMap = {
  FiArrowRight: FiIcons.FiArrowRight,
  BiCheckCircle: BiIcons.BiCheckCircle,
  MdOutlineRestartAlt: MdIcons.MdOutlineRestartAlt,
  MdOutlineDashboard: MdIcons.MdOutlineDashboard,
  FiDatabase: FiIcons.FiDatabase,
  FiLink: FiIcons.FiLink,
  FiCompass: FiIcons.FiCompass,
  FiUsers: FiIcons.FiUsers,
  FiRocket: FaIcons.FaRocket,

  // NEW ICONS
  FiShield: FiIcons.FiShield,
  FiCloud: FiIcons.FiCloud,
  FiBarChart2: FiIcons.FiBarChart2,
  FiDollarSign: FiIcons.FiDollarSign,
  FiTrendingUp: FiIcons.FiTrendingUp,

  FiClipboard: FiIcons.FiClipboard,
  FiSettings: FiIcons.FiSettings,
  FiRefreshCcw: FiIcons.FiRefreshCcw,
  FiPlayCircle: FiIcons.FiPlayCircle,
  FiTrendingUp: FiIcons.FiTrendingUp,
  FiSearch: FiIcons.FiSearch,
  FiLayers: FiIcons.FiLayers,
  FiPhone: FiIcons.FiPhone,
  FiTablet: FiIcons.FiTablet, 


};

const ProductDetailPage = () => {
  useEffect(() => {
    const container = document.querySelector(".timeline-container");
    if (!container) return; // <-- FIX: prevents null access

    const lastDot = container.querySelector(
      ".timeline-row:last-child .timeline-dot"
    );
    if (!lastDot) return; // <-- FIX: prevents null access

    const containerTop = container.getBoundingClientRect().top + window.scrollY;
    const dotTop = lastDot.getBoundingClientRect().top + window.scrollY;

    const height = dotTop - containerTop;
    container.style.setProperty("--line-height", `${height}px`);
  }, []);

  const { slug } = useParams();
  const data = productsData[slug];

  if (!data) {
    return <div className="not-found">Product Not Found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <ProductSidebar active={slug} />

        <div className="product-detail-main">
          {data.blocks.map((block, idx) => {
            switch (block.type) {
              case "hero":
                return (
                  <section
                    key={idx}
                    className="block-hero-banner"
                    style={{
                      backgroundImage: `linear-gradient(
                        to right,
                        rgba(0,0,0,0.85),
                        rgba(0,0,0,0.55)
                      ), url(${data.heroImage})`,
                    }}
                  >
                    <h2>{block.heading}</h2>
                    <p>{block.subheading}</p>

                    {block.button && block.link && (
                      <a href={block.link} className="cta-button">
                        {block.button}
                      </a>
                    )}
                  </section>
                );

              case "section-title":
                return (
                  <h2 key={idx} className="block-section-title">
                    {block.title}
                  </h2>
                );
              case "subheading":
                return (
                  <h3 key={idx} className="block-subheading">
                    {block.text}
                  </h3>
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
              case "tiles-bullet":
                return (
                  <div key={idx} className="tiles-bullet-container">
                    <div className="tiles-bullet-grid">
                      {block.tiles.map((tile, i) => (
                        <div key={i} className="tiles-bullet-card">
                          <h3 className="tiles-bullet-title">{tile.title}</h3>

                          <ul className="tiles-bullet-list">
                            {tile.bullets.map((point, j) => (
                              <li key={j}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
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

              case "tiles":
                return (
                  <div key={idx} className="block-tiles">
                    <div className="tiles-grid">
                      {block.tiles.map((tile, i) => {
                        const IconComponent = iconMap[tile.icon];
                        return (
                          <div key={i} className="tile-card">
                            <div className="tile-icon">
                              {IconComponent ? <IconComponent /> : tile.icon}
                            </div>
                            <h3 className="tile-title">{tile.title}</h3>
                            <p className="tile-description">
                              {tile.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );

              case "journey":
                return (
                  <div key={idx} className="block-journey">
                    <div className="journey-timeline">
                      {block.phases.map((phase, i) => (
                        <div key={i} className="journey-phase">
                          <div className="phase-marker">
                            <div className="phase-number">{i + 1}</div>
                          </div>
                          <div className="phase-content">
                            <h4 className="phase-title">{phase.title}</h4>
                            <p className="phase-description">
                              {phase.description}
                            </p>
                          </div>
                          {i < block.phases.length - 1 && (
                            <div className="phase-connector"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              case "stages":
                return (
                  <div key={idx} className="block-stages">
                    <div className="stages-container">
                      {block.stages.map((stage, i) => {
                        const IconComponent = iconMap[stage.icon];
                        return (
                          <div key={i} className="stage-card">
                            <div className="stage-left">
                              <div className="stage-number">{stage.number}</div>
                              <div className="stage-connector"></div>
                            </div>

                            <div className="stage-content">
                              <div className="stage-icon">
                                {IconComponent && <IconComponent />}
                              </div>
                              <h3 className="stage-title">{stage.title}</h3>
                              <p className="stage-description">
                                {stage.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              case "timelineAlternate":
                return (
                  <div key={idx} className="timeline-container">
                    <div className="timeline-vline" />

                    {block.stages.map((stage, i) => {
                      const IconComponent = iconMap[stage.icon];
                      const isLeft = i % 2 === 0; // left, right, left, right
                      return (
                        <div
                          key={i}
                          className={`timeline-row ${
                            isLeft ? "left" : "right"
                          }`}
                        >
                          <div className="timeline-row-inner">
                            <div
                              className={`timeline-card-wrapper ${
                                isLeft ? "to-left" : "to-right"
                              }`}
                            >
                              <div className="timeline-card">
                                <div className="timeline-badge">
                                  {stage.number}
                                </div>

                                {IconComponent && (
                                  <IconComponent className="timeline-icon" />
                                )}

                                <h3 className="timeline-title">
                                  {stage.title}
                                </h3>
                                <p className="timeline-description">
                                  {stage.description}
                                </p>
                              </div>
                            </div>

                            <div className="timeline-connector-wrapper">
                              <div className="timeline-dot" />
                              {/* vertical connector spans between dots — purely decorative; CSS handles length */}
                              <div className="timeline-vertical" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );

              case "features":
                return (
                  <div key={idx} className="block-features">
                    <div className="features-grid">
                      {block.columns.map((feature, i) => {
                        const IconComponent = iconMap[feature.icon];
                        return (
                          <div key={i} className="feature-card">
                            <div className="feature-icon">
                              {IconComponent ? <IconComponent /> : feature.icon}
                            </div>
                            <h4 className="feature-title">{feature.title}</h4>
                            <p className="feature-subtitle">
                              {feature.subtitle}
                            </p>
                            <p className="feature-description">
                              {feature.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );

              case "cta":
                return (
                  <div key={idx} className="block-cta">
                    <h3>{block.text}</h3>

                    {block.description && (
                      <p className="cta-description">{block.description}</p>
                    )}

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

export default ProductDetailPage;
