import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".asection");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        ease: "none",
        start: "top top",
        pin: true,
        scrub: 1,
        pinSpacing: false,
        snap: 1 / (sections.length - 1),
      });
    });
  });

  return (
    <div className="h-screen bg-gradient-radial from-primary to-primaryGradient">
      <Header />
      {/* <div className="rounded-full h-5 w-5 bg-secondary"></div> */}
      <Landing />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
