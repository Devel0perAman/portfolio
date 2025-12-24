import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import PortfolioModal from "../components/PortfolioModal";

const tabs = ["All", "Frontend", "Full Stack", "Ecommerce"];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTab === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-section">
      <div className="max-w-layout mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary uppercase text-sm tracking-widest">
            Latest Portfolio
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Transforming Ideas into Exceptional
          </h2>
          <p className="mt-4 text-gray-400">
            I build modern, scalable, and high-performance web applications
            using the latest frontend and backend technologies.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2 rounded-full text-md transition
                ${
                  activeTab === tab
                    ? "bg-primary text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="relative rounded-2xl overflow-hidden
                bg-gradient-to-br from-[#0b2230] via-[#07151e] to-[#040b10]
                border border-[#13b4fd]/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(project)}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-white
                    px-6 py-2 rounded-full border border-white/20
                    hover:bg-white/10 transition"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <PortfolioModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Portfolio;