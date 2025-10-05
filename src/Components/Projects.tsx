
interface Project {
  id: number;
  image: string;
  title:string;
  github:string;
  demo:string;
  dataAos:string;
}
 const portfolioData : Project[] = [
    {
      id: 1,
      image: "/P1.jpg",
      title: 'Tic Tac Toe',
      github: 'https://github.com/ZainMazloum/TicTacToeReact',
      demo: '',
      dataAos: "fade-up"
    },
    {
      id: 2,
      image: "/P2.jpg",
      title: 'Currency Converter',
      github: 'https://github.com/ZainMazloum/Currency-Converter/tree/main/currencyConverter',
      demo: '',
      dataAos: "fade-up"
    },
    {
      id: 3,
      image: "/P3.jpg",
      title: 'Weather App',
      github: 'https://github.com/ZainMazloum/WeatherApp',
      demo: '',
      dataAos: "fade-up"
    },
    {
      id: 4,
      image: "/P4.jpg",
      title: 'Gym App',
      github: 'https://github.com/ZainMazloum/Gym-App/tree/main/GymApp',
      demo: '',
      dataAos: "fade-up"
    },
    {
      id: 5,
      image: "/P5.jpg",
      title: 'Space Project',
      github: 'https://github.com/ZainMazloum/nasa-project',
      demo: '',
      dataAos: "fade-up"
    },
  ];

const Projects = () => {
  return (
<section
  id="projects"
  className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
>
  {/* Top Section */}
  <div className="text-center mb-12">
    <h5
      className="text-indigo-400 uppercase tracking-wide text-sm mb-2"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      My Recent Work
    </h5>
    <h2
      className="text-3xl md:text-4xl font-bold"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Portfolio
    </h2>
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
    {portfolioData.map(({ id, image, title, github, demo, dataAos }) => (
      <article
        key={id}
        data-aos={dataAos}
        className="bg-gray-800/80 rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300"
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition duration-300"
            >
              Github
            </a>
            <a
              href={demo}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-300"
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>
  )
}

export default Projects