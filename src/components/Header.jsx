import { useState } from "react";
import { scrollToSection } from "../utils/scrollTo";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleNavClick = (id) => {
    setActive(id);
    setOpen(false);      
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-layout mx-auto px-4 h-16 flex items-center justify-between">
          
          <div
            onClick={() => handleNavClick("home")}
            className="flex content-center items-center gap-2 text-white text-center font-semibold cursor-pointer"
          >
            <span className="text-primary font-semibold text-3xl">Aman</span>
          </div>

          <nav className="hidden md:flex items-center gap-2 bg-black/40 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-1.5 rounded-full text-sm transition
                  ${
                    active === link.id
                      ? "bg-primary text-black"
                      : "text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-2 text-white/80">
              <a href="https://www.linkedin.com/in/aman1804309"><span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10"><FaLinkedinIn /></span></a>
              <a href="https://github.com/Devel0perAman"><span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10"><FaGithub /></span></a>
            </div>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* OFFCANVAS */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-black
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 text-white">
          <button
            className="self-end text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-lg py-2 border-b border-white/10
                ${
                  active === link.id
                    ? "text-primary"
                    : "text-white"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Header;
