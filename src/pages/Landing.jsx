import React, { Suspense, useEffect, useRef } from "react";
import arrowDown from "../assets/arrow-down.svg";
import { Canvas } from "@react-three/fiber";
import Model from "../Model";
import "./landing.css";
import { gsap } from "gsap";
import Ticker from "react-ticker";

const Landing = (props) => {
  const model = useRef();

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
      ".scroll-to-action",
      {
        opacity: 0,
        duration: 0.8,
      },
      "+=0.5"
    );
    tl.from(
      ".arrowBtn",
      {
        rotate: 720,
        duration: 1,
        ease: "power4",
      },
      "-=0.7"
    );
  }, []);

  return (
    <section
      ref={props.reference}
      className="asection h-full w-full bg-gradient-radial from-primary to-primaryGradient"
    >
      <div className="pb-10 w-full h-full grid md:grid-rows-landing grid-rows-3 gap-8 justify-items-center items-center">
        <div ref={model} className="h-full">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 4]} intensity={1} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </div>
        {/* <section className="flex-grow-2 w-full opacity-10">
          <Ticker speed={10}>
            {() => (
              <h1 className="font-body text-6xl text-secondary">
                <span>You are the architect of your own future. </span>
              </h1>
            )}
          </Ticker>
          <Ticker speed={20}>
            {() => (
              <h1 className="font-body text-6xl text-secondary">
                <span>You are the architect of your own future. </span>
              </h1>
            )}
          </Ticker>
          <Ticker speed={15}>
            {() => (
              <h1 className="font-body text-6xl text-secondary">
                <span>You are the architect of your own future. </span>
              </h1>
            )}
          </Ticker>
        </section> */}

        <section className="w-full h-full font-header text-center xl:text-6xl lg:text-4xl text-xl">
          <h1 className="hidetext leading-tight">
            <span>Hello,</span>
          </h1>
          <h1 className="hidetext leading-tight">
            <span>
              My name is{" "}
              <span className=" glitch text-secondary">
                <a
                  href="https://www.linkedin.com/in/francis-lee-889377191/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Francis Lee
                </a>
              </span>
            </span>
          </h1>
          <h1 className="hidetext leading-tight">
            <span>Nice to meet you</span>
          </h1>
        </section>

        <section className="scroll-to-action h-full flex flex-col items-center">
          <p className="text-center text-2xl text-secondary font-body">
            Front End Developer
          </p>
          <div className="h-32 w-32 p-4 mt-4">
            <img
              src={arrowDown}
              className="arrowBtn m-auto h-full w-full"
              alt="logo"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Landing;
