import React, { useEffect, useRef } from "react";
import logo from "../logo.svg";
import Menu from "./Menu";
import { gsap } from "gsap";

const Header = (props) => {
  const name = useRef();
  const logoRef = useRef();
  const menuRef = useRef();

  const scrollTo = (reference) => {
    reference.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      name.current,
      {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
      },
      4.3
    );
    tl.from(
      logoRef.current,
      {
        y: "-100%",
        opacity: 0,
        duration: 0.8,
        stagger: {
          amount: 0.4,
        },
      },
      "-=.7"
    );
    tl.from(
      menuRef.current,
      {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
      },
      "-=.5"
    );
  }, []);

  return (
    <header className="fixed h-full bg-tertiary py-10 px-3 z-20 grid grid-rows-3 ">
      {/* <img
        ref={logoRef}
        src={logo}
        className="invisible md:visible w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="logo"
      /> */}
      <div />
      <Menu reference={menuRef} {...props} scrollTo={scrollTo} />
      <h1
        ref={name}
        className="font-header text-secondary text-2xl wm-vlr transform rotate-180"
        onClick={() => scrollTo(props.landingRef)}
      >
        Francis Lee
      </h1>
    </header>
  );
};

export default Header;
