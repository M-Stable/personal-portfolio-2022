import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { setUpCursor1, setUpCursor2 } from "./customcursor";

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

    setUpCursor1(gsap);
    setUpCursor2(gsap);
  });

  return (
    <div className="h-screen bg-gradient-radial from-primary to-primaryGradient">
      <div className="outerball rounded-full h-6 w-6 bg-tertiary opacity-50 fixed z-50 pointer-events-none"></div>
      <div className="innerball rounded-full h-1 w-1 bg-white fixed z-50 pointer-events-none"></div>
      <Header />
      <Landing />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
