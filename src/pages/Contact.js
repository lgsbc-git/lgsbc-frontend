import React, { useEffect, useState } from "react";
import { MapPin, Linkedin, CheckCircle, XCircle, X } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const showNotification = (message, isSuccess) => {
    setNotification({ show: true, message, isSuccess });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const closeNotification = () =>
    setNotification((prev) => ({ ...prev, show: false }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const backendURL = process.env.REACT_APP_BACKEND_URL;
      const res = await fetch(`${backendURL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        showNotification(
          "Your message has been submitted successfully. We will be in touch soon!",
          true
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        showNotification(
          data.error || "Something went wrong. Try again.",
          false
        );
      }
    } catch (error) {
      console.error(error);
      showNotification(
        "Oops! Something went wrong. Please try again later.",
        false
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section contact-page-root">
      {/* CONTACT-SPECIFIC NOTIFICATION (scoped) */}
      {notification.show && (
        <div
          className={`contact-notification ${
            notification.isSuccess ? "success" : "error"
          }`}
        >
          <div className="contact-notification-content">
            {notification.isSuccess ? (
              <CheckCircle size={20} className="contact-icon-success" />
            ) : (
              <XCircle size={20} className="contact-icon-error" />
            )}

            <div className="contact-notification-text">
              <p className="contact-notification-title">
                {notification.isSuccess ? "Success!" : "Oops!"}
              </p>
              <p className="contact-notification-message">
                {notification.message}
              </p>
            </div>
          </div>

          <button onClick={closeNotification} className="contact-close-btn">
            <X size={16} />
          </button>
        </div>
      )}

      {/* TITLE */}
      <h1 className="contact-title">Let’s Connect</h1>

      <p className="contact-subtitle">
        Have questions, ideas, or just want to say hello? Reach us directly or
        send a quick message below.
      </p>

      {/* FORM CARD */}
      <div
        className="contact-card contact-form-card"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="contact-form-heading">Quick Contact Form</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <label className="contact-label">Your Name</label>
          </div>

          <div className="contact-input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <label className="contact-label">Your Email</label>
          </div>

          <div className="contact-input-group">
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
            <label className="contact-label">Your Message</label>
          </div>

          <button
            type="submit"
            className="contact-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? <div className="contact-loader" /> : "Send Message"}
          </button>
        </form>
      </div>

      {/* ===== CONTACT PAGE CONSULT (scoped classes) ===== */}
      <div className="contact-consult-container">
        <div className="contact-consult-left">
          <p className="contact-consult-small">Book a Consultation</p>

          <h2 className="contact-consult-heading">
            Ready To Transform Your <br /> Business? Let’s Talk.
          </h2>

          <p className="contact-consult-desc">
            Every great transformation starts with a conversation. At LGSTech,
            we believe that understanding your goals is the first step to
            crafting the perfect technology solution.
          </p>

          {/* LGSTech.ai (linked to LinkedIn) */}
          <div className="contact-consult-item">
            <a
              href="https://www.linkedin.com/company/lgs-business-consulting/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-consult-link"
              aria-label="LGSTech LinkedIn"
              style={{
                textDecoration: "none",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div className="contact-consult-icon">
                <Linkedin size={28} />
              </div>
              <div>
                <p className="contact-consult-title">LGSTech.ai</p>
                <p className="contact-consult-text">View our LinkedIn</p>
              </div>
            </a>
          </div>

          {/* Email (mailto link) */}
          <div className="contact-consult-item">
            <div className="contact-consult-icon" aria-hidden="true">
              @
            </div>
            <div>
              <p className="contact-consult-title">Email</p>
              <p className="contact-consult-text">
                <a
                  href="mailto:support@lgsbc.com.au"
                  className="contact-email-link"
                >
                  support@lgsbc.com.au
                </a>
              </p>
            </div>
          </div>

          {/* Location (unchanged) */}
          <div className="contact-consult-item">
            <div className="contact-consult-icon">
              <MapPin size={28} />
            </div>
            <div>
              <p className="contact-consult-title">Location</p>
              <p className="contact-consult-text">
                457 Upper Edward Street, Spring Hill, QLD - 4000
              </p>
            </div>
          </div>
        </div>

        <div className="contact-consult-map">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.146760249056!2d153.02509257546015!3d-27.463918916073397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a065b3a95db%3A0x18e2df9b41d6124!2s457%20Upper%20Edward%20St%2C%20Spring%20Hill%20QLD%204000%2C%20Australia!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
