import { GitHub } from "@material-ui/icons";
import React from "react";

const Project = ({ image, name, tools, github }) => {
  return (
    <div className="bg-secondary-dark flex flex-1 flex-col items-center mx-2 my-2 py-6">
      <img
        src={image}
        alt="react icon"
        className="w-28 h-28 md:w-32 h-32 object-contain"
      />
      <div className="flex flex-col items-center text-white pt-4 text-md md:text-xl">
        <h2 className="font-semibold tracking-wide sm:text-md md:text-lg">
          {name}
        </h2>
        <h4 className="pb-4">
          <span className="font-semibold sm:text-md md:text-lg">Tools: </span>
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
