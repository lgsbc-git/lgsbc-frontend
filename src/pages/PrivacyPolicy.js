import React from "react";
import "../styles/PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="page privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Last Updated: September 2025</p>

      <p>
        At <strong>LGS</strong>, we respect your privacy and are committed to
        protecting your personal information. This policy explains what data we
        collect, how we use it, and your rights.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect:</p>
      <ul>
        <li>Your name, email, phone number, and company details</li>
        <li>Information you share when contacting us or subscribing</li>
        <li>
          Project-related data required for consulting or data migration
          activities
        </li>
        <li>
          Technical information such as IP address, browser type, and website
          usage patterns (via cookies or analytics tools)
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>Your information is used to:</p>
      <ul>
        <li>Provide and improve our services</li>
        <li>Communicate regarding enquiries, updates, and support</li>
        <li>Deliver project-specific solutions and consulting activities</li>
        <li>Ensure security and comply with legal requirements</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>
        We <strong>do not sell</strong> your personal data. We may share
        necessary information with trusted technology partners who help deliver
        our services. These partners operate under strict confidentiality and
        data protection standards.
      </p>

      <h2>Your Rights</h2>
      <p>You may request:</p>
      <ul>
        <li>Access to your data</li>
        <li>Corrections or updates</li>
        <li>Deletion of your information after project completion</li>
      </ul>
      <p>
        To make a request, contact us at{" "}
        <a href="mailto:support@lgsbc.com.au">support@lgsbc.com.au</a>.
      </p>

      <h2>Cookies & Tracking</h2>
      <p>
        Our website may use cookies or analytics tools to improve user
        experience, measure engagement, and understand site performance. You may
        disable cookies through your browser settings.
      </p>

      <h2>Data Security</h2>
      <p>
        We implement reasonable technical and administrative safeguards to
        protect your information. However, no method of online transmission is
        completely secure.
      </p>

      <h2>Policy Updates</h2>
      <p>
        This Privacy Policy may be updated periodically. Continued use of our
        website indicates acceptance of any changes.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
