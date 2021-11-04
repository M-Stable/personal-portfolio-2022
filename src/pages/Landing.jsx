import React, { Suspense, useEffect } from "react";
import arrowDown from "../assets/arrow-down.svg";
import { Canvas } from "@react-three/fiber";
import Model from "../Model";
import "./landing.css";
import { gsap } from "gsap";

const Landing = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      ".hidetext",
      {
        y: "60px",
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      },
      1
    );
  }, []);

  return (
    <>
      <div className="asection h-screen bg-gradient-radial from-primary to-primaryGradient pt-40 px-32 grid grid-rows-landing gap-8 justify-items-center items-center">
        <section className="flex-grow-2 relative w-full h-full">
          <Canvas camera={{ position: [0, 1, 6], fov: 70 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 4]} intensity={1} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </section>

        <section className="w-full h-full font-header text-center xl:text-6xl lg:text-4xl sm:text-2xl">
          <h1>
            <span className="hidetext">Hello,</span>
          </h1>
          <h1>
            <span className="hidetext">
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
          <h1>
            <span className="hidetext">Nice to meet you</span>
          </h1>
        </section>

        <section className=" h-full flex flex-col items-center">
          <p className="text-center text-2xl text-secondary font-body">
            Front End Developer
          </p>
          <div className="border-2 border-secondary h-24 w-24 p-4 mt-10">
            <img src={arrowDown} className="m-auto h-full w-full" alt="logo" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
