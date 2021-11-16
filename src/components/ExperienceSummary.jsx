import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExperienceSummary = ({ exp, order }) => {
  const expcard = useRef();
  const [isEven, setEven] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(expcard.current, {
      scrollTrigger: {
        trigger: expcard.current,
        scrub: 1,
        end: "top 80%",
      },
      yPercent: 100,
    });
  }, []);

  useEffect(() => {
    setEven(order % 2 === 0);
  }, [order]);

  return (
    <div
      ref={expcard}
      className={`relative mb-24 bg-secondary p-14 flex flex-col items-center w-full xl:w-3/4 row-start-${
        order + 1
      } ${isEven ? "xl:col-start-1" : "xl:col-start-2"} ${
        isEven && "xl:justify-self-end"
      }`}
    >
      <div
        className={`absolute invisible xl:visible h-6 w-6 ${
          isEven ? "right-timelineMarker" : "left-timelineMarker"
        } top-0 rounded-full bg-primary border-4 border-secondary transition-all`}
      />
      <h2 className="text-4xl font-header text-primary mb-4 transition-all">
        {exp.name}
      </h2>
      <p className="font-body text-primary text-3xl mb-2 text-center">
        {exp.title}
      </p>
      <p className="font-body text-primary text-xl">
        <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
      </p>
      <hr className="text-tertiary border-t-4 w-10 my-5 lg:mb-10" />
      <ul className="text-center leading-10">
        {exp.points.map((point) => (
          <li className="font-body">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSummary;
