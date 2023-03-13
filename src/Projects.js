import React from "react";
import Project from "./Project";
import reactIcon from "./images/react-icon.png";
import reduxIcon from "./images/redux-icon.png";
import budgetAllocationIcon from "./images/economist_3.jpg";
const Projects = () => {
  const projects = [
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/083/209/small/editable-flat-outline-design-of-quiz-icon-vector.jpg",
      name: "Coding Quiz Game",
      tools: "React, Redux",
      github: "/",
    },
    {
      image: budgetAllocationIcon,
      name: "Company Budget Allocation",
      tools: "React, Redux",
      github: "/",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/083/209/small/editable-flat-outline-design-of-quiz-icon-vector.jpg",
      name: "Coding Quiz Game",
      tools: "React, Redux",
      github: "/",
    },
  ];
  return (
    <div className="py-12" id="projects">
      <h1 className="text-center text-black font-semibold text-3xl tracking-wider pb-6 sm:text-2xl md:text-4xl lg:text-5xl">
        Projects
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 w-[95vw] mx-auto md:grid-cols-3 max-w-[80vw]">
        {projects.map((project) => {
          return (
            <Project
              image={project.image}
              name={project.name}
              tools={project.tools}
              github={project.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
