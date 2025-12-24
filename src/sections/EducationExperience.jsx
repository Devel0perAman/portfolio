const EducationExperience = () => {
  return (
    <section id="education-experience" className="py-section">
      <div className="max-w-layout mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary uppercase text-sm tracking-widest">
            Education & Experience
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Education and Real-World Development Experience
          </h2>
          <p className="mt-4 text-gray-400">
            Combining technical education with hands-on development experience
            to create fast, scalable, and reliable web applications using modern
            web technologies.
          </p>
        </div>
        <div className="max-w-layout mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-10">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="
              rounded-2xl p-8
              bg-gradient-to-br from-[#0b2230] via-[#07151e] to-[#040b10]
              border border-white/10
              transition-all duration-300
              hover:border-[#13b4fd]
              hover:shadow-[0_0_40px_rgba(19,180,253,0.35)]
            "
            >
              <h4 className="text-[#7dd3fc] font-semibold">
                Trainer Marketing
              </h4>

              <p className="mt-2 text-xl font-bold text-white">2005–2009</p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                A personal portfolio is a curated collection of an individual's
                professional work, showcasing their skills, experience. A
                personal portfolio.
              </p>
            </div>

            <div
              className="
              rounded-2xl p-8
              bg-gradient-to-br from-[#0b2230] via-[#07151e] to-[#040b10]
              border border-white/10
              transition-all duration-300
              hover:border-[#13b4fd]
              hover:shadow-[0_0_40px_rgba(19,180,253,0.35)]
            "
            >
              <h4 className="text-white font-semibold">Assistant Director</h4>

              <p className="mt-2 text-xl font-bold text-white">2010–2014</p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Each project here showcases my commitment to excellence and
                adaptability, tailored to meet each client's unique needs.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-12 px-4">
          {/* EXPERIENCE */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Experiences
            </h3>

            <div className="hover-box mb-6">
              <p className="text-primary text-md font-semibold">experience</p>
              <h4 className="text-white text-2xl font-semibold mt-1">
                Soft Tech (2 Years)
              </h4>
              <p className="text-sm text-gray-400 mt-1">UI/UX Designer</p>
              <p className="mt-4 text-gray-300 text-md ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div className="hover-box">
              <p className="text-primary text-md font-semibold">experience</p>
              <h4 className="text-white text-2xl font-semibold mt-1">
                ModernTech (3 Years)
              </h4>
              <p className="text-sm text-gray-400 mt-1">App Developer</p>
              <p className="mt-4 text-gray-300 text-md">
                In this portfolio, you'll find a curated selection of projects
                that highlight my skills in main areas.
              </p>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai_188544-9720.jpg?t=st=1766567952~exp=1766571552~hmac=623bab5d6b1777a5d2ac1b157829b67605b08b9caab72f9fbeb50e7f000d8592&w=1060"
            alt="Experience"
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="flex items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10"></div>
        </div>
      </div>
    </section>
  );
}

export default EducationExperience;