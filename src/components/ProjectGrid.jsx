import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectGrid = ({ project, number }) => {
  const [selected, setSelected] = useState(false);

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

    gsap.from(projGrid.current, {
      scrollTrigger: {
        trigger: projGrid.current,
        toggleActions: "play none none reset",
      },
      width: 0,
      opacity: 0,
      duration: 1.2,
      ease: "power4",
    });
  }, []);

  useEffect(() => {
    selected &&
      gsap.to(projImg.current, {
        width: "100%",
        delay: 1,
      });

    !selected &&
      gsap.to(projImg.current, {
        width: "200%",
      });
  }, [selected]);

  return (
    <div ref={projGrid} className="mb-44 w-full">
      <div className="flex items-center justify-center w-full mb-5">
        <h1 className="font-header text-xl text-secondary">Project</h1>
        <div ref={titleLine} className="w-full h-1 bg-secondary mx-8"></div>
        <h1 className="font-header xl:text-2xl lg:text-2xl sm:text-xl text-secondary">
          <span>{number + 1}</span>
        </h1>
      </div>
      <div className="w-full h-project grid grid-cols-2 items-center mb-5">
        <div
          ref={projImg}
          className={`projImg h-full w-double bg-project-${project.image} bg-cover bg-center flex items-center justify-center`}
        ></div>
        <ProjectCard
          image={project.image}
          title={project.title}
          description={project.description}
          githublink={project.github}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <span className="text-white text-2xl font-body float-right">
        {project.tech.join([" // "])}
      </span>
    </div>
  );
};

export default ProjectGrid;
