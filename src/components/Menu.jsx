import React from "react";

const Menu = (props) => {
  return (
    <ul
      ref={props.reference}
      className="flex float-right font-body text-xl text-secondary space-x-10"
    >
      <li>Projects</li>
      <li>Experience</li>
      <li>Contact</li>
    </ul>
  );
};

export default Menu;
