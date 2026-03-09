import LightRays from "../components/LightRays";
import ProfileCard from "../components/ProfileCard";
import Orb from "../components/Orb";
import avatar from "../assets/bayu.jpg";

export default function Home() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background 1 - LightRays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <LightRays raysColor="#ffffff" />
      </div>

      {/* Background 2 - Orb */}
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

      {/* Content - Card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "120px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1 style={{ color: "white", fontSize: "40px", margin: 0 }}>
            My Portfolio
          </h1>

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
        </div>
      </div>
    </section>
  );
}
