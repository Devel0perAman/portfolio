const PortfolioModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="relative max-w-4xl w-full mx-4 bg-[#07151e] rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>

            <p className="mt-4 text-gray-400">{project.description}</p>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 text-white font-medium underline"
            >
              Visit Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
