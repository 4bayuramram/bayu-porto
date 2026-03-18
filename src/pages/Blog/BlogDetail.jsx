import { useParams } from "react-router-dom";
import { blogData } from "../../data/blogData";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogData.find((p) => p.id == id);

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <h1>{post.title}</h1>
        <p className="date">Published at {post.date}</p>

        <div className="line"></div>

        <img src={post.image} alt={post.title} />

        <p className="content">{post.content}</p>
      </div>
    </div>
  );
}
