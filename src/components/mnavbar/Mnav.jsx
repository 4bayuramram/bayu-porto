import { Link } from "react-router-dom";
import GlareHover from "../about/GlareHover";
import "./Mnav.css";

export default function Mnav() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/abouttech" },
    { label: "Portofolio", href: "/portofolio" },
  ];

  return (
    <nav className="mnav-container">
      <div className="mnav-card">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.25}
          glareAngle={-30}
          glareSize={200}
          transitionDuration={600}
          playOnce={false}
          style={{
            "--gh-width": "100%",
            "--gh-height": "100%",
            "--gh-bg": "transparent",
            "--gh-border": "transparent",
          }}
        >
          <ul className="mnav-list">
            {items.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="mnav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </GlareHover>
      </div>
    </nav>
  );
}
