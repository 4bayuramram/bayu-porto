import LightRays from "../components/LightRays";
import ProfileCard from "../components/ProfileCard";
import Orb from "../components/Orb";
import SplitText from "../components/SplitText";
import ShinyText from "../components/ShinyText";
import avatar from "../assets/bayu.jpg";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background LightRays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <LightRays raysColor="#ffffff" />
      </div>

      {/* Background Orb */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "700px", height: "700px" }}>
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
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "120px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "120px",
          }}
        >
          {/* LEFT : CARD */}
          <ProfileCard
            name="bayu ramadhan"
            title="web dev"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl={avatar}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/assets/demo/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />

          {/* RIGHT : TEXT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              maxWidth: "500px",
              marginLeft: "120px",
              marginTop: "60px",
              gap: "20px",
            }}
          >
            <SplitText
              text="Hey Everyone..."
              className="text-6xl font-bold"
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

            <p style={{ marginTop: "16px", fontSize: "18px", color: "white" }}>
              Welcome, let’s build something great.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
