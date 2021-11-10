import React from "react";
import { projectInfo } from "./projectInfo";
import ProjectGrid from "../components/ProjectGrid";

const Projects = (props) => {
  return (
    <div
      ref={props.reference}
      className={`asection relative flex flex-col bg-primary px-32 py-10`}
    >
      <div className="flex flex-col items-center my-20">
        <h1 className="font-header xl:text-8xl lg:text-4xl sm:text-2xl text-secondary">
          <span>Projects</span>
        </h1>
      </div>
      <div className="py-10">
        <div className="flex flex-col w-full items-center">
          {projectInfo.map((project, i) => {
            return <ProjectGrid key={i} number={i} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
