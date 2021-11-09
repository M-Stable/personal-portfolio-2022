import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectInfo } from "./projectInfo";

const Projects = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={props.reference}
      className="asection relative h-screen flex flex-col bg-primary px-32 py-10"
    >
      <div className="flex items-center mb-10">
        <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl text-secondary">
          <span>Projects</span>
        </h1>
        <div className="flex-grow h-2 bg-secondary mx-8"></div>
        <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl text-secondary">
          <span>4</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 h-full py-10">
        <div className="h-full w-full bg-secondary"></div>
        <div className="h-full flex flex-col justify-between">
          {projectInfo.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                order={i + 2}
                image={project.image}
                title={project.title}
                tech={project.tech}
                description={project.description}
                githublink={project.github}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
