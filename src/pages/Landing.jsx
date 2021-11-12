import React, { Suspense, useEffect, useRef, useContext } from "react";
import arrowDown from "../assets/arrow-down.svg";
import { Canvas } from "@react-three/fiber";
import Model from "../Model";
import "./landing.css";
import { gsap } from "gsap";
import { MouseContext } from "../context/mouse-context";
import logo from "../logo.svg";

const Landing = (props) => {
  const { scrollTo, projRef, reference } = props;
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const model = useRef();
  const logoRef = useRef();
  const fed = useRef();
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
      className="asection h-full w-full bg-primary px-32"
    >
      <img
        ref={logoRef}
        src={logo}
        className="w-20 h-20 absolute top-10 left-32"
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
          <div className="font-header xl:text-6xl lg:text-4xl text-xl mb-5 ">
            <h1 className="hidetext leading-tight text-secondary">
              <span>Hello,</span>
            </h1>
            <h1 className="hidetext leading-tight text-secondary">
              <span>
                My name is{" "}
                {/* <span className=" glitch text-tertiary">
                  <a
                    href="https://www.linkedin.com/in/francis-lee-889377191/"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                  >
                    Francis Lee
                  </a>
                </span> */}
                <span
                  className="glitch text-tertiary"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <a
                    href="https://www.linkedin.com/in/francis-lee-889377191/"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                  >
                    <span aria-hidden="true">Francis Lee</span>
                    Francis Lee
                    <span aria-hidden="true">Francis Lee</span>
                  </a>
                </span>
              </span>
            </h1>
            <h1 className="hidetext leading-tight text-secondary">
              <span>Nice to meet you</span>
            </h1>
          </div>

          <div className="hidetext flex items-center">
            <div ref={fedLine} className="h-1 w-4/12 mr-5 bg-secondary" />
            <p className="text-2xl text-secondary font-body">
              Front End Developer
            </p>
          </div>
        </section>

        {/* <section className="scroll-to-action h-full flex flex-col items-center">
          <div
            onMouseEnter={() => {
              gsap.to(".arrowBtn", {
                rotate: 360,
                scale: 1.2,
                duration: 1,
                ease: "power4",
              });
              cursorChangeHandler("hovered");
            }}
            onMouseLeave={() => {
              gsap.to(".arrowBtn", {
                rotate: -360,
                scale: 1,
                duration: 1,
                ease: "power4",
              });
              cursorChangeHandler("");
            }}
            onClick={() => scrollTo(projRef)}
            className="h-32 w-32 p-4 mt-4"
          >
            <img
              src={arrowDown}
              className="arrowBtn m-auto h-full w-full"
              alt="logo"
            />
          </div>
        </section> */}
      </div>
    </section>
  );
};

export default Landing;
