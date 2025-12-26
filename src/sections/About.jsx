import GlassButton from "../components/GlassButton";
import { IoIosCode } from "react-icons/io";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-section">
      <div className="max-w-layout mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 ">
          <div className="space-y-6">
            <div className="tmponhover">
              <div
                className="relative overflow-hidden rounded-2xl p-6 text-center
                bg-gradient-to-br from-[#0b2230] via-[#07151e] to-[#040b10]
                border border-[#13b4fd]/30"
              >
                <div className="tmp-light-1 light-top-left-1" />
                <img src="/about.jpg" className="w-full h-[500px] object-cover"/>
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary uppercase text-sm tracking-widest">
              About Me
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white leading-tight">
              From Idea to Interface
            </h2>

            <p className="mt-5 text-gray-400 max-w-xl">
             I’m Aman Kumar, a creative designer and front-end developer shaping meaningful digital experiences. I build visually striking, user-centric products by blending UI/UX aesthetics with clean, responsive development. From pixel-perfect interfaces to smooth interactions, I focus on visual storytelling, interaction design, and front-end craftsmanship.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="tmponhover">
                <div
                  className="relative overflow-hidden rounded-xl p-6
                  bg-gradient-to-br from-[#0b2230] via-[#07151e] to-[#040b10]
                  border border-[#13b4fd]/25"
                >
                  <div className="tmp-light light-top-left" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full border flex items-center justify-center">
                      <IoIosCode size={30} className="text-cyan-400 text-xl" />
                    </div>
                    <h4 className="mt-4 text-white text-xl font-semibold">
                      Web Development
                    </h4>
                    <p className="mt-2 text-sm text-gray-400">
                      Delivering SEO-friendly & performance-optimized web
                      solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tmponhover">
                <div
                  className="relative overflow-hidden rounded-xl p-6
                  bg-gradient-to-br from-[#0b2230] via-[#07151e] to-[#040b10]
                  border border-[#13b4fd]/25"
                >
                  <div className="tmp-light light-top-left" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full border flex items-center justify-center">
                      <FaReact size={30} className="text-cyan-400 text-xl" />
                    </div>
                    <h4 className="mt-4 text-white text-xl font-semibold">
                      Frontend & Full-Stack
                    </h4>
                    <p className="mt-2 text-sm text-gray-400">
                      Each project reflects my focus on clean architecture,
                      scalability, and fast-loading user interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;