import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed bottom-6 right-6 z-50
            w-12 h-12 rounded-full
            bg-[#13b4fd]
            text-white text-xl
            flex items-center justify-center
            shadow-[0_0_25px_rgba(19,180,253,0.45)]
            transition-all duration-300
            hover:scale-105
          "
        >
          ↑
        </button>
      )}
      <footer className="border-t border-white/10">
        <div className="max-w-layout mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 . All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
