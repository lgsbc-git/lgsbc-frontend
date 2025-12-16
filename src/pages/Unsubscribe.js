import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config/api";
import '../styles/Unsubscribe.css';
import { MdError } from "react-icons/md";
import unsubscribedIcon from "../assets/icons8-unsubscribed.gif";

const Unsubscribe = () => {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    if (!email) {
      setStatus("error");
      setMessage("Invalid unsubscribe link.");
      return;
    }

    fetch(`${API_BASE_URL}/unsubscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus("success");
          setMessage(data.success);
        } else {
          setStatus("error");
          setMessage(data.error || "Something went wrong.");
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Server error. Try again later.");
      });
  }, []);

  return (
    <div className="unsubscribe-container">
      {status === "loading" && <p className="loading">Unsubscribing you...</p>}

      {status === "success" && (
        <div className="success-box">
          <h2>
            <img
              src={unsubscribedIcon}
              alt="success icon"
              style={{
                width: "28px",
                height: "28px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />
            Unsubscribed
          </h2>
          <p>{message}</p>
        </div>
      )}

      {status === "error" && (
        <div className="error-box">
          <h2>
            <MdError
              size={25}
              color="#45444481"
              style={{ marginRight: "8px", marginBottom: "3px", verticalAlign: "middle" }}
            />
            Error
          </h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Unsubscribe;
