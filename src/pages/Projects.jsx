import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="asection h-screen bg-secondary p-20 pb-0 grid lg:grid-cols-2 md:grid-cols-1 gap-x-32">
      <div>
        <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl mb-20">
          <span>Projects</span>
        </h1>
        <ProjectCard image={"food"} tite={"What to Eat"} />
        <ProjectCard image={"budget"} tite={"Go Dutch"} />
      </div>
      <div>
        <ProjectCard image={"music"} tite={"Custom Spotify"} />
        <ProjectCard image={"puzzle"} tite={"AR Puzzle"} />
      </div>
    </div>
  );
};

export default Projects;
