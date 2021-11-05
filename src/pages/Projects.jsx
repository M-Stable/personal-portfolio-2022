import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectInfo } from "./projectInfo";

const Projects = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div ref={props.reference} className="asection h-screen bg-secondary p-32 ">
      <div className="flex items-center mb-10">
        <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl">
          <span>Projects</span>
        </h1>
        <div className="flex-grow h-2 bg-tertiary mx-8"></div>
        <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl">
          <span>4</span>
        </h1>
      </div>
      <div className=" h-full justify-between">
        {projectInfo.map((project) => {
          return (
            <ProjectCard
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
  );
};

export default Projects;
