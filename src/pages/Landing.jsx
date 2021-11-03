import React from "react";
import arrow from "../assets/arrow-down-right.svg";
import arrowDown from "../assets/arrow-down.svg";

const Landing = () => {
  return (
    <div className="asection h-screen flex flex-col pt-64 px-20">
      <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl">
        <span>Hello,</span> <br />
        <span>My name is </span>
        <span className="text-secondary">Francis Lee</span> <br />
        <span>Nice to meet you</span>
      </h1>
      <section className="w-full">
        <img src={arrow} className="w-60" alt="logo" />
      </section>
      <section className="font-body text-2xl ml-60">
        I am a fresh graduate front end developer based in{" "}
        <span className="text-secondary">New Zealand.</span> <br />I love UI/UX
        and have a passion for building awesome websites.
      </section>
      <section className="flex-1 w-full font-body ">
        <div className="flex flex-col w-max h-full text-secondary ml-auto">
          <span className="text-xl">Check out my work</span>
          <img src={arrowDown} className="mx-auto flex-1 py-3" alt="logo" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
