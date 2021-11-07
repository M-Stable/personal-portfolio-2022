import React, { useEffect, Suspense, useRef } from "react";
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

    // const sections = gsap.utils.toArray(".asection");

    // sections.forEach((section) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     ease: "none",
    //     start: "top top",
    //     pin: true,
    //     scrub: 1,
    //     pinSpacing: false,
    //     snap: 1 / (sections.length - 1),
    //   });
    // });

    setUpCursor1(gsap);
    setUpCursor2(gsap);
  });

  const projectRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <div className="h-screen ">
        <div className="outerball rounded-full h-6 w-6 bg-tertiary opacity-50 fixed z-50 pointer-events-none"></div>
        <div className="innerball rounded-full h-1 w-1 bg-white fixed z-50 pointer-events-none"></div>

        <Landing
          projRef={projectRef}
          expRef={experienceRef}
          contactRef={contactRef}
        />
        <Projects reference={projectRef} />
        <Experience reference={experienceRef} />
        <Contact reference={contactRef} />
      </div>
    </Suspense>
  );
}

export default App;
