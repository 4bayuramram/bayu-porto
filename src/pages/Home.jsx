import LightRays from "../components/LightRays";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <LightRays />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "40px",
        }}
      >
        My Portfolio
      </div>
    </div>
  );
}
