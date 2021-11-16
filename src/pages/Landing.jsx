import React, { useEffect, useRef, useContext } from "react";
import "./landing.css";
import { gsap } from "gsap";
import { MouseContext } from "../context/mouse-context";
import logo from "../logo.svg";

const Landing = ({ reference }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const model = useRef();
  const logoRef = useRef();
  const fedLine = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(model.current, {
      x: "100%",
      opacity: 0,
      duration: 2,
      ease: "expo",
    });
    tl.from(
      ".hidetext",
      {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        stagger: 1,
      },
      "-=1"
    );
    tl.from(
      fedLine.current,
      {
        width: 0,
        duration: 0.8,
      },
      "-=.5"
    );
    tl.from(
      logoRef.current,
      {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4",
      },
      "-=.5"
    );
  }, []);
  return (
    <section
      ref={reference}
      className="asection h-screen w-full bg-primary px-10 md:px-32"
    >
      <img
        ref={logoRef}
        src={logo}
        className="w-14 md:w-20 absolute top-10 left-10 md:left-32"
        alt="logo"
      />
      {/* <div className="absolute w-1/3 h-full right-0 z-50">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 4]} intensity={1} />
          <Model />
        </Canvas>
      </div> */}
      <div className="w-full h-full flex justify-center items-center">
        <section className="w-full ">
          <div className="font-header xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-5 ">
            <h1 className="hidetext leading-tight text-tertiary">
              <span>Hello,</span>
            </h1>
            <h1 className="hidetext leading-tight text-secondary">
              <span>
                My name is{" "}
                <a
                  href="https://www.linkedin.com/in/francis-lee-889377191/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <span className="whitespace-nowrap">Francis Lee</span>
                </a>
              </span>
            </h1>
            <h1 className="hidetext leading-tight text-secondary">
              <span>Nice to meet you</span>
            </h1>
          </div>

          <div className="hidetext flex items-center">
            <div ref={fedLine} className="h-1 w-4/12 mr-5 bg-secondary" />
            <p className="text-base lg:text-2xl text-secondary font-body whitespace-nowrap">
              Front End Developer
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Landing;
