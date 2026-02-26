const EducationExperience = () => {
  return (
    <section id="education-experience" className="py-section z-4">
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
              <h4 className="text-[#7dd3fc] text-xl font-semibold">
                Bachelor of Computer Applications (BCA)<br />
                <span className="text-[12px] text-white">SCVB Govt College Palampur(HPU)</span>
              </h4>

              <p className="mt-2 text-xl font-bold text-white">2020-2023</p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Built strong foundations in programming, computer science fundamentals, databases, and web technologies, with a focus on problem-solving and software development principles.
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
              <h4 className="text-white text-xl font-semibold">Full-Stack Web Development Program<br />
                <span className="text-[12px] text-white">Oxford Institute</span>
</h4>

              <p className="mt-2 text-xl font-bold text-white">2023-2024</p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Completed an intensive full-stack development course covering React.js, JavaScript, Node.js, HTML, CSS, Tailwind CSS, Redux, REST APIs, and version control.
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
                Web Developer (2 Years)
              </h4>
              <p className="text-sm text-gray-400 mt-1">Technospike IT Sol. Pvt. Lmt.</p>
              <ul className="mt-4 text-gray-300 text-[14px] list-disc ">
                <li>Developed and maintained responsive, high-performance websites and web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS.</li>
                 <li>Improved site performance, SEO, and accessibility, ensuring fast load times and optimal user experience.</li>
                  <li>Built and customized eCommerce solutions using WordPress and Shopify, focusing on scalability and clean architecture.</li>
              </ul>
            </div>

            <div className="hover-box">
              <p className="text-primary text-md font-semibold">experience</p>
              <h4 className="text-white text-2xl font-semibold mt-1">
                Full Stack Web Developer (6 Month)
              </h4>
              <p className="text-sm text-gray-400 mt-1">Oxford Institute</p>
              <ul className="mt-4 text-gray-300 text-[14px] list-disc ">
                <li>Assisted in developing frontend components and pages using React.js, HTML, CSS, and JavaScript.</li>
                 <li>Worked with Git, APIs, and responsive design, gaining hands-on experience in real-world projects.</li>
                  <li>Learned and applied clean coding practices, debugging, and performance optimization techniques.</li>
              </ul>
            </div>
          </div>
          <img
            src="/react.jpg"
            className="w-full h-full object-contain rounded-xl"
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