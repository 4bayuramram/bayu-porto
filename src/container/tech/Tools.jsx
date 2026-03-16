import { FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import {
  SiRedux,
  SiVite,
  SiEslint,
  SiPostcss,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiMongodb,
  SiStorybook,
  SiFigma,
  SiDiagramsdotnet,
} from "react-icons/si";

import { TbTerminal, TbRefresh, TbSettings } from "react-icons/tb";
import GlareHover from "../../components/about/GlareHover";
import "./Tools.css";

export default function Tools() {
  const tools = [
    {
      name: "Figma",
      icon: <SiFigma className="text-purple-500 text-4xl" />,
      level: "UI/UX Design",
    },
    {
      name: "draw.io",
      icon: <SiDiagramsdotnet className="text-orange-500 text-4xl" />,
      level: "System Diagram",
    },
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
      name: "Redux",
      icon: <SiRedux className="text-purple-500 text-4xl" />,
      level: "State Management",
    },
    {
      name: "Storybook",
      icon: <SiStorybook className="text-pink-500 text-4xl" />,
      level: "UI Documentation",
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
      name: "Nodemon",
      icon: <TbRefresh className="text-4xl" />,
      level: "Dev Tool",
    },
    {
      name: "Mongoose",
      icon: <SiMongodb className="text-green-500 text-4xl" />,
      level: "MongoDB ODM",
    },
    {
      name: "dotenv",
      icon: <TbSettings className="text-4xl" />,
      level: "Env Config",
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 text-4xl" />,
      level: "API Testing and Documentation",
    },
    {
      name: "cURL",
      icon: <TbTerminal className="text-4xl" />,
      level: "HTTP Client",
    },
    {
      name: "Vercel",
      icon: <SiVercel className="text-white text-4xl" />,
      level: "Deployment Platform",
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-teal-400 text-4xl" />,
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
