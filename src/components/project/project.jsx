import React from "react";

// Reusable Card
const ProjectCard = ({ title, desc, tech, level }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p style={styles.desc}>{desc}</p>
      <p>
        <strong>Tech:</strong> {tech}
      </p>
      <p>
        <strong>Level:</strong> {level}
      </p>
    </div>
  );
};

// Main Component
export default function ProjectIdeas() {
  const projects = [
    {
      title: "Todo App Advanced",
      desc: "Aplikasi todo dengan fitur drag & drop dan filter",
      tech: "React, LocalStorage",
      level: "Beginner",
    },
    {
      title: "Weather App",
      desc: "Menampilkan cuaca real-time dari API",
      tech: "React, API",
      level: "Beginner",
    },
    {
      title: "Chat App",
      desc: "Realtime chat menggunakan Firebase",
      tech: "React, Firebase",
      level: "Intermediate",
    },
    {
      title: "E-commerce UI",
      desc: "Tampilan toko online lengkap dengan cart",
      tech: "React, Redux",
      level: "Intermediate",
    },
    {
      title: "Portfolio Website",
      desc: "Website portfolio personal modern",
      tech: "React",
      level: "Beginner",
    },
    {
      title: "Blog Platform",
      desc: "CRUD artikel dengan backend",
      tech: "React, Node.js",
      level: "Intermediate",
    },
    {
      title: "Task Management",
      desc: "Mirip Trello dengan board system",
      tech: "React, Drag Drop",
      level: "Advanced",
    },
    {
      title: "Movie App",
      desc: "Menampilkan film dari API",
      tech: "React, API",
      level: "Beginner",
    },
    {
      title: "Dashboard Admin",
      desc: "Dashboard analytics dengan chart",
      tech: "React, Chart.js",
      level: "Intermediate",
    },
    {
      title: "Realtime Collaboration",
      desc: "Edit dokumen bersama realtime",
      tech: "React, WebSocket",
      level: "Advanced",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💡 Project Ideas</h1>

      <p style={styles.subtitle}>
        Berikut beberapa ide project untuk meningkatkan skill web developer
      </p>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            desc={p.desc}
            tech={p.tech}
            level={p.level}
          />
        ))}
      </div>

      <div style={styles.section}>
        <h2>Tips Memilih Project</h2>
        <ul>
          <li>Pilih sesuai level kamu</li>
          <li>Gunakan teknologi yang ingin dipelajari</li>
          <li>Tambahkan fitur unik</li>
          <li>Deploy hasil project</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2>Level Guide</h2>
        <p>
          <strong>Beginner:</strong> UI sederhana + basic logic
        </p>
        <p>
          <strong>Intermediate:</strong> API + state management
        </p>
        <p>
          <strong>Advanced:</strong> realtime + complex system
        </p>
      </div>

      <div style={styles.footer}>
        <p>© 2026 Portfolio</p>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
    background: "#f5f7fa",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  desc: {
    color: "#555",
    marginBottom: "10px",
  },
  section: {
    marginTop: "40px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    color: "#aaa",
  },
};
