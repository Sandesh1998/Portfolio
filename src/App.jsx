// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Sandesh Poudel</h6>
        <p>Sandesh © All CopyRights Reserved 2023 </p>
      </footer>
    </div>
  );
};

export default App;
