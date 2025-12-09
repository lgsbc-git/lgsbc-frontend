import React from "react";
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
};

const ProductDetailPage = () => {
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
