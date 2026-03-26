import React from "react";
import "./WebDesign.css";

// Card Component
const DesignCard = ({ title, desc, category }) => {
  return (
    <div className="card">
      <div className="image"></div>
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
      <span className="badge">{category}</span>
    </div>
  );
};

// Section Title
const SectionTitle = ({ text }) => {
  return <h2 className="section-title">{text}</h2>;
};

// Main Component
export default function WebDesign() {
  const designs = [
    { title: "Landing Page", desc: "Clean modern UI", category: "UI" },
    { title: "Dashboard", desc: "Admin analytics", category: "Dashboard" },
    { title: "E-commerce", desc: "Online shop UI", category: "Shop" },
    { title: "Mobile App", desc: "Responsive UI", category: "Mobile" },
    { title: "Portfolio", desc: "Personal branding", category: "Portfolio" },
    { title: "Blog UI", desc: "Readable layout", category: "Blog" },
  ];

  return (
    <div className="container">
      <h1 className="title">🎨 Web Design</h1>
      <p className="subtitle">Showcase UI/UX Design</p>

      <SectionTitle text="Projects" />

      <div className="grid">
        {designs.map((d, i) => (
          <DesignCard key={i} {...d} />
        ))}
      </div>

      <SectionTitle text="Principles" />

      <div className="section">
        <p>Consistency</p>
        <p>Responsive</p>
        <p>User Friendly</p>
      </div>

      <div className="footer">© 2026 Portfolio</div>
    </div>
  );
}
