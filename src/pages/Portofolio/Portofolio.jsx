import PillNav from "../../components/navbar/PilNav";
import Mnav from "../../components/mnavbar/Mnav";
import ProjectCard from "../../components/projectcard/ProjectCard";

import {
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

import "./Portofolio.css";

export default function Portofolio() {
  return (
    <div className="bg-gray-800 w-full flex flex-col items-center">
      {/* Desktop Navbar */}
      <div className="absolute top-6 right-[330px] z-50 scale-100">
        <PillNav
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/abouttech" },
            { label: "Portofolio", href: "/portofolio" },
          ]}
          activeHref="/portofolio"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#1f2937"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          theme="light"
          initialLoadAnimation={false}
        />
      </div>

      {/* Mobile Navbar */}
      <Mnav />

      {/* Title */}
      <div className="text-center mt-36 mb-12">
        <h1 className="text-3xl font-bold text-white">My Projects</h1>
        <p className="text-gray-400">Selected projects and work.</p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-3 gap-6 max-w-[1200px] w-full pb-20">
        <ProjectCard
          title="Helloana"
          description="Helloana is a nail beauty website with a single admin login. The admin manages booking schedules, updates services, prices, information, and images."
          image="/project3.webm"
          tech={[
            { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
            { icon: SiTypescript, name: "Typescript", color: "text-sky-400" },
            { icon: SiSupabase, name: "Supabase", color: "text-green-500" },
            { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
          ]}
          demoLink="https://helloana.vercel.app"
          githubLink="https://github.com/4bayuramram/helloana"
        />

        <ProjectCard
          title="Website Portfolio"
          description="Website portfolio to showcase projects, skills, and web development work."
          image="/project2.webm"
          tech={[
            { icon: FaReact, name: "React.js", color: "text-cyan-400" },
            {
              icon: SiJavascript,
              name: "JavaScript",
              color: "text-yellow-400",
            },
            { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
          ]}
          demoLink="https://rama-ebon.vercel.app"
          githubLink="https://github.com/4bayuramram/bayu-porto"
        />

        <ProjectCard
          title="EMR"
          description="Electronic Medical Record (EMR) management system for clinical workflow."
          image="/projectEMR.webm"
          tech={[
            { icon: FaReact, name: "React.js", color: "text-cyan-400" },
            { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
            { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
            { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
          ]}
          demoLink="#"
          githubLink="#"
        />
      </div>
    </div>
  );
}
