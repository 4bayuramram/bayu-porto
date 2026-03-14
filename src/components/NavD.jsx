import { useLocation } from "react-router-dom";
import GooeyNav from "./about/GooeyNav";

export default function NavD() {
  const { pathname } = useLocation();

  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/abouttech" },
    { label: "Portfolio", href: "/portofolio" },
  ];

  const activeIndex = items.findIndex((i) => pathname === i.href);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        padding: "6px 14px",
        borderRadius: "999px",
        overflow: "visible",

        "--color-1": "#61DAFB",
        "--color-2": "#C0C0C0",
        "--color-3": "#ffffff",
        "--color-4": "#8FD3E8",
      }}
    >
      <GooeyNav
        key={pathname}
        items={items}
        initialActiveIndex={activeIndex === -1 ? 0 : activeIndex}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 4, 1, 2, 3, 4]}
      />
    </div>
  );
}
