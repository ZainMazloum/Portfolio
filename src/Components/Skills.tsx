
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

// Type for Skill
interface Skill {
  id: number;
  icon: React.ReactNode;
  title: string;
  disc: string;
  delay: string;
  dataAos: string;
}

// Data
const SkillsData: Skill[] = [
  { id: 1, icon: <FaHtml5 className="text-orange-500" />, title: "HTML", disc: "Markup Language", delay: "100", dataAos: "fade-up" },
  { id: 2, icon: <FaCss3Alt className="text-blue-500" />, title: "CSS", disc: "User Interface", delay: "300", dataAos: "fade-up" },
  { id: 3, icon: <FaJs className="text-yellow-400" />, title: "JavaScript", disc: "Interaction", delay: "500", dataAos: "fade-up" },
  { id: 4, icon: <FaReact className="text-cyan-400" />, title: "React", disc: "Framework", delay: "700", dataAos: "fade-up" },
  { id: 5, icon: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind", disc: "UI Library", delay: "900", dataAos: "fade-up" },
  { id: 7, icon: <SiTypescript className="text-blue-400" />, title: "TypeScript", disc: "Safety", delay: "1300", dataAos: "fade-up" },
  { id: 8, icon: <FaGithub className="text-gray-300" />, title: "Git & GitHub", disc: "Version Control", delay: "1500", dataAos: "fade-up" },
  { id: 9, icon: <SiNextdotjs className="text-white" />, title: "Next.js", disc: "⌛", delay: "1700", dataAos: "fade-up" },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-5xl w-full text-center mb-12">
        <h5
          className="text-indigo-400 uppercase tracking-wide text-sm mb-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          What Skills I Have
        </h5>
        <h2
          className="text-3xl md:text-4xl font-bold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          My Experience
        </h2>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {SkillsData.map(({ id, icon, title, disc, delay, dataAos }) => (
          <article
            key={id}
            data-aos={dataAos}
            data-aos-delay={delay}
            className="bg-gray-800/80 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-5xl">
              {icon}
            </div>
            <h4 className="font-semibold text-lg">{title}</h4>
            <p className="text-gray-400 text-sm mt-1">{disc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;