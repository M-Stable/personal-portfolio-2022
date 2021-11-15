import React from "react";

const Menu = (props) => {
  const { projRef, expRef, contactRef, scrollTo } = props;

  return (
    <ul
      ref={props.reference}
      className="flex justify-between w-full font-body text-lg text-secondary wm-vlr transform rotate-180"
    >
      <li className="mb-6" onClick={() => scrollTo(contactRef)}>
        Contact
      </li>
      <li className="mb-6" onClick={() => scrollTo(expRef)}>
        Experience
      </li>
      <li onClick={() => scrollTo(projRef)}>Projects</li>
    </ul>
  );
};

export default Menu;
