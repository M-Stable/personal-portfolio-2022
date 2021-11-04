import React, { Suspense, useEffect } from "react";
import arrowDown from "../assets/arrow-down.svg";
import { Canvas } from "@react-three/fiber";
import Model from "../Model";
import "./landing.css";
import { gsap } from "gsap";
import Ticker from "react-ticker";

const Landing = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      ".hidetext",
      {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      },
      1
    );
  }, []);

  return (
    <section className="asection h-full w-full bg-gradient-radial from-primary to-primaryGradient">
      <div className="absolute h-full w-full z-10">
        <Canvas camera={{ position: [0, 0, 1], fov: 70 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 4]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
      <div className="md:pt-40 pb-10 pt-32 w-full h-full grid lg:grid-rows-landing sm:grid-rows-3 gap-8 justify-items-center items-center">
        <section className="flex-grow-2 w-full opacity-10">
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
        </section>

        <section className="w-full h-full font-header text-center xl:text-6xl lg:text-4xl sm:text-2xl">
          <h1 className="hidetext">
            <span>Hello,</span>
          </h1>
          <h1 className="hidetext">
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
          <h1 className="hidetext">
            <span>Nice to meet you</span>
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
    </section>
  );
};

export default Landing;
