import { GitHub } from "@material-ui/icons";
import React from "react";

const Project = ({ image, name, tools, github }) => {
  return (
    <div className="shadow-lg border cursor-pointer flex flex-1 flex-col items-center mx-2 my-2 py-6 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-in">
      <img
        src={image}
        alt="react icon"
        className="w-28 h-28 md:w-32 md:h-32 md:object-contain"
      />
      <div className="flex flex-col items-center pt-4 text-sm md:text-md">
        <h2 className="font-semibold tracking-wide py-1 sm:text-sm md:text-md">
          {name}
        </h2>
        <h4 className="pb-4">
          <span className="font-semibold sm:text-sm md:text-md">Tools: </span>
          {tools}
        </h4>
        <GitHub
          src={github}
          className="hover:text-primary-yellow cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Project;
