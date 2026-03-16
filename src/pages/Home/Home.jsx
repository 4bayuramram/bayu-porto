import "./Home.css";
import LightRays from "../../components/LightRays";
import ProfileCard from "../../components/ProfileCard";
import Orb from "../../components/Orb";
import SplitText from "../../components/SplitText";
import ShinyText from "../../components/ShinyText";
import PillNav from "../../components/navbar/PilNav";

import avatar from "../../assets/bayu.jpg";
import Mnav from "../../components/mnavbar/Mnav";


export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="home-container min-h-screen">
      {/* Navbar */}
      <div className="absolute top-6 right-[330px] z-50 scale-100">
        <PillNav
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/abouttech" },
            { label: "portofolio", href: "/portofolio" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#1f2937"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          theme="dark"
          initialLoadAnimation={false}
        />
      </div>
      {/* Mobile Navbar */}
      <Mnav />

      {/* Background LightRays */}
      <div className="bg-lightrays">
        <LightRays raysColor="#ffffff" />
      </div>

      {/* Background Orb */}
      <div className="bg-orb mt-20">
        <div className="orb-size">
          <Orb
            hoverIntensity={2}
            rotateOnHover
            hue={0}
            forceHoverState={false}
            backgroundColor="transparent"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="home-content ">
        <div className="home-flex">
          <div className="profile-card-wrapper mt-10">
            <ProfileCard
              name="bayu ramadhan"
              title="web dev"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl={avatar}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => console.log("Contact clicked")}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>

          <div className="home-text">
            <SplitText
              text="Hey Everyone..."
              className="text-6xl font-bold hero-title"
              delay={60}
              duration={1.2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
              showCallback
            />

            <ShinyText
              text="I’m passionate about building modern and user-focused websites."
              speed={1.5}
              delay={0}
              color="#b5b5b9"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              style={{ fontSize: "28px", fontWeight: "500" }}
              className="custom-size-2"
            />

            <p className="home-desc">Welcome, let’s build something great.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
