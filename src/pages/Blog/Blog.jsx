import { blogData } from "../../data/blogData";
import "./Blog.css";
import BlogCard from "../../components/BlogCard/BlogCard";

export default function Blog() {
  return (
    <div className="layout">
      <div className="left">
        {blogData.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="right">
        <h3>Let’s share experiences, stories, and knowledge together.</h3>

        <div className="line"></div>

        <h4>Get In Touch</h4>
        <p>Email Me</p>
      </div>
    </div>
  );
}
