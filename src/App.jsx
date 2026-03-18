import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AboutTech from "./pages/About/AboutTech";
import Tech from "./pages/About/Tech"
import Portofolio from "./pages/Portofolio/Portofolio";
import Blog from "./pages/Blog/Blog"
import BlogDetail from "./pages/Blog/BlogDetail";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/abouttech" element={<AboutTech />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
