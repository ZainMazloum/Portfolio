
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-5xl w-full text-center mb-12">
        <h5
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-indigo-400 uppercase tracking-wide text-sm mb-2"
        >
          What I Offer
        </h5>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl md:text-4xl font-bold"
        >
          Services
        </h2>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <article
          data-aos="flip-right"
          data-aos-delay="250"
          className="bg-gray-800/80 rounded-lg p-6 flex flex-col gap-4 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-600 text-white text-2xl">
            <MdDesignServices />
          </div>

          <div className="mt-2">
            <h3 id="service-design" className="text-lg font-semibold">
              Web Design
            </h3>
            <p className="text-gray-300 mt-2">
              I design attractive, user-friendly interfaces focused on clear
              UX and accessible interactions that meet client needs.
            </p>
          </div>
        </article>


        <article
          data-aos="flip-right"
          data-aos-delay="400"
          className="bg-gray-800/80 rounded-lg p-6 flex flex-col items-start gap-4 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-600 text-white text-2xl">
            <GrDocumentPerformance />
          </div>

          <div className="mt-2">
            <h3 id="service-performance" className="text-lg font-semibold">
              Fast Performance
            </h3>
            <p className="text-gray-300 mt-2">
              I optimize load times and runtime performance using modern
              techniques (code-splitting, efficient assets, caching).
            </p>
          </div>
        </article>


        <article
          data-aos="flip-right"
          data-aos-delay="550"
          className="bg-gray-800/80 rounded-lg p-6 flex flex-col items-start gap-4 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-600 text-white text-2xl">
            <FaCode />
          </div>

          <div className="mt-2">
            <h3 id="service-code" className="text-lg font-semibold">
              Clean Code
            </h3>
            <p className="text-gray-300 mt-2">
              I write maintainable, well-documented code with good patterns and
              testing in mind to keep projects easy to evolve.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
