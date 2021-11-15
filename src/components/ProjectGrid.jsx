import React, { useEffect, useRef, useState, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import github from "../assets/github.svg";
import { MouseContext } from "../context/mouse-context";
import ReactPlayer from "react-player";
import video from "../assets/videos/website1.mp4";

const ProjectGrid = ({ project, number }) => {
  const [selected, setSelected] = useState(false);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const projImg = useRef();
  const projGrid = useRef();
  const titleLine = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const animateIn = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: projImg.current,
    //     toggleActions: "play none none reverse",
    //   },
    // });
    // animateIn.fromTo(
    //   projImg.current,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     transformOrigin: "0% 100%",
    //     ease: "power4",
    //     duration: 2,
    //   }
    // );

    // gsap.from(titleLine.current, {
    //   scrollTrigger: {
    //     trigger: projImg.current,
    //     toggleActions: "play none none reset",
    //   },
    //   width: 0,
    //   opacity: 0,
    //   duration: 1.2,
    //   ease: "power4",
    //   delay: 0.5,
    // });

    // gsap.from(projGrid.current, {
    //   scrollTrigger: {
    //     trigger: projGrid.current,
    //     toggleActions: "play none none reset",
    //   },
    //   width: 0,
    //   opacity: 0,
    //   duration: 1.2,
    //   ease: "power4",
    // });
  }, []);

  return (
    <div ref={projGrid} className="mb-14 w-full h-auto">
      <div className="w-full lg:mb-20">
        <div className="w-full flex justify-between">
          <h1 className="font-body uppercase text-sm md:text-xl text-secondary">
            Project
          </h1>
          <h1 className="font-body text-xl md:text-3xl text-secondary">
            <span>{number + 1}</span>
          </h1>
        </div>
        <div className="w-full h-1 bg-secondary" />
      </div>

      <div className="relative">
        <div className="relative lg:absolute top-0 left-0 lg:my-8 w-full lg:w-xlProjDesc z-10">
          <div className="lg:backdrop-filter lg:backdrop-brightness-card py-8 lg:px-10">
            <h1 className="font-header text-3xl lg:text-4xl text-secondary">
              {project.title}
            </h1>
            <p className="text-secondary text-base md:text-xl font-body mb-5">
              {project.tech.join([" // "])}
            </p>
            <hr className="text-tertiary border-t-4 w-10 mb-5 lg:mb-10" />
            <p className="font-body text-lg md:text-lg lg:text-xl text-secondary lg:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus,
              nisi turpis nibh viverra vitae pellentesque elit. Est mauris
              placerat diam sed nullam massa.
            </p>

            <a
              className="hidden lg:block"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                onMouseEnter={(e) => {
                  cursorChangeHandler("hovered");
                }}
                onMouseLeave={(e) => {
                  cursorChangeHandler("");
                }}
                alt="logo"
              />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-4/5 h-full filter brightness-50 float-right mb-14">
          {/* <div class="aspect-w-16 aspect-h-9"> */}
          <ReactPlayer url={video} playing loop width="100%" height="100%" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
