import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "ERP Vendor Evaluation", slug: "erp-vendor-evaluation" },
  { name: "ERP Product Evaluation", slug: "erp-product-evaluation" },
  {
    name: "Microsoft Dynamics 365 Readiness Assessment",
    slug: "dynamics365-readiness-assessment",
  },
  {
    name: "Microsoft Dynamics 365 Consulting Services",
    slug: "dynamics365-consulting",
  },
  {
    name: "Microsoft Dynamics 365 Development & Integration Services",
    slug: "dynamics365-development",
  },
  {
    name: "Microsoft Dynamics 365 Implementation Services",
    slug: "dynamics365-implementation",
  },
  {
    name: "Microsoft Dynamics 365 Program & Project Management",
    slug: "d365-project-management",
  },
  {
    name: "Microsoft Power Platform Development & Training",
    slug: "power-platform",
  },
  { name: "Data Migration Services", slug: "data-migration" },
  { name: "Finance & Accounting Services", slug: "finance-accounting" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Microsoft Dynamics 365 Support Services", slug: "d365-support" },
];

const ServiceSidebar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ========= MOBILE DROPDOWN ========= */}
      <div className="service-sidebar-mobile">
        <button
          className="service-sidebar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          Our Services
          <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
        </button>

        {isOpen && (
          <div className="service-sidebar-dropdown">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`dropdown-item ${active === s.slug ? "active" : ""}`}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {s.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ========= DESKTOP SIDEBAR ========= */}
      <div className="service-sidebar-desktop">
        <div className="service-sidebar">
          <h3>Our Services</h3>

          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              style={{ textDecoration: "none" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <p className={active === s.slug ? "active-service" : ""}>
                {s.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceSidebar;
