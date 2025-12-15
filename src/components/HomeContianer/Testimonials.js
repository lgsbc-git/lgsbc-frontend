import React from "react";
import "../../styles/Testimonials.css";
import { FaUserCircle } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "LGS helped us streamline our ERP evaluation and guided us in selecting the perfect solution for our operations. Their expertise and transparency made the entire process seamless.",
      name: "Mark Robinson",
      role: "CEO | TechFlow Systems",
    },
    {
      rating: 5,
      text: "LGS helped us streamline our ERP evaluation and guided us in selecting the perfect solution for our operations. Their expertise and transparency made the entire process seamless.",
      name: "Mark Robinson",
      role: "CEO | TechFlow Systems",
    },
    {
      rating: 4,
      text: "LGS helped us streamline our ERP evaluation and guided us in selecting the perfect solution for our operations. Their expertise and transparency made the entire process seamless.",
      name: "Mark Robinson",
      role: "CEO | TechFlow Systems",
    },
  ];

  return (
    <section className="testimonials-section">
      {/* TOP TITLE AREA */}
      <div className="testimonials-top">
        <p className="testimonials-subtitle">Our Latest Testimonials</p>

        <h2 className="testimonials-title">What Our Clients Say About Us?</h2>

        <p className="testimonials-desc">
          Our greatest achievement is the success of our clients. We take pride
          in building lasting partnerships and delivering solutions that create
          measurable impact. Here's what businesses around the world have to say
          about working with us.
        </p>
      </div>

      {/* CARDS */}
      <div className="testimonials-cards">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            {/* Dynamic Stars */}
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < item.rating ? "star-filled" : "star-empty"}
                >
                  {i < item.rating ? "⭐" : "☆"}
                </span>
              ))}
            </div>

            <p className="testimonial-text">“{item.text}”</p>

            {/* Author */}
            <div className="testimonial-author">
              <FaUserCircle className="author-icon" />
              <div>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
