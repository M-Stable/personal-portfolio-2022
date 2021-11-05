import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import github from "../assets/github.svg";

const ProjectCard = (props) => {
  const { image, title, tech, expanded, setExpanded } = props;

  const [selected, setSelected] = useState(false);

  const card = useRef();
  const line = useRef();
  const techRef = useRef();
  const infoBack = useRef();
  const infoRef = useRef();

  const cardExpand = (tl) => {
    tl.to(
      line.current,
      {
        width: "100%",
        duration: 0.5,
        ease: "expo",
      },
      0.3
    );
    tl.to(
      techRef.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "-=.4"
    );
    tl.to(card.current, {
      height: "100%",
      duration: 0.5,
      ease: "circ",
    });
    tl.to(
      infoBack.current,
      {
        height: "100%",
        opacity: "50%",
        duration: 1,
        ease: "expo",
      },
      "-=.5"
    );
    tl.to(infoRef.current, {
      opacity: 1,
      duration: 1,
    });
  };

  const cardShrink = (tl) => {
    tl.to(infoRef.current, {
      opacity: 0,
      duration: 0.5,
    });
    tl.to(
      infoBack.current,
      {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "expo",
      },
      "-=.5"
    );
    tl.to(
      techRef.current,
      {
        x: "100%",
        opacity: 0,
        duration: 0.5,
      },
      "-=.5"
    );
    tl.to(
      line.current,
      {
        width: "2.5rem",
        duration: 0.2,
        ease: "expo",
      },
      "-=.5"
    );
    tl.to(
      card.current,
      {
        height: "auto",
        duration: 0.2,
        ease: "circ",
      },
      "-=.2"
    );
  };
  useEffect(() => {
    const tl = gsap.timeline();
    // gsap.registerPlugin(ScrollTrigger);
    // const skewSetter = gsap.quickSetter(".card", "skewY", "deg");
    // const proxy = { skew: 0 };
    // ScrollTrigger.create({
    //   onUpdate: (self) => {
    //     const skew = self.getVelocity() / -3000;
    //     if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //       proxy.skew = skew;
    //       gsap.to(proxy, {
    //         skew: 0,
    //         duration: 1,
    //         ease: "power3",
    //         overwrite: true,
    //         onUpdate: () => skewSetter(proxy.skew),
    //       });
    //     }
    //   },
    // });
    // gsap.set(".card", { transformOrigin: "left center", force3D: true });

    selected ? cardExpand(tl) : cardShrink(tl);
  }, [selected]);
  return (
    <div
      ref={card}
      className={`card "h-full w-full bg-project-${image} bg-cover bg-center ${
        expanded && !selected && "invisible"
      }`}
      onClick={() => {
        setSelected(!selected);
        setExpanded(!expanded);
      }}
    >
      {(!expanded || selected) && (
        <div
          className={
            "h-full w-full backdrop-filter backdrop-brightness-50 grid grid-cols-2 transition-all"
          }
        >
          <div className="flex flex-col p-10 justify-center h-full w-full">
            <h1 className="font-header text-3xl text-white">{title}</h1>
            <hr ref={line} className="text-primary border-t-4 w-10" />
            <span
              ref={techRef}
              className="text-white text-xl font-body self-end opacity-0 transform translate-x-full "
            >
              {tech.join([" | "])}
            </span>
          </div>

          <div className="relative w-full h-full">
            <div
              ref={infoBack}
              className="absolute top-0 right-0 bg-tertiary w-full h-0 opacity-0"
            />
            {selected && (
              <div
                ref={infoRef}
                className="absolute top-0 right-0 w-full h-full flex flex-col py-10 px-14 opacity-0"
              >
                <p className="flex-grow font-body text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  tincidunt consectetur etiam viverra lectus tempor in. Orci
                  tellus mollis eget habitasse semper vitae, curabitur pulvinar
                  ante. Bibendum mattis mattis ante nisi, tellus porttitor amet
                  a, eget. Elit bibendum purus, ipsum tellus a vestibulum
                  blandit. Tincidunt fermentum purus egestas quis pellentesque
                  a. Habitant quisque risus urna, auctor. Massa.
                </p>
                <div className="flex mt-10">
                  <img src={github} alt="logo" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
