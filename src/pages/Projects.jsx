import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = (props) => {
  return (
    <div
      ref={props.reference}
      className="asection h-screen bg-secondary p-32  pb-0 grid lg:grid-cols-2 md:grid-cols-1 gap-x-32"
    >
      <div>
        <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl mb-20">
          <span>Projects</span>
        </h1>
        <ProjectCard
          image={"food"}
          title={"What to Eat"}
          tech={["Firebase", "Vue.js"]}
        />
        <ProjectCard
          image={"budget"}
          title={"Go Dutch"}
          tech={["Firebase", "React Native"]}
        />
      </div>
      <div>
        <ProjectCard
          image={"music"}
          title={"Custom Spotify"}
          tech={["React", "Styled Components"]}
        />
        <ProjectCard
          image={"puzzle"}
          title={"AR Puzzle"}
          tech={["Unity", "C#"]}
        />
      </div>
    </div>
  );
};

export default Projects;
