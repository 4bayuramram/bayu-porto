import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  tech = [],
  demoLink,
  githubLink,
}) {
  return (
    <div
      className="border rounded-lg shadow-sm p-4 flex flex-col overflow-visible 
hover:scale-105 hover:bg-gray-200/30 transition duration-300"
    >
      <video
        src={image}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-56 object-cover rounded-md"
      />

      <div className="mt-3 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-white-500 line-clamp-3">{description}</p>

        <div className="flex justify-between items-center mt-auto pt-2">
          {/* tech */}
          <div className="flex gap-3 pb-4">
            {tech.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group flex flex-col items-center"
                >
                  <Icon
                    className={`${item.color} text-lg transition-transform duration-200 group-hover:scale-125`}
                  />

                  <span className="absolute -bottom-5 text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* links */}
          <div className="flex gap-3 text-xl">
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="transition transform hover:scale-125"
            >
              <FiExternalLink />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="transition transform hover:scale-125"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
