import { useEffect, useRef } from "react";
import TubesCursor from "threejs-components/build/cursors/tubes1.min.js";
import "../assets/styles.css";
import useTypewriter from "../hooks/useTypewriter";
import GlassButton from "../components/GlassButton";
import VerticalBeams from "../components/VerticalBeams";

const Hero = () => {
  const canvasRef = useRef(null);
  const appRef = useRef(null);
  const animatedWord = useTypewriter(
    ["Frontend Developer", "Web Developer", "Creative Designer"],
    90,
    1400
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    appRef.current = TubesCursor(canvasRef.current, {
      tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
          intensity: 200,
          colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
        },
      },
    });

    const handleClick = () => {
      appRef.current.tubes.setColors(randomColors(3));
      appRef.current.tubes.setLightsColors(randomColors(4));
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
      appRef.current?.dispose?.();
    };
  }, []);

  return (
    <section id="home" className="hero-app relative overflow-hidden">
      <div className="hero-bg" />
      <VerticalBeams />
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content relative z-10">
        <span className="text-white text-xl gap-6">HELLO</span>

        <h1 className="text-white text-4xl md:text-7xl font-bold text-center leading-tight">
          I’m Aman Kumar <br />A{" "}
          <span className="text-primary inline-flex items-center">
            {animatedWord}
            <span
              className="
              ml-1
              inline-block
              w-[2px]
              h-[1em]
              bg-primary
              animate-blink
            "
            />
          </span>
        </h1>

        <p className="my-4 max-w-3xl text-white text-center text-md">
          I design and develop high-performance, SEO-optimized websites and web
          applications using React.js with modern JavaScript. Fast and scalable
          solutions for eCommerce and business platforms are my specialty, with
          attention to clean code, site performance, and conversion-driven user
          experiences across WordPress, Shopify, and custom builds.
        </p>

        <GlassButton>View Portfolio</GlassButton>
      </div>
    </section>
  );
}

function randomColors(count) {
  return Array.from(
    { length: count },
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
  );
}

export default Hero;