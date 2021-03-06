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
import { BrowserView } from "react-device-detect";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });

    setUpCursor1(gsap);
    setUpCursor2(gsap);

    return () => {
      animation.kill();
    };
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
        <BrowserView>
          <Cursor />
        </BrowserView>
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
        <Projects reference={projectRef} />
        <Experience reference={experienceRef} />
        <Contact reference={contactRef} />
      </div>
    </Suspense>
  );
}

export default App;
