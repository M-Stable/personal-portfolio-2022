import React from "react";

const ProjectCard = (props) => {
  const { image, title, tech } = props;

  return (
    <div
      className={`w-full h-1/3 mb-20 bg-tertiary bg-project-${image} bg-cover bg-center`}
    ></div>
  );
};

export default ProjectCard;
