import React from "react";
import Button from "./Button";

const ExperienceSummary = ({
  exp,
  detailsHandler,
  selected,
  setSelected,
  setPosition,
  order,
}) => {
  return (
    <div className="relative mb-24">
      <div
        className={`absolute h-6 w-6 -left-14 rounded-full bg-primary border-4 border-secondary transition-all ${
          selected && "border-tertiary"
        }`}
      />
      <h1
        className={`text-4xl font-header text-secondary mb-4 transition-all ${
          selected && "text-tertiary"
        }`}
      >
        {exp.name}
      </h1>
      <p className="font-body text-secondary text-3xl mb-2">{exp.title}</p>
      <p className="font-body text-secondary text-xl">
        <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
      </p>
      <Button
        text="details"
        onClick={() => {
          detailsHandler();
          setSelected(exp);
          setPosition(order + 1);
        }}
      />
    </div>
  );
};

export default ExperienceSummary;
