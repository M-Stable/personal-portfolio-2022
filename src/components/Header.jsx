import React, { useEffect, useRef } from "react";
import Menu from "./Menu";
import { gsap } from "gsap";

const Header = (props) => {
  const name = useRef();
  const menuRef = useRef();

  const { scrollTo } = props;

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      ".header",
      {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
      },
      4.3
    );
    tl.from(
      name.current,
      {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
      },
      "-=.5"
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
    <header className="invisible sm:visible header fixed h-full bg-primary py-10 px-3 z-20 grid grid-rows-3 ">
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
