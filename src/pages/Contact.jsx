import React, { useContext, useRef, useEffect } from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { MouseContext } from "../context/mouse-context";
import { gsap } from "gsap";

const Contact = (props) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const line = useRef();
  const animation = useRef();
  const fallAnimation = useRef();
  const copiedText = useRef();

  const email = "fchanghlee@gmail.com";

  useEffect(() => {
    animation.current = gsap
      .timeline({ paused: true })
      .to(line.current, {
        width: "100%",
      })
      .to(
        "p",
        {
          opacity: 1,
        },
        "-= .5"
      );

    fallAnimation.current = gsap
      .timeline({ paused: true })
      .to(
        copiedText.current,
        {
          xPercent: 100,
          ease: "expo",
          duration: 1.5,
        },
        0.1
      )
      .to(
        copiedText.current,
        {
          rotate: 280,
          y: 200,
          ease: "bounce",
          duration: 1.5,
        },
        "-=.7"
      )
      .to(
        copiedText.current,
        {
          opacity: 0,
        },
        "+=.2"
      );

    return () => {
      fallAnimation.current.kill();
      animation.current.kill();
    };
  }, []);

  return (
    <section
      ref={props.reference}
      className="asection h-contact bg-tertiary p-10 md:p-32"
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="w-min">
          <div>
            <span
              ref={copiedText}
              className="font-body text-secondary text-sm sm:text-xl float-right font-bold origin-center invisible"
            >
              copied!
            </span>
          </div>
          <h1
            className="font-body text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-secondary"
            onClick={() => {
              gsap.set(copiedText.current, { visibility: "visible" });
              fallAnimation.current.restart();
              navigator.clipboard.writeText(email);
            }}
            onMouseEnter={() => {
              cursorChangeHandler("hovered");
              animation.current.play();
            }}
            onMouseLeave={() => {
              cursorChangeHandler("");
              animation.current.reverse();
            }}
          >
            {email}
          </h1>
          <hr
            ref={line}
            className="border-1 sm:border-2 border-secondary w-1/12"
          />
          <p className="invisible sm:visible font-body text-secondary opacity-0">
            click to copy
          </p>
          <div className="flex justify-center mt-14">
            <a
              href="https://www.linkedin.com/in/francis-lee-889377191/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img src={linkedin} className="h-8 md:h-14" alt="linkedin" />
            </a>
            <a
              href="https://github.com/M-Stable"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <img src={github} className="ml-7 h-8 md:h-14" alt="github" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
