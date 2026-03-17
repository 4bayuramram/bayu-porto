import { useState } from "react";
import { blogData } from "../../data/blogData";
import BlogCard from "../../components/BlogCard";

export default function Blog() {
  const [selected, setSelected] = useState(blogData[0]);

  return (
    <div className="layout">
      <div>
        {blogData.map((post) => (
          <BlogCard key={post.id} post={post} onClick={setSelected} />
        ))}
      </div>

      <div>
        <img src={selected.image} />
        <h2>{selected.title}</h2>
        <p>{selected.content}</p>
      </div>
    </div>
  );
}
