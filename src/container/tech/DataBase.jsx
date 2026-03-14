import { SiMongodb, SiSupabase } from "react-icons/si";
import GlareHover from "../../components/about/GlareHover";
import "./database.css";

export default function Database() {
  const databases = [
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-4xl" />,
      type: "NoSQL",
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-emerald-400 text-4xl" />,
      type: "PostgreSQL",
    },
  ];

  return (
    <div className="database-wrapper">
      <div className="database-grid">
        {databases.map((db, index) => (
          <div
            key={index}
            className="database-card group relative flex items-center gap-4 border border-gray-500 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 overflow-hidden"
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

            <div className="database-content relative z-10 flex items-center gap-4">
              {db.icon}

              <div className="flex flex-col">
                <span className="font-semibold">{db.name}</span>
                <span className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
                  {db.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
