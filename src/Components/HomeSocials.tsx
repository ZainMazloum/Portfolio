
import { FaFacebookF, FaGithub, FaCode , FaInstagram, FaLinkedin } from "react-icons/fa";

const socials = [
  { href: "https://www.facebook.com/zein.mazlom", label: "Facebook", icon: <FaFacebookF /> },
  { href: "https://github.com/ZainMazloum", label: "GitHub", icon: <FaGithub /> },
  { href: "#", label: "Portfolio", icon: <FaCode /> },
  { href: "https://www.instagram.com/zeinmazlom01/", label: "Portfolio", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/in/zane-mazlom-522512359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "Portfolio", icon: <FaLinkedin /> },
];

const HomeSocials: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <nav aria-label="Home socials" className={`flex flex-row items-center justify-center gap-4 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          aria-label={s.label}
          className="w-10 h-10 flex items-center justify-center rounded-md bg-white/6 hover:bg-white/12 transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span className="text-white text-lg">{s.icon}</span>
        </a>
      ))}
    </nav>
  );
};

export default HomeSocials;
