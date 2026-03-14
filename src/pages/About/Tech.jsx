import { useState, useEffect } from "react";
import GooeyNav from "../../components/about/GooeyNav.jsx";
import "./tech.css";

import Frameworks from "../../container/tech/Frameworks";
import Languages from "../../container/tech/Languages";
import Tools from "@/container/tech/Tools";
import DataBase from "@/container/tech/DataBase";

export default function Tech() {
  const [active, setActive] = useState(0);

  const items = [
    { label: "Languages", href: "#languages" },
    { label: "Frameworks / liberaries ", href: "#frameworks" },
    { label: "Tools", href: "#tools" },
    { label: "Database", href: "#database" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === "#languages") setActive(0);
      if (hash === "#frameworks") setActive(1);
      if (hash === "#tools") setActive(2);
      if (hash === "#database") setActive(3);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
    if (active === 0) return <Languages />;
    if (active === 1) return <Frameworks />;
    if (active === 2) return <Tools />;
    if (active === 3) return <DataBase />;
  };

  return (
    <section className="tech-section bg-gray-800 pb-20">
      <div className="tech-container max-w-6xl mx-auto p-6 rounded-xl overflow-visible">
        {/* TITLE */}
        <div className="tech-title flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            Skills
          </h2>
          <div className="flex-1 h-[2px] bg-gray-500"></div>
        </div>

        {/* MOBILE SAFE NAV */}
        <div className="tech-nav-mobile">
          <div
            className="tech-nav relative flex items-center mb-3 overflow-visible isolation-isolate"
            style={{
              "--color-1": "#61DAFB",
              "--color-2": "#C0C0C0",
              "--color-3": "#ffffff",
              "--color-4": "#8FD3E8",
            }}
          >
            <GooeyNav
              items={items}
              initialActiveIndex={active}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 4, 1, 2, 3, 4]}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="tech-content pt-0 pb-8 px-8 rounded-lg -mt-7">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
