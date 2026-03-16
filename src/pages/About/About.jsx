import ChromaGrid from "../../components/about/ChromeGrid";
import ShinyText from "../../components/ShinyText";
import PillNav from "../../components/navbar/PilNav";
import Mnav from "../../components/mnavbar/Mnav";

import rama from "../../assets/rama.jpg";


import "./about.css";

export default function About() {
  const items = [
    {
      image: rama,
      title: "bayu ramadhan",
      subtitle: "(rama)",
      handle: "@4bayuramadhan",
      borderColor: "#8FD3E8",
      gradient: "linear-gradient(145deg, #8FD3E8, #000)",
      url: "https://github.com/4bayuramram",
    },
  ];

  return (
    <section className="about-section bg-gray-800 flex justify-center">
      {/* Navbar */}
      <div className="fixed top-6 right-[330px] z-50 scale-100">
        <PillNav
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/abouttech" },
            { label: "portofolio", href: "/portofolio" },
          ]}
          activeHref="/abouttech"
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

      <div className="about-container bg-gray-800 w-[1200px] h-[600px] relative mt-14">
        {/* Judul */}
        <div className="about-title absolute left-12 top-[20%] flex items-center gap-4">
          <h1 className="text-white whitespace-nowrap text-3xl font-semibold p-2">
            About Me
          </h1>
          <div className="w-[200px] h-[2px] bg-[#b5b5b5]"></div>
        </div>

        {/* Text */}
        <div className="about-text absolute left-20 top-[30%] w-[720px] p-4 z-10 flex flex-col justify-start">
          <p className="mb-4">
            <ShinyText
              text="Hi everyone! My name is bayu ramadhan as a web developer from Cirebon, West Java. I have 1 year of experience in Front-End web development. I really enjoy what I do right now, in my opinion, creating programs is not just a job, but also an art that has aesthetic value."
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={100}
              direction="left"
              className="custom-size-3"
            />
          </p>

          <p className="mb-4">
            <ShinyText
              text="My job is to build your website to be functional and user-friendly yet still attractive. In addition, I provide a personal touch to your product and ensure that the website catches attention and is easy to use."
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={100}
              direction="left"
              className="custom-size-3"
            />
          </p>
        </div>

        {/* Card */}
        <div
          className="about-card"
          style={{
            position: "absolute",
            top: "65%",
            right: "50px",
            transform: "translateY(-50%)",
            width: "320px",
            zIndex: 1,
          }}
        >
          <ChromaGrid
            items={items}
            className={items.length === 1 ? "one-card" : ""}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
}
