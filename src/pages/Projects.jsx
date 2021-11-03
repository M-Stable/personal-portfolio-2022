import React from "react";

const Projects = () => {
  return (
    <div className="asection h-screen bg-secondary p-20 pb-0 grid lg:grid-cols-2 md:grid-cols-1 gap-x-32">
      <div>
        <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl mb-20">
          <span>Projects</span>
        </h1>
        <div className="w-full h-1/3 mb-20 bg-tertiary"></div>
        <div className="w-full h-1/3 mb-20 bg-tertiary"></div>
      </div>
      <div>
        <div className="w-full h-1/3 mb-20 bg-tertiary"></div>
        <div className="w-full h-1/3 mb-20 bg-tertiary"></div>
      </div>
    </div>
  );
};

export default Projects;
