import React from "react";
import "../styles/ProductsPage.css";
import { useNavigate } from "react-router-dom";

// IMPORT ALL PRODUCT ICONS HERE
import migrationDynamicsIcon from "../assets/logos/Dynamics365_scalable.svg";
import upgradeIcon from "../assets/logos/Dynamics365_scalable.svg";
import archiveIcon from "../assets/logos/Dynamics365_scalable.svg";
import timesheetIcon from "../assets/logos/powerapp.png";
import fixedAssetsIcon from "../assets/logos/powerapp.png";
import azureDevOpsIcon from "../assets/logos/icons8-azure-48.png";

const productsData = [
  {
    category: "Data Migration",
    items: [
      {
        name: "Microsoft Dynamics 365 Data Migration Solution",
        logo: migrationDynamicsIcon,
        desc: "End-to-end migration to Dynamics 365 with validation, rollback and automation.",
        route: "d365-data-migration",
      },
      {
        name: "AX2012 to Dynamics 365 Upgrade Solution",
        logo: upgradeIcon,
        desc: "Smooth upgrade path from AX2012 to Dynamics 365 with quality and minimal downtime.",
        route: "AX2012-upgrade",
      },
      {
        name: "Legacy Application to Fabric Data Archive Solution",
        logo: archiveIcon,
        desc: "Archive legacy datasets into Microsoft Fabric with compression & searchable retention.",
        route: "Legacy-application",
      },
      {
        name: "NAXT 2012 to NAXT365 Upgrade Solution",
        logo: migrationDynamicsIcon,
        desc: "Built on Dynamics 365; unified DMS solution for rental, sales, service, and finance.",
        route: "NAXT2012-to-NAXT365",
      },
    ],
  },

  {
    category: "PowerApp",
    items: [
      {
        name: "Timesheet Management Solution",
        logo: timesheetIcon,
        desc: "Track time, auto-approve workflows, integrate with billing effortlessly.",
        route: "timesheeet-management",
      },
      {
        name: "Fixed Assets Stocktake Solution",
        logo: fixedAssetsIcon,
        desc: "Audit & reconcile fixed assets using mobile-based inventory checks.",
        route: "fixed-assets-stocktake",
      },
    ],
  },

  {
    category: "Project Management",
    items: [
      {
        name: "Azure DevOps Toolkit for D365 Project Management",
        logo: azureDevOpsIcon,
        desc: "Integrated pipelines, governance & release orchestration built for Dynamics 365.",
        route: "Azure-devops-project-management",
      },
    ],
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="products-page-container">

      {/* HERO SECTION */}
      <div className="products-page-hero">
        <p className="products-page-subtitle">Our Products</p>

        <h1 className="products-page-title">
          Enterprise-Ready Technology Products Built for Performance & Scale
        </h1>

        <p className="products-page-description">
          Explore our suite of intelligent, secure and scalable products designed
          to accelerate digital transformation across industries.
        </p>
      </div>

      {/* CATEGORIES & GRID */}
      {productsData.map((section, idx) => (
        <div key={idx} className="products-category-block">
          
          {/* CATEGORY HEADING */}
          <h2 className="products-category-title">{section.category}</h2>

          <div className="products-page-grid">
            {section.items.map((item, i) => (
              <div key={i} className="products-page-card">

                <img 
                  src={item.logo}
                  alt={`${item.name} icon`}
                  className="products-page-icon"
                  loading="lazy"
                />

                <h3 className="products-page-card-title">{item.name}</h3>
                <p className="products-page-card-desc">{item.desc}</p>

                <button
                  className="products-page-btn"
                  onClick={() => {
                    navigate(item.route);
                    window.scrollTo(0, 0);
                  }}
                >
                  Learn More
                </button>

              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
};

export default ProductsPage;
