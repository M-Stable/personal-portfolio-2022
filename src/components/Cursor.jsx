import React, { useContext } from "react";
import "./Cursor.css";
import { MouseContext } from "../context/mouse-context";

const Cursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      {/* <div
        className={`outerball fixed top-0 left-0 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all z-50 pointer-events-none bg-tertiary opacity-50 ${
          cursorType === "hovered" &&
          "w-16 h-16 border-4 border-secondary border-opacity-100"
        }`}
      ></div>
      <div
        className={`innerball
          fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-secondary rounded-full z-50 pointer-events-none
            ${cursorType === "hovered" && "w-3 h-3"}
        `}
      ></div> */}
      <div
        className={`outerball rounded-full h-6 w-6 bg-tertiary opacity-50 fixed z-50 pointer-events-none ${
          cursorType === "hovered" && "w-16 h-16 border-4 border-secondary "
        }`}
      ></div>
      <div
        className={`innerball rounded-full h-1 w-1 bg-white fixed z-50 pointer-events-none ${
          cursorType === "hovered" && "w-2 h-2"
        }`}
      ></div>
    </>
  );
};

export default Cursor;
