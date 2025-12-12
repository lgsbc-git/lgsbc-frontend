import React from "react";
import "../../styles/OurWorkProcess.css";

// Import images for each process step
import discoverImg from "../../assets/home/female-team-leader-business-meeting-office-1.JPG";
import designImg from "../../assets/home/stepimg05.png.png";
import deliverImg from "../../assets/home/step04.png.png";
import driveImg from "../../assets/home/happy-business-partners-raising-hands.jpg";

function OurWorkProcess() {
  const processSteps = [
    {
      id: 1,
      title: "DISCOVER",
      subtitle: "We work side-by-side with your business teams to surface pain points, map requirements, and align on long-term objectives. Our engagement approach drives active participation, creating a unified view of your current landscape and a clear roadmap for future success",
      image: discoverImg,
      position: "left",
    },
    {
      id: 2,
      title: "DESIGN",
      subtitle: "We craft technology solutions that fit the way you work now and flex as your business evolves. By designing for both alignment and adaptability, we help you unlock meaningful, lasting impact",
      image: designImg,
      position: "right",
    },
    {
      id: 3,
      title: "DELIVER",
      subtitle: "We build and deliver transformative technology and business solutions using our tried and tested methodology that provide fast measurable ROI and build the foundation for lasting growth ",
      image: deliverImg,
      position: "left",
    },
    {
      id: 4,
      title: "DRIVE",
      subtitle: "We guide your organization through every stage of technology adoption, partnering with you to unlock measurable value and drive lasting business success",
      image: driveImg,
      position: "right",
    },
  ];

  return (
    <section className="work-process-section">
      <div className="work-process-container">
        <h1 className="work-process-heading">Our Work Process</h1>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={step.id} className={`process-step ${step.position}`}>
              {/* Content */}
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-subtitle">{step.subtitle}</p>
              </div>

              {/* Image */}
              <div className="process-image-wrapper">
                <img
                  src={step.image}
                  alt={step.title}
                  className="process-image"
                />
              </div>

              {/* Timeline */}
              {index < processSteps.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWorkProcess;
