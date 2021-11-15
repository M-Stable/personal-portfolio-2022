import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ExperienceSummary from "../components/ExperienceSummary";
import { experienceInfo } from "./experienceInfo";

const Experience = (props) => {
  const details = useRef();
  const expandTween = useRef();

  useEffect(() => {
    const headers = gsap.utils.toArray(".expheader");

    headers.forEach((header, i) => {
      gsap.from(header, {
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

    expandTween.current = gsap
      .timeline({ paused: true })
      .from(details.current, {
        width: 0,
        duration: 1,
        ease: "expo",
      });
  }, []);

  return (
    <div
      ref={props.reference}
      className="asection bg-primary px-10 md:px-32 py-10"
    >
      <div className="relative mb-24 text-4xl lg:text-6xl font-header text-secondary">
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
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-secondary" />
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
