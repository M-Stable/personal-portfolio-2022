import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import github from "../assets/github.svg";
import { MouseContext } from "../context/mouse-context";

const ProjectCard = (props) => {
  const { title, description, githublink, selected, setSelected } = props;
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const card = useRef();
  const line = useRef();
  const expandBtn = useRef();
  const infoRef = useRef();

  const tlExpand = useRef(null);
  const tlShrink = useRef(null);

  useEffect(() => {
    gsap.set(card.current, {
      xPercent: -50,
    });

    //EXPAND
    tlExpand.current = gsap
      .timeline()
      .to(
        card.current,
        {
          xPercent: 0,
          duration: 0.5,
          ease: "expo",
        },
        0.3
      )
      .to(expandBtn.current, {
        opacity: 0,
        duration: 0.5,
        ease: "expo",
      })
      .to(line.current, {
        width: "100%",
        duration: 0.5,
        ease: "expo",
      })
      .to(expandBtn.current, {
        display: "none",
        duration: 0.5,
        ease: "expo",
      })
      .to(card.current, {
        height: "100%",
        duration: 0.5,
        ease: "circ",
      })
      .to(infoRef.current, {
        opacity: 1,
        duration: 1,
      });

    //SHRINK
    tlShrink.current = gsap
      .timeline()
      .to(
        infoRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0.3
      )
      .to(line.current, {
        width: "2.5rem",
        duration: 0.2,
        ease: "expo",
      })
      .to(expandBtn.current, {
        display: "inline",
        opacity: 1,
        duration: 0.5,
        ease: "expo",
      })
      .to(card.current, {
        height: "auto",
        duration: 0.2,
        ease: "circ",
      })
      .to(card.current, {
        xPercent: -50,
        duration: 0.2,
        ease: "circ",
      });

    return () => {
      tlExpand.current.kill();
      tlShrink.current.kill();
    };
  }, []);

  useEffect(() => {
    if (selected) {
      tlExpand.current.play();
    } else {
      tlExpand.current.reverse();
    }
  }, [selected]);

  return (
    <div
      ref={card}
      className={`card w-full shadow-card `}
      onClick={() => {
        cursorChangeHandler("");
      }}
    >
      <div className="px-20 py-10 h-full backdrop-filter backdrop-brightness-card flex flex-col">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center">
            <h1 className="font-header text-3xl text-white mb-3">{title}</h1>
            <hr ref={line} className="text-tertiary border-t-4 w-10" />
          </div>

          <button
            ref={expandBtn}
            className="uppercase font-bold font-body text-secondary border-2 py-2 px-5 mt-12 mb-10"
            onClick={() => setSelected(true)}
            onMouseEnter={(e) => {
              cursorChangeHandler("hovered");
            }}
            onMouseLeave={(e) => {
              cursorChangeHandler("");
            }}
          >
            interested?
          </button>
        </div>

        <div className="relative w-full h-full">
          <div
            ref={infoRef}
            className="absolute top-0 right-0 w-full h-full flex flex-col opacity-0"
          >
            <p className="flex-grow font-body text-secondary text-xl mt-10">
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
                }}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                className="relative z-20 font-header text-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
