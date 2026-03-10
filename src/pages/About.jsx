import ChromaGrid from "../components/about/ChromeGrid";
import rama from "../assets/rama.jpg";

const items = [
  {
    image: rama,
    title: "bayu ramadhan",
    subtitle: "",
    handle: "@4bayuramadhan",
    borderColor: "#0c2042",
    gradient: "linear-gradient(180deg, #0c2042, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
];

export default function About() {
  return (
    <section className="flex justify-center mt-20 bg-[#22252b] min-h-screen">
      <div className="border-2 border-red-500 bg-black w-[1200px] h-[600px] relative">
        <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[350px] h-[480px]">
          <ChromaGrid
            items={items}
            radius={0}
            damping={0.45}
            fadeOut={0}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
}
