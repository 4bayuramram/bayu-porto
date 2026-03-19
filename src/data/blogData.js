// src/data/blogData.js

import NontonBarca from "../pages/Blog/MyBlog/nontonbarca";
import AIBeyondDigital from "../pages/Blog/MyBlog/aiBeyondDigital";
import NetworkingCollege from "../pages/Blog/MyBlog/networkingCollege";
import HealthyRoutine from "../pages/Blog/MyBlog/healthyRoutine"
import SessionHijacking from "../pages/Blog/MyBlog/sessionHijacking";

// gambar 
import barca from "../assets/barca.jpg";
import ai from "../assets/ai.jpg"
import college from "../assets/college.jpg"
import health from "../assets/health.jpg"
import hacker from "../assets/hacker.jpg";

export const blogData = [
  // BLOG (pakai component)
  {
    id: 1,
    type: "blog",
    title: "My Dream to Watch Barcelona Live",
    desc: "A personal dream to watch Barcelona in the stadium",
    image: barca,
    component: NontonBarca,
  },
  {
    id: 2,
    type: "blog",
    title: "AI Beyond the Digital World",
    desc: "My perspective on AI evolving beyond screens",
    image: ai,
    component: AIBeyondDigital,
  },
  {
    id: 3,
    type: "blog",
    title: "Networking During College",
    desc: "Why building connections matters",
    image: college,
    component: NetworkingCollege,
  },
  {
    id: 4,
    type: "blog",
    title: "Making Time for Simple Exercise",
    desc: "In the middle of busy daily activities",
    image: health,
    component: HealthyRoutine,
  },
  {
    id: 5,
    type: "blog",
    title: "How a Simple Mistake Led to an Email Hack",
    desc: "a friend of mine experienced something serious—his email was hacked",
    image: hacker,
    component: SessionHijacking,
  },
  // ARTICLE (pakai content)
  {
    id: 6,
    type: "article",
    title: "Judul Article",
    desc: "Short desc",
    content: "This is full article content...",
    image: "/img2.jpg",
  },

  // LINK (external)
  {
    id: 7,
    type: "link",
    title: "Belajar TypeScript",
    desc: "Guide dari internet",
    image: "https://source.unsplash.com/300x200",
    url: "https://example.com",
  },
];
