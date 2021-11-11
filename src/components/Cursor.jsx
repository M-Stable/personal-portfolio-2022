import React, { useContext } from "react";
import "./Cursor.css";
import { MouseContext } from "../context/mouse-context";

const Cursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <div
        className={`outerball rounded-full h-6 w-6 bg-secondary fixed z-50 pointer-events-none ${
          cursorType === "hovered" && "w-16 h-16"
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
