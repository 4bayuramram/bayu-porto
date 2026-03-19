import { useParams } from "react-router-dom";
import { blogData } from "../../data/blogData";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogData.find((p) => p.id == id);

  if (!post) return <div className="detail-wrapper">Not found</div>;

  const PostComponent = post.component;

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        {post.type === "blog" && PostComponent ? (
          <PostComponent />
        ) : (
          <>
            <h1>{post.title}</h1>
            {post.date && <p className="date">Published at {post.date}</p>}

            <div className="line"></div>

            {post.image && <img src={post.image} alt={post.title} />}

            {post.type === "article" && (
              <p className="content">{post.content}</p>
            )}

            {post.type === "link" && (
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
              >
                Go to source
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
