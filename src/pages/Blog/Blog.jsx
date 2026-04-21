import { useState } from "react";
import { blogData } from "../../data/blogData";
import "./Blog.css";
import GetInTouch from "../../components/getintouch/GetInTouch";

export default function Blog() {
  const [type, setType] = useState("blog");
  const filtered = blogData.filter((item) => item.type === type);

  return (
    <div className="page-blog">
      {" "}
      {/* wrapper */}
      <div className="container">
        <div className="layout">
          <div className="left">
            {filtered.length > 0 ? (
              filtered.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <p className="no-articles">
                No articles found for "{type}". Try another topic.
              </p>
            )}
          </div>

          <div className="right">
            <h3>Let’s share experiences, stories, and knowledge together.</h3>
            <div className="line"></div>

            <button
              className={type === "blog" ? "active-btn" : ""}
              onClick={() => setType("blog")}
            >
              Blog
            </button>
            <button
              className={type === "article" ? "active-btn" : ""}
              onClick={() => setType("article")}
            >
              Article
            </button>
            <button
              className={type === "link" ? "active-btn" : ""}
              onClick={() => setType("link")}
            >
              Link
            </button>

            <div className="contact-box">
              <GetInTouch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
