import React, { useEffect, useRef } from "react";
import "../../styles/OurWorkProcess.css";

// Import images for each process step
import discoverImg from "../../assets/home/stepimg04.png.png";
import designImg from "../../assets/home/stepimg05.png.png";
import deliverImg from "../../assets/home/step04.png.png";
import driveImg from "../../assets/home/stepimg04.png.png";

function OurWorkProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When section comes into view, apply dark theme to entire page
          document.documentElement.style.backgroundColor = "#000000";
          document.body.style.backgroundColor = "#000000";
          document.documentElement.style.color = "#ffffff";
          document.body.style.color = "#ffffff";
          document.documentElement.style.transition =
            "background-color 0.5s ease, color 0.5s ease";
          document.body.style.transition =
            "background-color 0.5s ease, color 0.5s ease";
        } else {
          // When section leaves view, reset to normal background
          document.documentElement.style.backgroundColor = "#ffffff";
          document.body.style.backgroundColor = "#ffffff";
          document.documentElement.style.color = "#00255d";
          document.body.style.color = "#00255d";
          document.documentElement.style.transition =
            "background-color 0.5s ease, color 0.5s ease";
          document.body.style.transition =
            "background-color 0.5s ease, color 0.5s ease";
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Reset on cleanup
      document.documentElement.style.backgroundColor = "#ffffff";
      document.body.style.backgroundColor = "#ffffffde";
      document.documentElement.style.color = "#00255d";
      document.body.style.color = "#00255d";
    };
  }, []);

  const processSteps = [
    {
      id: 1,
      title: "DISCOVER",
      subtitle: "A shared understanding of success",
      image: discoverImg,
      position: "left",
    },
    {
      id: 2,
      title: "DESIGN",
      subtitle: "A vision of the future",
      image: designImg,
      position: "right",
    },
    {
      id: 3,
      title: "DELIVER",
      subtitle: "Creating meaningful solutions",
      image: deliverImg,
      position: "left",
    },
    {
      id: 4,
      title: "DRIVE",
      subtitle: "Ensuring ongoing value is delivered",
      image: driveImg,
      position: "right",
    },
  ];

  return (
    <section className="work-process-section" ref={sectionRef}>
      <div className="work-process-container">
        <h1 className="work-process-heading">Our Work Process</h1>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={step.id} className={`process-step ${step.position}`}>
              {/* Left or Right Content Box */}
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

              {/* Vertical Timeline Line (except for last item) */}
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
