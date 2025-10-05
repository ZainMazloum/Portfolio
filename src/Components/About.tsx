
import { FaAward, FaFolderOpen, FaTools } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-4xl w-full">
        {/* Section heading */}
        <div className="mb-12">
          <h5
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-indigo-400 uppercase tracking-wide text-sm mb-2"
          >
            Get To Know
          </h5>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl md:text-4xl font-bold"
          >
            About Me
          </h2>
        </div>

        {/* About cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-6 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-indigo-400 text-3xl mb-3 flex items-center justify-center">
              <FaAward />
            </div>
            <h5 className="font-semibold">Experience</h5>
            <p className="text-gray-400">1+ years working</p>
          </div>

          {/* Replaced Clients card with Technologies card */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-6 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-indigo-400 text-3xl mb-3 flex items-center justify-center">
              <FaTools />
            </div>
            <h5 className="font-semibold">Technologies</h5>
            <p className="text-gray-400 mt-2">
             HTML · CSS · Tailwind · TypeScript · React
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="p-6 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-indigo-400 text-3xl mb-3 flex items-center justify-center">
              <FaFolderOpen />
            </div>
            <h5 className="font-semibold">Projects</h5>
            <p className="text-gray-400">20+ Completed</p>
          </div>
        </div>

        {/* About text */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-gray-300 leading-relaxed mb-8"
        >
I'm a student engineer and a Front-End intern. I'm passionate about web development, always looking for ways to improve my skills, and dedicated to building fast, well-designed applications.
        </p>
      </div>
    </section>
  );
}
