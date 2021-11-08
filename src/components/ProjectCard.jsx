import React, { useEffect, useState, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import github from "../assets/github.svg";
import { MouseContext } from "../context/mouse-context";

const ProjectCard = (props) => {
  const { image, title, tech, description, githublink, expanded, setExpanded } =
    props;
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const [selected, setSelected] = useState(false);

  const card = useRef();
  const line = useRef();
  const techRef = useRef();
  const infoBack = useRef();
  const infoRef = useRef();

  const tlHide = useRef();

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
    gsap.registerPlugin(ScrollTrigger);

    tlHide.current = gsap.timeline().to(
      card.current,
      {
        height: 0,
        margin: 0,
        opacity: 0,
      },
      1.2
    );

    // const skewSetter = gsap.quickSetter(".card", "skewX", "deg");
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

    // gsap.from(card.current, {
    //   scrollTrigger: {
    //     trigger: card.current,
    //     start: "center bottom",
    //     end: "bottom bottom",
    //     scrub: 3,
    //   },
    //   x: "100%",
    //   opacity: 0,
    // });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    selected ? cardExpand(tl) : cardShrink(tl);

    expanded && !selected && tlHide.current.play(selected, expanded);
    !expanded && !selected && tlHide.current.reverse(selected, expanded);
  }, [selected, expanded]);

  useEffect(() => {
    expanded && cursorChangeHandler("");
  }, [expanded, cursorChangeHandler]);

  return (
    <>
      {/* {(!expanded || selected) && ( */}
      <div
        ref={card}
        className={`card "h-full w-full shadow-card bg-project-${image} bg-cover bg-center mb-14`}
        onClick={() => {
          setSelected(true);
          setExpanded(true);
        }}
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <div className="h-full w-full backdrop-filter backdrop-brightness-50 grid grid-cols-2">
          <div className="flex flex-col p-10 justify-center w-full mt-auto">
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
                <p className="flex-grow font-body text-secondary text-xl">
                  {description}
                </p>
                <div className="flex justify-between mt-10">
                  <a href={githublink} target="_blank" rel="noreferrer">
                    <img src={github} alt="logo" />
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(false);
                      setExpanded(false);
                    }}
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                    className="relative z-20 font-header text-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default ProjectCard;
