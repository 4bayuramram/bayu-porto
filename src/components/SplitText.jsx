import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = "center",
  tag = "p",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const split = new GSAPSplitText(el, {
      type: splitType,
      charsClass: "split-char",
      wordsClass: "split-word",
      linesClass: "split-line",
    });

    const targets = split.chars;

    gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        repeat: -1,
        repeatDelay: 2,
      }
    );

    return () => {
      split.revert();
    };
  }, [text]);

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      style={{
        textAlign,
        display: "inline-block",
        overflow: "hidden",
      }}
      className={className}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
