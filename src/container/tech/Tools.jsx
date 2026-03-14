import { FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiVite, SiEslint, SiPostcss, SiVercel } from "react-icons/si";
import GlareHover from "../../components/about/GlareHover";
import "./tools.css";

export default function Tools() {
  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500 text-4xl" />,
      level: "Version Control",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white text-4xl" />,
      level: "Git Hosting",
    },
    {
      name: "NPM",
      icon: <FaNpm className="text-red-500 text-4xl" />,
      level: "Package Manager",
    },
    {
      name: "Vite",
      icon: <SiVite className="text-purple-400 text-4xl" />,
      level: "Build Tool",
    },
    {
      name: "ESLint",
      icon: <SiEslint className="text-indigo-400 text-4xl" />,
      level: "Linting Tool",
    },
    {
      name: "PostCSS",
      icon: <SiPostcss className="text-orange-400 text-4xl" />,
      level: "CSS Processor",
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-white text-4xl" />,
      level: "Deployment Platform",
    },
  ];

  return (
    <div className="tools-wrapper">
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="tools-card group relative flex items-center gap-4 border border-gray-500 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 overflow-hidden"
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

            <div className="tools-content relative z-10 flex items-center gap-4">
              {tool.icon}

              <div className="flex flex-col">
                <span className="font-semibold">{tool.name}</span>
                <span className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
                  {tool.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
