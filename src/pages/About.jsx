import ShinyText from "../components/ShinyText";

export default function About() {
  return (
    <section className="flex justify-center mt-20 bg-[#ffff] min-h-screen">
      <div className="border-2 border-red-500 bg-[#1e1e1f] w-[1200px] h-[600px] relative">
        {/* container text */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 w-[350px] border-2 border-blue-500 p-4">
          <ShinyText
            text="Hi everyone! My name is "
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={100}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </div>
      </div>
    </section>
  );
}
