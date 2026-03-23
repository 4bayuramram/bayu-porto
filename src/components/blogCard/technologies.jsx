import React from "react";

// Dummy data artikel teknologi
const posts = [
  {
    id: 1,
    title: "Perkembangan AI di Tahun 2026",
    description:
      "Artificial Intelligence semakin berkembang pesat dan mulai digunakan di berbagai sektor industri.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    author: "Alan Dev",
    date: "23 Maret 2026",
    category: "AI",
  },
  {
    id: 2,
    title: "Belajar React dari Nol",
    description:
      "React adalah library JavaScript populer untuk membangun UI modern berbasis komponen.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    author: "Gilang Tech",
    date: "20 Maret 2026",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Kenapa JavaScript Penting?",
    description:
      "JavaScript menjadi bahasa utama dalam pengembangan web modern.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    author: "Tech Writer",
    date: "18 Maret 2026",
    category: "Programming",
  },
  {
    id: 4,
    title: "Tren Web Development 2026",
    description:
      "Mulai dari AI integration hingga serverless architecture, ini tren terbaru web dev.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    author: "Dev Insight",
    date: "15 Maret 2026",
    category: "Web Dev",
  },
];

const Teknologi = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Blog Teknologi</h1>
        <p style={styles.subtitle}>
          Update terbaru dunia teknologi, programming, dan AI
        </p>
      </header>

      {/* Grid Card */}
      <div style={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <img src={post.image} alt={post.title} style={styles.image} />

            <div style={styles.cardContent}>
              <span style={styles.category}>{post.category}</span>

              <h2 style={styles.cardTitle}>{post.title}</h2>

              <p style={styles.description}>{post.description}</p>

              <div style={styles.footer}>
                <span style={styles.author}>{post.author}</span>
                <span style={styles.date}>{post.date}</span>
              </div>

              <button style={styles.button}>Baca Selengkapnya</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling sederhana (inline CSS)
const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#666",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "20px",
  },
  category: {
    fontSize: "12px",
    color: "#007bff",
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: "20px",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#888",
    marginBottom: "15px",
  },
  author: {},
  date: {},
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Teknologi;
