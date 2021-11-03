import React from "react";

const Menu = (props) => {
  const { projRef, expRef, contactRef } = props;
  const scrollTo = (reference) => {
    reference.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ul
      ref={props.reference}
      className="flex float-right font-body text-xl text-secondary space-x-10"
    >
      <li onClick={() => scrollTo(projRef)}>Projects</li>
      <li onClick={() => scrollTo(expRef)}>Experience</li>
      <li onClick={() => scrollTo(contactRef)}>Contact</li>
    </ul>
  );
};

export default Menu;
