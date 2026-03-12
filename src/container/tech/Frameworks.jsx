import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress } from "react-icons/si";
import GlareHover from "../../components/about/GlareHover";

export default function Frameworks() {
  const frameworks = [
    {
      name: "ReactJS",
      icon: <FaReact className="text-cyan-400 text-4xl" />,
      level: "beginner",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
      level: "beginner",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500 text-4xl" />,
      level: "beginner",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white text-4xl" />,
      level: "beginner",
    },
    {
      name: "ExpressJS",
      icon: <SiExpress className="text-gray-300 text-4xl" />,
      level: "beginner",
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs className="text-green-500 text-4xl" />,
      level: "beginner",
    },
  ];

  return (
    <div className="p-10">

      <div className="grid grid-cols-4 gap-6">
        {frameworks.map((fw, index) => (
          <div
            key={index}
            className="group relative flex items-center gap-4 border border-white rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:bg-gray-700 overflow-hidden"
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

            <div className="relative z-10 flex items-center gap-4">
              {fw.icon}

              <div className="flex flex-col">
                <span className="font-semibold">{fw.name}</span>
                <span className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
                  {fw.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
