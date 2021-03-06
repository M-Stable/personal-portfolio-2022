import React, { useEffect, useRef, useState, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import github from "../assets/github.svg";
import globe from "../assets/globe.svg";
import { MouseContext } from "../context/mouse-context";
import ReactPlayer from "react-player/lazy";

import ReactVisibilitySensor from "react-visibility-sensor";

const ProjectGrid = ({ project, number, video }) => {
  const [visible, setVisible] = useState(false);
  const { cursorChangeHandler } = useContext(MouseContext);

  const projGrid = useRef();
  const projNum1 = useRef();
  const projNum2 = useRef();

  const isEven = number % 2 === 0;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: projGrid.current,
        scrub: 1,
        toggleActions: "play none none reset",
      },
    });
    projAnimation.fromTo(
      projGrid.current,
      {
        y: "30%",
        opacity: 0.8,
      },
      {
        y: "-30%",
        opacity: 1,
      }
    );

    gsap.from(projNum1.current, {
      scrollTrigger: {
        trigger: projNum1.current,
        start: "top bottom",
        toggleActions: "play none none reset",
      },
      y: "50%",
      opacity: 0,
      duration: 1,
    });

    gsap.from(projNum2.current, {
      scrollTrigger: {
        trigger: projNum2.current,
        start: "top bottom",
        toggleActions: "play none none reset",
      },
      y: "50%",
      opacity: 0,
      delay: 0.2,
      duration: 1,
    });
  }, []);

  function onChange(isVisible) {
    setVisible(isVisible);
  }

  return (
    <div className="flex">
      <div
        ref={projGrid}
        className={`mb-14 w-full lg:w-7/12 h-auto  ${!isEven && "order-2"}`}
      >
        <div className="w-full mb-5 lg:mb-10 flex justify-between items-center">
          <h3
            className={`projHeader font-body uppercase text-sm md:text-xl text-secondary whitespace-nowrap ${
              isEven && "order-2"
            }`}
          >
            {project.type} Project
          </h3>
          <div
            className={`w-full  h-1 bg-secondary ${!isEven ? "ml-5" : "mr-5"}`}
          />
        </div>

        <div className="w-full mb-14">
          <ReactVisibilitySensor partialVisibility onChange={onChange}>
            <ReactPlayer
              url={video}
              playing={visible}
              loop
              muted
              width="100%"
              height="100%"
              fallback={<h1>loading...</h1>}
            />
          </ReactVisibilitySensor>
        </div>

        <div>
          <div className="lg:my-4 w-full flex flex-col md:flex-row justify-between">
            <h1 className="font-header text-3xl lg:text-4xl text-secondary">
              {project.title}
            </h1>

            <div className="flex md:ml-5 items-center my-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <img
                    src={github}
                    className="mr-4 h-5 md:h-8 "
                    onMouseEnter={(e) => {
                      cursorChangeHandler("hovered");
                    }}
                    onMouseLeave={(e) => {
                      cursorChangeHandler("");
                    }}
                    alt="logo"
                  />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={globe}
                    className="h-5 md:h-8"
                    onMouseEnter={(e) => {
                      cursorChangeHandler("hovered");
                    }}
                    onMouseLeave={(e) => {
                      cursorChangeHandler("");
                    }}
                    alt="logo"
                  />
                </a>
              )}
            </div>
          </div>
          <p className="text-secondary text-base md:text-xl font-body mb-5">
            {project.tech.join([" // "])}
          </p>
          <hr className="text-tertiary border-t-4 w-10 mb-5" />
          <p className="font-body text-lg md:text-lg lg:text-2xl text-secondary lg:mb-10">
            {project.description}
          </p>
        </div>
      </div>

      <div className="hidden lg:block flex-1">
        <div className="w-full h-full relative flex items-center justify-center">
          <div className="flex text-numberingmd xl:text-numbering font-body text-secondary mb-10">
            <p ref={projNum1}>0</p>
            <p ref={projNum2}>{number + 1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
