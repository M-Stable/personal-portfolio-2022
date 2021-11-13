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
import Cursor from "./components/Cursor";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const sections = gsap.utils.toArray(".asection");

    // sections.forEach((section) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     ease: "back",
    //     start: "top top",
    //     pin: true,
    //     scrub: 1,
    //     pinSpacing: false,
    //     snap: 1 / (sections.length - 1),
    //   });
    // });

    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });

    setUpCursor1(gsap);
    setUpCursor2(gsap);
  });

  const projectRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();
  const landingRef = useRef();

  const scrollTo = (reference) => {
    reference.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <div className="h-screen ">
        <Cursor />
        <progress
          className="fixed top-0 left-0 w-full z-30 transform"
          max="100"
          value="0"
        ></progress>
        <Header
          projRef={projectRef}
          expRef={experienceRef}
          contactRef={contactRef}
          landingRef={landingRef}
          scrollTo={scrollTo}
        />
        <Landing
          reference={landingRef}
          projRef={projectRef}
          scrollTo={scrollTo}
        />
        {/* <Projects reference={projectRef} />
        <Experience reference={experienceRef} /> */}
        <Contact reference={contactRef} />
      </div>
    </Suspense>
  );
}

export default App;
