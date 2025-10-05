
import { useEffect } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 600,
            easing: "ease-out-cubic",
      once: true,
      offset: 120
     });
  }, []);

  return (
    <div className="">
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Nav />
    </div>
  );
};

export default App;
