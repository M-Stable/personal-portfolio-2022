import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceSummary from "../components/ExperienceSummary";
import { experienceInfo } from "./experienceInfo";
import Button from "../components/Button";
import resume from "../assets/Francis_Lee_Resume.pdf";

const Experience = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const headers = gsap.utils.toArray(".expheader");

    headers.forEach((header, i) => {
      const tl = gsap.timeline({ onComplete: () => ScrollTrigger.refresh() });
      tl.from(header, {
        scrollTrigger: {
          trigger: header,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        y: -(i + 1) * 30,
        opacity: 1 - ((i + 1) / 100) * 15,
      });
    });
  }, []);

  return (
    <div
      ref={props.reference}
      className="asection bg-primary px-10 md:px-32 py-10 flex flex-col items-center"
    >
      <div className="relative mb-14 text-4xl lg:text-6xl font-header text-secondary flex justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <h1
            key={i}
            className="absolute expheader whitespace-nowrap w-min opacity-0"
          >
            Experience
          </h1>
        ))}
        <h1 className="whitespace-nowrap w-min">Experience</h1>
      </div>
      <a className="w-min mb-14" href={resume} download="Francis_Lee_Resume">
        <Button text="Resume" />
      </a>
      <div className="relative w-full grid grid-cols-1 xl:grid-cols-2 gap-x-20">
        <div className="invisible xl:visible absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-secondary" />
        {experienceInfo.map((exp, i) => (
          <ExperienceSummary key={i} exp={exp} order={i} />
        ))}
      </div>
      <h1 className="font-header text-2xl text-secondary text-center mt-5">
        You could be next
      </h1>
    </div>
  );
};

export default Experience;
