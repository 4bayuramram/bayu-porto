import React from "react";

const Media = () => {
  // List video (bisa kamu ganti sesuai kebutuhan)
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Project Demo 1",
      description: "Demo aplikasi web yang saya buat.",
    },
    {
      id: "3JZ_D3ELwOQ",
      title: "Project Demo 2",
      description: "Demo fitur utama aplikasi.",
    },
    {
      id: "L_jWHffIx5E",
      title: "Tech Talk",
      description: "Sharing tentang teknologi terbaru.",
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headerStyle}>🎬 Media & Projects</h2>

      <div style={gridStyle}>
        {videos.map((video, index) => (
          <div key={index} style={cardStyle}>
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              style={{ borderRadius: "10px" }}
            ></iframe>

            <h3 style={titleStyle}>{video.title}</h3>
            <p style={descStyle}>{video.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styling
const sectionStyle = {
  padding: "30px 20px",
  backgroundColor: "#ffffff",
  margin: "20px auto",
  maxWidth: "900px",
};

const headerStyle = {
  textAlign: "center",
  fontSize: "2rem",
  marginBottom: "20px",
};

const gridStyle = {
  display: "grid",
  gap: "20px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
};

const titleStyle = {
  marginTop: "10px",
  fontSize: "1.2rem",
};

const descStyle = {
  color: "#555",
};

export default Media;
