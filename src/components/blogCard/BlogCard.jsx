import { useNavigate } from "react-router-dom";

export default function BlogCard({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (post.type === "blog") {
      navigate(`/blog/${post.id}`);
    } else if (post.type === "link") {
      window.open(post.url, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid #fff";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.3)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      className="blog-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "16px",
        padding: "18px",
        borderRadius: "16px",
        background: "#4b5563",
        border: "1px solid rgba(255,255,255,0.3)",
        cursor: post.type === "article" ? "default" : "pointer",
        marginBottom: "12px",
        transition: "0.2s ease",
      }}
    >
      <div style={{ flex: 1 }}>
        <span
          style={{
            fontSize: "11px",
            padding: "4px 10px",
            borderRadius: "999px",
            border: "1px solid #fff",
            color: "#fff",
            display: "inline-block",
            marginBottom: "8px",
          }}
        >
          {post.type}
        </span>

        <p style={{ fontSize: "12px", opacity: 0.6, color: "#fff" }}>
          {post.date}
        </p>

        <h3
          style={{
            margin: "6px 0",
            color: "#fff",
            fontWeight: "600",
          }}
        >
          {post.title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            opacity: 0.7,
            color: "#fff",
          }}
        >
          {post.desc}
        </p>
      </div>

      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "90px",
          height: "90px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
