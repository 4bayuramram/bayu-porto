import ProjectCard from "../components/projectcard/ProjectCard";

import {
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

export default function Portofolio() {
  return (
    <div className=" bg-gray-800 flex flex-col items-center gap-8 py-10">
      <div className="text-center mt-32">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-gray-500">Selected projects and work.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 w-[1200px]">
        <ProjectCard
          title="Helloana"
          description="Helloana is a nail beauty website with a single admin login. The admin manages booking schedules, updates services, prices, information, and images."
          image="/project3.webm"
          tech={[
            { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
            { icon: SiSupabase, name: "Supabase", color: "text-green-500" },
            { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
          ]}
          demoLink="#"
          githubLink="#"
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
          demoLink="#"
          githubLink="#"
        />

        <ProjectCard
          title="EMR"
          description="Electronic Medical Record (EMR) management system for clinical workflow."
          image="/projectEMR.webm"
          tech={[
            { icon: FaReact, name: "React.js", color: "text-cyan-400" },
            { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
            { icon: SiExpress, name: "Express.js", color: "text-gray-600" },
            { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
          ]}
          demoLink="https://yayasannurassyifasamarinda.com/"
          githubLink="#"
        />
        {/* copy-1 debug visual  */}
        <ProjectCard
          title="EMR"
          description="Electronic Medical Record (EMR) management system for clinical workflow."
          image="/projectEMR.webm"
          tech={[
            { icon: FaReact, name: "React.js", color: "text-cyan-400" },
            { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
            { icon: SiExpress, name: "Express.js", color: "text-gray-600" },
            { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
          ]}
          demoLink="#"
          githubLink="#"
        />
        {/* copy-2 debug visual  */}
        <ProjectCard
          title="Helloana"
          description="Helloana is a nail beauty website with a single admin login. The admin manages booking schedules, updates services, prices, information, and images."
          image="/project3.webm"
          tech={[
            { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
            { icon: SiSupabase, name: "Supabase", color: "text-green-500" },
            { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
          ]}
          demoLink="#"
          githubLink="#"
        />
        {/* copy-3 debug visual  */}
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
          demoLink="#"
          githubLink="#"
        />
      </div>
    </div>
  );
}
