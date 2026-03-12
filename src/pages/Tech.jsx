import { useState, useEffect } from "react";
import GooeyNav from "../components/about/Gooeynav";

import Frameworks from "../container/tech/Frameworks";
import Languages from "../container/tech/Languages";
import ToolsAndDatabase from "@/container/tech/ToolsAndDatabase";


export default function Tech() {
  const [active, setActive] = useState(0);

  const items = [
    { label: "Languages", href: "#languages" },
    { label: "Frameworks / liberaries ", href: "#frameworks" },
    { label: "Tools and DataBase", href: "#Tools" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === "#languages") setActive(0);
      if (hash === "#frameworks") setActive(1);
      if (hash === "#Tools") setActive(2);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
    if (active === 0) return <Languages/>;
    if (active === 1) return <Frameworks />;
    if (active === 2) return <ToolsAndDatabase />;
  };

  return (
    <section className="bg-gray-800 pt-24 pb-20">
      <div className="max-w-6xl mx-auto bg-gray-400 p-10 rounded-xl overflow-visible">
        {/* TITLE */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            Skills
          </h2>

          <div className="flex-1 h-[2px] bg-gray-500"></div>
        </div>

        {/* NAV */}
        <div className="relative flex items-center mb-3 overflow-visible isolation-isolate">
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

        {/* CONTAINER */}
        <div className="bg-gray-300 p-8 rounded-lg">{renderContent()}</div>
      </div>
    </section>
  );
}
