import { useNavigate } from "react-router-dom";

export default function BlogCard({ post }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${post.id}`)}
      className="blog-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
        padding: "16px",
        borderRadius: "12px",
        background: "#1a1a1a",
        cursor: "pointer",
        marginBottom: "16px",
      }}
    >
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "12px", opacity: 0.6 }}>{post.date}</p>

        <h3 style={{ margin: "6px 0", color: "#ffd54f" }}>{post.title}</h3>

        <p style={{ fontSize: "14px", opacity: 0.8 }}>{post.desc}</p>
      </div>

      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
