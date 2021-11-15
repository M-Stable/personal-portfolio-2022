import React, { useEffect } from "react";
import { projectInfo } from "./projectInfo";
import ProjectGrid from "../components/ProjectGrid";
import { Canvas } from "@react-three/fiber";
import Model from "../Model";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headers = gsap.utils.toArray(".projheader");
    const projCards = gsap.utils.toArray(".projCard");
    const projVideos = gsap.utils.toArray(".projVideo");

    headers.forEach((header, i) => {
      const tl = gsap.timeline({ onComplete: () => ScrollTrigger.refresh() });

      const animation = gsap.fromTo(
        header,
        {
          y: -(i + 1) * 30,
          opacity: 1 - ((i + 1) / 100) * 15,
        },
        {
          y: 0,
          opacity: 0,
        }
      );

      tl.to(header, {
        y: -(i + 1) * 30,
        opacity: 1 - ((i + 1) / 100) * 15,
        delay: 4.5,
      });
      tl.add(() => {
        ScrollTrigger.create({
          animation: animation,
          trigger: header,
          start: "top center",
          end: "bottom center",
          scrub: true,
        });
      });
    });

    projCards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          toggleActions: "play none none reset",
        },
        yPercent: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4",
      });
    });

    projVideos.forEach((video) => {
      gsap.from(video, {
        scrollTrigger: {
          trigger: video,
          toggleActions: "play none none reset",
        },
        xPercent: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4",
      });
    });
  }, []);

  return (
    <div
      ref={props.reference}
      className={`asection relative bg-primary px-10 md:px-32 py-10`}
    >
      {/* <div className="absolute -top-20 right-0 mr-32">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 4]} intensity={1} />
          <Model />
        </Canvas>
      </div> */}
      {/* <div className="flex flex-col items-center mb-52 py-28 px-10 border-2 border-secondary w-min">
        <h1 className="font-header xl:text-xl lg:text-4xl sm:text-2xl text-secondary">
          <span>Projects</span>
        </h1>
      </div> */}

      <div className="relative mb-20 md:mb-24 text-4xl lg:text-6xl font-header text-secondary whitespace-nowrap">
        {Array.from({ length: 5 }).map((_, i) => (
          <h1 key={i} className="absolute projheader w-min">
            My Work
          </h1>
        ))}
        <h1 className="absolute w-min">My Work</h1>
      </div>

      <div className="py-2 md:py-10 w-full">
        <div className="flex flex-col w-full items-center">
          {projectInfo.map((project, i) => {
            return <ProjectGrid key={i} number={i} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
