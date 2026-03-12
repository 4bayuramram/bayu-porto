import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutTech from "./pages/AboutTech";
import Tech from "./pages/Tech"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/abouttech" element={<AboutTech />} />
      </Routes>
    </BrowserRouter>
  );
}
