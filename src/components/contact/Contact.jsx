import React, { useState } from "react";

// Reusable Input Component
const InputField = ({ label, name, type = "text", value, onChange }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        style={styles.input}
      />
    </div>
  );
};

// Reusable TextArea
const TextAreaField = ({ label, name, value, onChange }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        style={styles.textarea}
      />
    </div>
  );
};

// Reusable Contact Info
const ContactInfo = ({ email, linkedin, location }) => {
  return (
    <div style={styles.infoBox}>
      <p>📧 {email}</p>
      <p>
        💼{" "}
        <a href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
      <p>📍 {location}</p>
    </div>
  );
};

// Main Component
export default function Contact({
  email = "your@email.com",
  linkedin = "https://linkedin.com",
  location = "Indonesia",
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Me</h2>

        <ContactInfo email={email} linkedin={linkedin} location={location} />

        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <TextAreaField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    width: "100%",
    maxWidth: "500px",
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  infoBox: {
    marginBottom: "20px",
    padding: "10px",
    background: "#f9f9f9",
    borderRadius: "6px",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  status: {
    marginTop: "10px",
    textAlign: "center",
    color: "green",
  },
};
