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
      className="blog-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
        padding: "16px",
        borderRadius: "12px",
        background: "#1a1a1a",
        cursor: post.type === "article" ? "default" : "pointer",
        marginBottom: "16px",
      }}
    >
      <div style={{ flex: 1 }}>
        {/* badge */}
        <span
          style={{
            fontSize: "10px",
            padding: "4px 8px",
            borderRadius: "6px",
            background:
              post.type === "blog"
                ? "#ffd54f"
                : post.type === "article"
                ? "#4fc3f7"
                : "#81c784",
            color: "#000",
            display: "inline-block",
            marginBottom: "6px",
          }}
        >
          {post.type}
        </span>

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
