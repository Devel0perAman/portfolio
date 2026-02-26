import { useRef } from "react";
import GlassButton from "../components/GlassButton";

const Resume = () => {
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      glowRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  return (
    <section
      id="resume"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative overflow-hidden
        w-full h-[250px]
        bg-gradient-to-r from-[#050d13] via-[#07151e] to-[#050d13]
        border-y border-white/10 z-4
      "
    >
      <div
        ref={glowRef}
        className="
          pointer-events-none
          absolute top-0 left-0
          w-[100px] h-[100px]
          rounded-full
          bg-[#13b4fd]
          blur-[100px]
          opacity-0
          transition-opacity duration-300
        "
      />

      <div className="relative z-10 max-w-layout mx-auto px-4 h-full flex items-center">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white">Resume</h2>
            <p className="mt-3 text-gray-400">
              Download my professional resume to explore my experience,
              technical expertise, and project background in detail.
            </p>
          </div>

          <div>
            <a href="/AmanResume.pdf" target="_blank" rel="noopener noreferrer"><GlassButton>Download Resume</GlassButton></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;