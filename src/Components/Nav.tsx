// src/Components/Nav.tsx
import { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { BsPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { LuSquareCode } from "react-icons/lu";
import { GrContact } from "react-icons/gr";

// Type for nav item
interface NavItem {
  link: string;
  label: React.ReactNode;
}

const NavItems: NavItem[] = [
  { link: "#", label: <HiHome /> },
  { link: "#about", label: <BsPersonFill /> },
  { link: "#services", label: <MdHomeRepairService /> },
  { link: "#projects", label: <LuSquareCode /> },
  { link: "#contact", label: <GrContact /> },
];

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex gap-4 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        {NavItems.map((element, index) => (
          <li key={index}>
            <a
              href={element.link}
              onClick={() => setActiveIndex(index)}
              className={`text-xl p-1 rounded-full transition-all duration-200 inline-flex items-center justify-center ${
                activeIndex === index
                  ? "text-indigo-500"
                  : "text-gray-400 hover:text-indigo-400"
              }`}
              aria-label={`Go to ${element.link.replace("#", "") || "home"}`}
            >
              {element.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
