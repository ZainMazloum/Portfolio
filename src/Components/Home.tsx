
import HomeSocials from "./HomeSocials";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-3xl w-full">
        {/* Intro text */}
        <h4
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-offset="80"
          className="text-lg font-light text-gray-300"
        >
          Hello I'm
        </h4>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
          data-aos-offset="80"
          className="text-4xl md:text-5xl font-bold tracking-tight mt-2"
        >
          Zain Mazloum
        </h1>

        <h4
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
          data-aos-offset="80"
          className="text-xl text-indigo-400 mt-2"
        >
          Frontend Web Developer
        </h4>

        {/* Call-to-action */}
        <div className="mt-6 flex justify-center">
          <a
            href="#contact"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="700"
            data-aos-offset="60"
            className="flex items-center justify-center px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Let's Talk
          </a>
        </div>

        {/* Image */}
        <div
          className="mt-10 flex justify-center"
          data-aos="zoom-in-right"
          data-aos-delay="500"
          data-aos-duration="800"
          data-aos-offset="100"
        >
          <img
            src= "/MyPhoto2.png"
            alt="my profile"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-indigo-600 transition-transform transform hover:scale-105"
          />
        </div>

        {/* Socials: horizontal row */}
        <div
          className="mt-6"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="600"
          data-aos-offset="60"
        >
          <HomeSocials />
        </div>
      </div>
    </section>
  );
};

export default Home;
