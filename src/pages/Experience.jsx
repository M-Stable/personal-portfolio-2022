import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ExperienceSummary from "../components/ExperienceSummary";
import { experienceInfo } from "./experienceInfo";

const Experience = (props) => {
  const [selected, setSelected] = useState({});
  const [position, setPosition] = useState(0);
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
          scrub: 1,
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
    <div ref={props.reference} className="asection bg-primary px-32 py-20">
      <div className="relative mb-24">
        {Array.from({ length: 5 }).map((_, i) => (
          <h1
            key={i}
            className="absolute expheader text-6xl font-header text-secondary whitespace-nowrap w-min opacity-0"
          >
            Experience
          </h1>
        ))}
        <h1 className=" text-6xl font-header text-secondary whitespace-nowrap w-min">
          Experience
        </h1>
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="w-full h-full pr-5 grid grid-rows-3">
          <div
            ref={details}
            className={`h-full w-full mb-14 bg-secondary row-start-${position}`}
          ></div>
        </div>
        <div className="flex flex-col w-full justify-between pl-10 border-l-4 border-secondary">
          {experienceInfo.map((exp, i) => (
            <ExperienceSummary
              key={i}
              exp={exp}
              detailsHandler={() => expandTween.current.restart()}
              selected={exp === selected}
              setSelected={setSelected}
              setPosition={setPosition}
              order={i}
            />
          ))}
        </div>
      </div>
      <h1 className="font-header text-2xl text-secondary text-center mt-5">
        Could be for you
      </h1>
    </div>
  );
};

export default Experience;
