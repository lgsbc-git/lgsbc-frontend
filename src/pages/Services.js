// replace with correct icons
import React from "react";
import "../styles/Services.css";
import { useNavigate } from "react-router-dom";

// FUTURE SCOPE: Replace these when real icons are available
import icon1 from "../assets/services/highlightpage/ERP Vendor Evaluation.png";
import icon2 from "../assets/services/highlightpage/ERP Product Evaluation.png";
import icon3 from "../assets/services/highlightpage/Readiness Assessment.png";
import icon4 from "../assets/services/highlightpage/Consulting Services.png";
import icon5 from "../assets/services/highlightpage/Development Services.png";
import icon6 from "../assets/services/highlightpage/Implementation Services.png";
import icon7 from "../assets/services/highlightpage/Program & Project Management.png";
import icon8 from "../assets/services/highlightpage/Platform Development & Training.png";
import icon9 from "../assets/services/highlightpage/Data Migration.png";
import icon10 from "../assets/services/highlightpage/Finance & Accounting Services.png";
import icon11 from "../assets/services/highlightpage/Digital Marketing.png";
// import icon12 from "../assets/services/highlightpage/D365 Support Services.png"; // ← NEW ICON

const servicesList = [
  {
    title: "ERP Vendor Evaluation",
    desc: "We help businesses select the right ERP vendor by assessing stability, implementation expertise, customer support, cost transparency and alignment with long-term goals. This ensures a reliable partnership with minimal risks.",
    link: "/services/erp-vendor-evaluation",
    icon: icon1,
  },
  {
    title: "ERP Product Evaluation",
    desc: "Our ERP Product Evaluation service systematically analyzes ERP solutions to identify the best fit for your business. We assess features, scalability, usability, cost and vendor reliability for informed decision-making.",
    link: "/services/erp-product-evaluation",
    icon: icon2,
  },
  {
    title: "Microsoft Dynamics 365 Readiness Assessment",
    desc: "We evaluate your organization’s readiness for Dynamics 365 adoption by assessing technology landscape, people, change management and support services. The result is a tailored readiness dashboard and consulting report.",
    link: "/services/dynamics365-readiness-assessment",
    icon: icon3,
  },
  {
    title: "Microsoft Dynamics 365 Consulting Services",
    desc: "Our Dynamics 365 experts provide consulting across Finance, SCM, Sales, Customer Service, Commerce and more. We ensure scalability, security and tailored solutions to maximize ROI from your ERP investments.",
    link: "/services/dynamics365-consulting",
    icon: icon4,
  },
  {
    title: "Microsoft Dynamics 365 Development Services",
    desc: "We provide custom development and extensions for Dynamics 365, ensuring solutions are tailored to unique business needs. Using Azure DevOps best practices, we streamline build automation and ensure reliable delivery.",
    link: "/services/dynamics365-development",
    icon: icon5,
  },
  {
    title: "Microsoft Dynamics 365 Implementation Services",
    desc: "From project initiation to deployment, we handle end-to-end D365 implementations. Our services cover configuration, integration, ISV management, testing, training and change management to ensure smooth rollouts.",
    link: "/services/dynamics365-implementation",
    icon: icon6,
  },
  {
    title: "Microsoft Dynamics 365 Program & Project Management",
    desc: "We offer dedicated program and project management services for Dynamics 365 initiatives. Using Agile DevOps templates, we ensure projects are executed on time, within budget and aligned with strategic goals.",
    link: "/services/d365-project-management",
    icon: icon7,
  },
  {
    title: "Microsoft Power Platform Development & Training",
    desc: "We design and implement PowerApps, Automations, and PowerBI dashboards that help businesses streamline processes and make data-driven decisions. Training ensures your teams can maximize platform potential.",
    link: "/services/power-platform",
    icon: icon8,
  },
  {
    title: "Data Migration Services",
    desc: "Our data migration services automate ETL processes, ensuring smooth transfer of data to Dynamics 365. With strategies for accuracy, consistency, and scalability, we reduce downtime and risks in migration projects.",
    link: "/services/data-migration",
    icon: icon9,
  },
  {
    title: "Finance & Accounting Services",
    desc: "We provide back-office outsourcing solutions for finance and accounting using Dynamics 365, Xero and Zoho Books. Our services ensure accurate, compliant and efficient financial management for businesses.",
    link: "/services/finance-accounting",
    icon: icon10,
  },
  {
    title: "Digital Marketing",
    desc: "Our digital marketing services cover SEO-compliant websites, SEO optimization and social media strategy. We help businesses boost online presence, engage customers and achieve measurable marketing outcomes.",
    link: "/services/digital-marketing",
    icon: icon11,
  },

  // ------------------------------------------------------------
  // ⭐ NEW SERVICE ADDED — Microsoft Dynamics 365 Support Services
  // ------------------------------------------------------------
  {
    title: "Microsoft Dynamics 365 Support Services",
    desc: "Proactive, expert-led Dynamics 365 support that keeps your operations stable, secure, and future-ready. We provide monitoring, troubleshooting, performance optimization, upgrades, help desk support, and flexible support models to ensure uninterrupted business operations.", // extracted from doc
    link: "/services/d365-support",
    icon: icon2,
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page-container">
      
      {/* HERO SECTION */}
      <div className="services-page-hero">
        <p className="services-page-subtitle">Our Services</p>

        <h1 className="services-page-title">
          Transforming Businesses With End-To-End Technology Solutions
        </h1>

        <p className="services-page-description">
          We deliver intelligent, future-ready solutions designed to help businesses thrive in the digital era. 
          From strategy to execution, our services empower organizations to innovate, optimize, and scale with confidence.
        </p>
      </div>

      {/* GRID SECTION */}
      <div className="services-page-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="services-page-card">
            
            {/* ICON */}
            <img 
              src={service.icon} 
              alt={service.title + ' icon'}
              className="services-page-icon"
            />

            <h3 className="services-page-card-title">{service.title}</h3>
            <p className="services-page-card-desc">{service.desc}</p>

            <button
              className="services-page-btn"
              onClick={() => {
                navigate(service.link);
                window.scrollTo(0, 0);
              }}
            >
              Read More
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
