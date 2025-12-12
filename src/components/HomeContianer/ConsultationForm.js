import React, { useState } from "react";
import "../../styles/ConsultationForm.css";

import emailIcon from "../../assets/home/Email.png";
import locationIcon from "../../assets/home/Location.png";

import { CheckCircle, XCircle, X } from "lucide-react";

function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        showNotification(
          "Your message has been submitted successfully. We will be in touch soon!",
          true
        );

        // Reset form
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
    <section className="consult-section">
      {/* NOTIFICATION BAR */}
      {notification.show && (
        <div
          className={`notification-bar ${
            notification.isSuccess ? "success" : "error"
          }`}
        >
          <div className="notification-content">
            {notification.isSuccess ? (
              <CheckCircle size={20} className="icon-success" />
            ) : (
              <XCircle size={20} className="icon-error" />
            )}

            <div className="notification-text">
              <p className="notification-title">
                {notification.isSuccess ? "Success!" : "Oops!"}
              </p>
              <p className="notification-message">{notification.message}</p>
            </div>
          </div>

          <button onClick={closeNotification} className="close-btn">
            <X size={16} />
          </button>
        </div>
      )}

      {/* MAIN BOX */}
      <div className="consult-box">
        {/* LEFT CONTENT */}
        <div className="consult-left">
          <p className="consult-sub">Book a Consultation</p>

          <h2 className="consult-title">
            Ready To Transform Your <br /> Business? Let’s Talk.
          </h2>

          <p className="consult-desc">
            Every great transformation starts with a conversation. At LGSTech,
            we believe that understanding your goals is the first step to
            crafting the perfect technology solution.
          </p>

          <div className="consult-info">
            <div className="consult-info-box">
              <img src={emailIcon} className="consult-icon" alt="email" />
              <div>
                <h4>Email</h4>
                <a href="mailto:support@lgsbc.com.au">support@lgsbc.com.au</a>
              </div>
            </div>

            <div className="consult-info-box">
              <img src={locationIcon} className="consult-icon" alt="location" />
              <div>
                <h4>Location</h4>
                <p>457 Upper Edward Street, Spring Hill, QLD - 4000</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="consult-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            placeholder="Message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="consult-btn" disabled={isLoading}>
            {isLoading ? <div className="loader"></div> : "Submit Now"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ConsultationForm;
