import React from "react";
import logo from "../logo.svg";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="fixed w-full mt-10 px-20">
      <h1 className="float-left font-header text-secondary text-2xl">
        Francis Lee
      </h1>
      <img
        src={logo}
        className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="logo"
      />
      <Menu />
    </header>
  );
};

export default Header;
