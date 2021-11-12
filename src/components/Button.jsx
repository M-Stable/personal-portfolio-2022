import React, { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

const Button = ({ reference, onClick, text }) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <button
      ref={reference}
      className="uppercase font-bold font-body text-secondary border-2 py-2 px-5 mt-12 mb-10"
      onClick={onClick}
      onMouseEnter={(e) => {
        cursorChangeHandler("hovered");
      }}
      onMouseLeave={(e) => {
        cursorChangeHandler("");
      }}
    >
      {text}
    </button>
  );
};

export default Button;
