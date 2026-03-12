import ChromaGrid from "../components/about/ChromeGrid";
import ShinyText from "../components/ShinyText";
import rama from "../assets/rama.jpg";

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
    <section className="bg-gray-800 flex justify-center">
      {/* add border-2 border-white whitespace for visual debugging */}
      <div className=" whitespace bg-gray-800  w-[1200px] h-[600px] relative mt-14">
        {/* Judul About Me */}
        <div className="absolute left-12 top-[20%] flex items-center gap-4">
          {/* add border-2 border-[#b5b5b5] for visual debugging */}
          <h1 className="text-white whitespace-nowrap text-3xl font-semibold  p-2">
            About Me
          </h1>

          <div className="w-[200px] h-[2px] bg-[#b5b5b5]"></div>
        </div>

        {/* Container text */}
        {/* add border-2 border-white whitespace for visual debugging */}
        <div className="absolute  left-20 top-[30%] w-[720px]  p-4 z-10 flex flex-col justify-start">
          <p className="mb-4">
            <ShinyText
              text="Hi everyone! My name is bayu ramadhan as a web developer from Cirebon, West Java. I have 1 year of experience in Front-End web development. I really enjoy what I do right now, in my opinion, creating programs is not just a job, but also an art that has aesthetic value."
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="text-white whitespace-nowrap"
              spread={100}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="custom-size-3"
            />
          </p>

          <p className="mb-4">
            <ShinyText
              text="My job is to build your website to be functional and user-friendly yet still attractive. In addition, I provide a personal touch to your product and ensure that the website catches attention and is easy to use. My goal is to convey your message and identity in the most creative way. If you are interested in hiring me, please contact the listed contact."
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={100}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="custom-size-3"
            />
          </p>
        </div>

        {/* ChromaGrid component with one card */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "50px",
            transform: "translateY(-50%)",
            width: "320px", // Width of the card
            height: "500px", // Height of the card
            zIndex: 1, // Ensure this is behind the text
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
