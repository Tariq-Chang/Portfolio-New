import React from "react";
import Project from "./Project";
import reactIcon from "./images/react-icon.png";
import reduxIcon from "./images/redux-icon.png";

const Projects = () => {
  return (
    <div className=" bg-primary-dark py-12 ">
      <h1 className="text-center font-semidbold text-xl text-white tracking-wider pb-6 sm:text-2xl md:text-3xl">
        Projects
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 w-[95vw] mx-auto md:grid-cols-3 max-w-[80vw]">
        <Project
          image={reactIcon}
          name="Coding Quiz Game"
          tools="React, Redux"
          github="/"
        />
        <Project
          image={reduxIcon}
          name="Coding Quiz Game"
          tools="React, Redux"
          github="/"
        />
        <Project
          image={reactIcon}
          name="Coding Quiz Game"
          tools="React, Redux"
          github="/"
        />
      </div>
    </div>
  );
};

export default Projects;
