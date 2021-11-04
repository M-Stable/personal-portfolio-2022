import React, { useEffect, useRef } from "react";
import logo from "../logo.svg";
import Menu from "./Menu";
import { gsap } from "gsap";

const Header = ({ ...props }) => {
  const name = useRef();
  const logoRef = useRef();
  const menuRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      name.current,
      {
        y: "-100%",
        opacity: 0,
        duration: 0.8,
      },
      0.8
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
        y: "-100%",
        opacity: 0,
        duration: 0.8,
      },
      "-=.5"
    );
  }, []);

  return (
    <header className="fixed w-full mt-10 md:px-32 px-10 z-10 flex justify-between items-center">
      <span ref={name} className=" font-header text-secondary text-2xl">
        Francis Lee
      </span>
      <img
        ref={logoRef}
        src={logo}
        className="invisible md:visible w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="logo"
      />
      <Menu reference={menuRef} {...props} />
    </header>
  );
};

export default Header;
