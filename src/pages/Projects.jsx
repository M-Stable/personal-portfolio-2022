import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div ref={props.reference} className="asection h-screen bg-secondary p-32 ">
      <h1 className="font-header xl:text-6xl lg:text-4xl sm:text-2xl">
        <span>Projects</span>
      </h1>
      <div className="flex flex-col h-full justify-between">
        <ProjectCard
          image={"food"}
          title={"What to Eat"}
          tech={["Firebase", "Vue.js"]}
          expanded={expanded}
          setExpanded={setExpanded}
        />
        <ProjectCard
          image={"budget"}
          title={"Go Dutch"}
          tech={["Firebase", "React Native"]}
          expanded={expanded}
          setExpanded={setExpanded}
        />
        <ProjectCard
          image={"music"}
          title={"Custom Spotify"}
          tech={["React", "Styled Components"]}
          expanded={expanded}
          setExpanded={setExpanded}
        />
        <ProjectCard
          image={"puzzle"}
          title={"AR Puzzle"}
          tech={["Unity", "C#"]}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </div>
    </div>
  );
};

export default Projects;
