import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import GlareHover from "../../components/about/GlareHover";
import "./languages.css";

export default function Languages() {
  const languages = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-4xl" />,
      level: "Intermediate",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      level: "Beginner",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400 text-4xl" />,
      level: "Beginner",
    },
  ];

  return (
    <div className="languages-wrapper">
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="language-card group relative flex items-center gap-4 border border-gray-500 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 overflow-hidden"
          >
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.25}
              glareAngle={-30}
              glareSize={160}
              transitionDuration={600}
              playOnce={false}
              style={{
                "--gh-width": "100%",
                "--gh-height": "100%",
                "--gh-bg": "transparent",
                "--gh-border": "transparent",
                position: "absolute",
                inset: 0,
                zIndex: 0,
              }}
            />

            <div className="language-content relative z-10 flex items-center gap-4">
              {lang.icon}

              <div className="flex flex-col">
                <span className="font-semibold">{lang.name}</span>
                <span className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
                  {lang.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
